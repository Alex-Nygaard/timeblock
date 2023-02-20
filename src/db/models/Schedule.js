import mongoose from 'mongoose';
import ActivitySchema from './Activity.js';

const ScheduleSchema = new mongoose.Schema(
    {
        userid: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        activities: {
            type: [ActivitySchema],
            required: false,
        },
    },
    { collection: 'SCHEDULE' }
);

ScheduleSchema.index({ userid: 1, date: 1 }, { unique: true });

const ScheduleModel = mongoose.model('Schedule', ScheduleSchema);

export default ScheduleModel;
