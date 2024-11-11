import axios from "axios";

const sendMail = async (payload) => {
  const url = "https://www.vine-mobility.com/api/mail";

  try {
    const data = await axios.post(url, payload);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export default sendMail;
