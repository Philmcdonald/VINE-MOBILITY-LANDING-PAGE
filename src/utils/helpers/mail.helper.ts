import axios from "axios";

const sendMail = async (payload) => {
  const url = "/api/mail";

  try {
    const data = await axios.post(url, payload);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export default sendMail;
