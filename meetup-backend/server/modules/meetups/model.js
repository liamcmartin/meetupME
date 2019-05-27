import mongoose, { Schema } from 'mongoose';

const MeetupSchema = new Schema({
    title: {
        type: String, 
        require: true 
    }, 
    description: {
        type: String, 
        require: true 
    }
});

export default mongoose.model('Meetup', MeetupSchema)