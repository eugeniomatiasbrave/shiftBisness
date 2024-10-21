import mongoose from 'mongoose';

/* 
Luego: repasar para implementar la relación entre usuarios y productos si los hubiera
   type: mongoose.Schema.Types.ObjectId,
   unique:true,
   index:true,
   ref: 'Products',
   Incorporar: Date.now

   slug: {
        type: String,
        unique: true
    },
*/

/* 
Populate: 
   schema.pre(['find','findOne'], function(){
	 this.populate('cartId')
   })
*/


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
		type: String // Aquí se almacenará la imagen codificada en Base64
	  }
});


const userModel = mongoose.model(collection, schema);

export default userModel;