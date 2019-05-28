import mongoose, { Schema } from 'mongoose';

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, 'Name must be 5 characters long'],
  },
  description: {
    type: String,
    required: true,
    minLength: [10, 'Description must be 10 char long'],
  },
  category: {
    type: String,
  },
  meetups: [{
    type: Schema.Types.ObjectId,
    ref: 'Meetup',
  }],
}, { timestamps: true });

GroupSchema.statics.addMeetup = async function (id, args) {
  const Meetup = mongoose.model('Meetup');

  // eslint-disable-next-line no-console
  console.log("1");

  const group = await this.findById(id);

  // eslint-disable-next-line no-console
  console.log("2");

  const meetup = await new Meetup({ ...args, group });

  // eslint-disable-next-line no-console
  console.log("3");

  group.meetups.unshift(meetup);

  // eslint-disable-next-line no-console
  console.log("4");

  // // eslint-disable-next-line no-console
  // console.log('===================');
  // console.log('Meetup', meetup);

  const result = await Promise.all([meetup.save(), group.save()]);

  // eslint-disable-next-line no-console
  console.log(result);

  // eslint-disable-next-line no-console
  console.log('should have addded to group !!!');
  return result;
};

export default mongoose.model('Group', GroupSchema);

