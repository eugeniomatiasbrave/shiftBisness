import mongoose from 'mongoose';

const collection = "Shifts"
const schema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    duration: {
        type: Number, // duración en minutos
        default: 60,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'pending'
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        default: 20000,
        required: true
    }
}, {
    timestamps: true // añade createdAt y updatedAt automáticamente
});


const shiftModel = mongoose.model(collection,schema);
export default shiftModel;