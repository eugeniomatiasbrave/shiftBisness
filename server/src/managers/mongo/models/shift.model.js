import mongoose from "mongoose";

const collection = "Shifts";
const schema = new mongoose.Schema({

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
        },
    date: {
      type: Date,
      required: true,
    },
    hour: {
      type: String,
      enum: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: [ "Vacant", "Reserved"], // ["Available", "Pending", "Confirmed", "Reserved", "Cancelled"],
      default: "Vacant",
  },
    description: {
      type: String,
      default: "Terapia individual",
      required: true,
    },
    price: {
      type: Number,
      default: 30000,
    },
    dayOfWeek: {
      type: String,
      enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    }
});

const shiftModel = mongoose.model(collection, schema);
export default shiftModel;



