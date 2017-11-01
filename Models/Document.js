const mongoose = require('mongoose')
const Schema = mongoose.Schema

const docSchema = new Schema({
    content: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    owner: {
      type: Schema.ObjectId,
      ref: 'User',
      required: true
    }
});

docSchema.index({ owner: 1, title: 1}, { unique: true });

var Docs = mongoose.model("Docs", docSchema)

export default Docs
