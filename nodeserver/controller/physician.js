import axios from 'axios'
import { TOMCAT_URL, headers } from '../util';

class Physician {
    login = async (req, res) => {
        try {

            const { data } = await axios.post(`${TOMCAT_URL}/physician/login`, req.body);
            return res.status(200).json({ data });
        } catch (error) {
            res.status(401).json({ message: error.message });
        }
    }
    register = async (req, res) => {
        try {
            const { data } = await axios.post(`${TOMCAT_URL}/physician/register`, req.body, headers);
            return res.status(200).json({ data });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    provideConsultation = async (req, res) => {
        try {
            const { data } = await axios.post(`${TOMCAT_URL}/physician/consult`, req.body, headers);
            return res.status(200).json({ data });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
export default new Physician();