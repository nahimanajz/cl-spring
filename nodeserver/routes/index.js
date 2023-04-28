import express from "express";
import patient from '../controller/patient'
import pharmacist from '../controller/pharmacist'
import physician from '../controller/physician'
import fileObject from '../controller/fileController'
import multer from 'multer'

const routes = express.Router();


routes.post('/pharmacist/login', pharmacist.login);
routes.post('/pharmacist/register', pharmacist.register);
routes.post('/pharmacist/medicines/:medicineName', pharmacist.provideMedicine);


routes.post('/physician/login', physician.login);
routes.post('/physician/register', physician.register);
routes.post('/physician/consult', physician.provideConsultation);


routes.post('/patient/login', patient.login);
routes.post('/patient/register', patient.register);
routes.get('/patient/physicians', patient.getPhysicians);
routes.get('/patient/physicians', patient.getPharmacists);
routes.post('/patient/authorize/physician', patient.authorizePhysician);
routes.post('/patient/authorize/pharmacist', patient.authorizePharmacist);


const upload = multer({ dest: 'uploads/' });

routes.post('/file/upload', upload.single('medicines'), fileObject.upload);
routes.post('/file/download', fileObject.download);
routes.get('/file/all/medicines', fileObject.getAllMedicines)

export default routes;
