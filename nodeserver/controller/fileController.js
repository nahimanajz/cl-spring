import axios from 'axios'
import { TOMCAT_URL } from '../util';
import FormData from 'form-data'
import fs from 'fs'

class FileController {
  async upload(req, res) {
    try {
      const { file } = req;
      const formData = new FormData();
      formData.append('medicines', fs.createReadStream(req.file.path), {
        filename: req.file.originalname
      });

      const { data } = await axios.post(`${TOMCAT_URL}/upload`, formData, {
        headers: formData.getHeaders()
      });

      return res.status(200).json({ data });
    } catch (error) {

      return res.status(500).json({ data: error.message });
    }
  };

  async download(req, res) {
    try {

      const { data } = await axios.get(`${TOMCAT_URL}/download`);
      return res.status(200).json({ data });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  async getAllMedicines(req, res) {
    try {
      const { data } = await axios.get(`${TOMCAT_URL}/all/medicines`);
      return res.status(200).json({ data });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }
}
export default new FileController();
