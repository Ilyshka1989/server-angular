const mongoose = require('../mongoose/mongoose').mongoose;
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
exports.Rewiew = Rewiew;

rewiewSchema.set('toJSON', {
    virtuals: true
});

exports.createRewiew = (rewiewData) => {
    const rewiew = new Rewiew(rewiewData);
    return rewiew.save();
};

