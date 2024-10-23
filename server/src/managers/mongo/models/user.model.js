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
    phone: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    bio: {
        type: String,
        default: ''
    },
	avatar: {
		type: String,
        default: '' 
	  }
});


const userModel = mongoose.model(collection, schema);

export default userModel;