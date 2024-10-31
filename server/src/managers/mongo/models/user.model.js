import mongoose from 'mongoose';


const collection = "Users";
const schema = new mongoose.Schema({

	name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    avatar: {
        type: Array,
        default: [
            { maintype: 'image/webp', 
              path: '/files/default/avatar-default.webp', 
              main: true 
            }
        ]
    }
   
}, { timestamps: true });


const userModel = mongoose.model(collection, schema);

export default userModel;