import express from "express";
const routes = express.Router();

routes.post('/pharmacist/login', pharmacist.login);
routes.post('/pharmacist/register', pharmacist.register);

routes.post('/physician/login', physician.login);
routes.post('/physician/register', physician.register);
routes.post('/physician/consult', physician.consult);

routes.post('/patient/login', patient.login);
routes.post('/patient/register', patient.register);
routes.get('/patient/physicians', patient.getPhysicians);
routes.get('/patient/physicians', patient.getPharmacists);
routes.post('/patient/authorize/physician', patient.authorizePhysician);
routes.post('/patient/authorize/pharmacist', patient.authorizePharmacist);

routes.post('/file/upload', file.upload);
routes.post('/file/download', file.download);

export default routes;
