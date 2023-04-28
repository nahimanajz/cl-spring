import axios from 'axios'
import { TOMCAT_URL } from '../util';



class FileController {
  async upload(req, res) {
    console.log(req.file);
    const medicines = req.file
    try {

      const { data } = await axios({
        method: 'post',
        url: `${TOMCAT_URL}/upload`,
        data: { medicines }
      })
      console.log(data)
      return res.status(200).json({ data })
    } catch (error) {
      return res.status(500).json({ data: error.message })
    }
  }

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
