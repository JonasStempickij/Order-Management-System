import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'Please provide company'],
      maxlength: 50,
    },
    // jobNumber: {
    //   type: String,
    //   required: [true, 'Please provide job number'],
    // },
    jobStatus: {
      type: Boolean,
      default: false,
    },
    jobPositions: {
      type: Array,
      default: [],
    },
    jobFileName: {
      type: String,
      required: [true, 'Please provide file to upload'],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('Job', JobSchema);
