import * as mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  salary: {
    type: String,
    required: true
  },

  contacts: {
    type: String,
    required: false
  },
  deadline: {
    type: Date,
    required: true
  },
  vacancy: {
    type: Number,
    required: true
  },

  job_description: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

const Job = mongoose.model('job', JobSchema);

export default Job;
