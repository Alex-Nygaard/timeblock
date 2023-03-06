import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        userid: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        account_created: {
            type: Date,
            default: Date.now,
        },
    },
    { collection: 'USER' }
);

UserSchema.index({ userid: 1, email: 1 }, { unique: true });

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
