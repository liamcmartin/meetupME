import mongoose, { Schema } from 'mongoose';

const MeetupSchema = new Schema({
  title: {
    type: String,
    require: true,
    minLength: ['5 characters long at least'],
  },
  description: {
    type: String,
    require: true,
    minLength: ['10 characters long at least'],
  },
  eventDate: {
    type: Date,
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group',
  },
});

export default mongoose.model('Meetup', MeetupSchema);
