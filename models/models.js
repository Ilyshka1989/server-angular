const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const rewiewSchema = new Schema({
    id: String,
    name: String,
    email: String,
    rating: Number,
    message: String,
    dateCreated: Date,
    isDeleted: Boolean,
    isAccepted: Boolean
});
const Rewiew = mongoose.model('Rewiews', rewiewSchema);

exports.createUser = (userData) => {
    const rewiew = new Rewiew(userData);
    return rewiew.save();
};