// check authorized user
import express from 'express';
import cors from 'cors';
import env from "dotenv";
import bodyParser from 'body-parser';
import routes from './routes/index';


env.config();
const app = express();
const port = 9000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())
app.use("/api/v1", routes)
app.get('/test-api', (req, res)=> res.send("<h1>Docker is working...</h1>"))

app.listen(port, () => console.log(`App is started ${port}`));

export default app;