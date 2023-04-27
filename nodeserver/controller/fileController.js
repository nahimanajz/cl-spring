class FileController {
   async upload(req, res){
    try {
  
        const { data } = await axios.post(`${TOMCAT_URL}/upload`, req.body);
        return res.status(200).json({ data });
      } catch (error) {
        res.status(401).json({ message: error.message });
      }
    }
    async download(req, res){
        try {
      
            const { data } = await axios.get(`${TOMCAT_URL}/download`);
            return res.status(200).json({ data });
          } catch (error) {
            res.status(401).json({ message: error.message });
          }
        }
}
export default new FileController();
