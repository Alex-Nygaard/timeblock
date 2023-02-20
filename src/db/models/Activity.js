import mongoose from 'mongoose';

const ActivitySchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true,
    },
    hour: {
        type: Number,
        required: true,
    },
    minute: {
        type: Number,
        required: true,
    },
});

// ActivitySchema.index({ userid: 1 }, { unique: true });

export default ActivitySchema;
