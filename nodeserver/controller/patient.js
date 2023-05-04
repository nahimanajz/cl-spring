import axios from 'axios'
import { TOMCAT_URL, headers } from '../util';
class Patient {
  login = async (req, res) => {
    try {
  
      const { data } = await axios.post(`${TOMCAT_URL}/patient/login`, req.body);
      return res.status(200).json({ data });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }
  register = async (req, res) => {
    try {
      const { data } = await axios.post(`${TOMCAT_URL}/patient/register`, req.body, headers);
      return res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  getPhysicians = async (req, res) => {
    try {
      const { data } = await axios.get(`${TOMCAT_URL}/physicians`);
      return res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  authorizePhysician = async (req, res) => {
    try {
      const { data } = await axios.post(`${TOMCAT_URL}/authorize/physician`, req.body);
      return res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  getPharmacists = async (req, res) => {
    try {
      const { data } = await axios.get(`${TOMCAT_URL}/pharmacists`);
      return res.status(200).json({ data });
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: error.message });
    }
  }
  authorizePharmacist = async (req, res) => {
    try {
      const { data } = await axios.post(`${TOMCAT_URL}/authorize/pharmacist`, req.body);
      return res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new Patient()