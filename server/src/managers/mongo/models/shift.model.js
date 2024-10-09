import mongoose from "mongoose";

const collection = "Shifts";
const schema = new mongoose.Schema({

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
        },
    date: {
      type: Date,
      required: true,
    },
    hour: {
      type: String,
      required: true,
    },
    duration: {
      type: Number, // duración en minutos
      required: true,
    },
    status: {
      type: String,
      default: "confirmed",
    },
    description: {
      type: String,
      default: "Terapia individual",
      required: true,
    },
    price: {
      type: Number,
      default: 30000,
    }
});

const shiftModel = mongoose.model(collection, schema);
export default shiftModel;
