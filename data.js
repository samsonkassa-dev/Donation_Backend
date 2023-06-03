import { Router } from 'express';
import mongoose from 'mongoose';
import { errorCatcher } from './error.js';
import cors from 'cors';


const dataSchema = mongoose.Schema(
    {

        name: {
            type: String,
            required: true,
        },

        email: {
            type: String,   
            required: true,
            lowercase: true,
           
        },

        phoneNumber: {
            type: String,

        },

        organization: {
            type: String,

        },
        // country: {
        //     type: String,

        // },  
        

    }
);


const DataModel = mongoose.model('Donation', dataSchema);

async function registerData(req, res) {
  await DataModel.create({ ...req.body });
  res.status(200).json({ message: 'success' });
}

const router = Router();

router.route('/donate').post(cors(),errorCatcher(registerData));

export default router;