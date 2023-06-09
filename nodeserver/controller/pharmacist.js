import axios from "axios";
import { TOMCAT_URL, headers } from "../util";

class Pharmacy {
  login = async (req, res) => {
    try {

      const { data } = await axios.post(`${TOMCAT_URL}/pharmacist/login`, req.body);
      return res.status(200).json({ data });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }
  register = async (req, res) => {
    try {
      const { data } = await axios.post(`${TOMCAT_URL}/pharmacist/register`, req.body, headers);
      return res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  provideMedicine = async (req, res) => {
    console.log(`phonenumber ==>${req.body.phoneNumber}===>${req.params.medicineName}`)
    try {
      const { data } = await axios.post(`${TOMCAT_URL}/pharmacist/provide/medicines?medicineName=${req.params.medicineName}`, req.body, headers);

      return res.status(200).json({ data });
    } catch (error) {

      return res.status(500).json({ message: error.message });
    }
  }
}
export default new Pharmacy();