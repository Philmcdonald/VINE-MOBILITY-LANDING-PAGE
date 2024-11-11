import axios from "axios";

const sendMail = async (payload) => {
  const url = "http://localhost:3000/api/mail";

  try {
    const data = await axios.post(url, payload);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export default sendMail;
