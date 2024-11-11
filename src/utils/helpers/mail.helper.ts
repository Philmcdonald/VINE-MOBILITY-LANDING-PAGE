import axios from "axios";

interface EmailData {
  to: string;
  subject: string;
  templateName: string;
  replacements: Record<string, unknown>;
}

const sendMail = async (payload: EmailData) => {
  const url = "https://www.vine-mobility.com/api/mail";

  try {
    const data = await axios.post(url, payload);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export default sendMail;

