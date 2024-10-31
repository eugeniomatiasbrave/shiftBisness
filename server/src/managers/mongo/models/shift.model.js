import mongoose from "mongoose";

const collection = "Shifts";
const schema = new mongoose.Schema({

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    dayOfWeek: {
        type: String,
        required: true,
    },
    hour: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      default: "45 min",
    },
    status: {
      type: String,
      default: "Vacant",
    },
    description: {
      type: String,
      default: "Terapia individual",
    },
    price: {
      type: Number,
      default: 30000,
    }
}, { timestamps: true });

const shiftModel = mongoose.model(collection, schema);
export default shiftModel;



