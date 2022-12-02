import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  student: {type: String, required: true},
  id: {type: Number, required: true, unique: true},
  module: {type: String, required: true},
  score: {type: Number, required: true}
});

export default mongoose.model('Students', StudentSchema);