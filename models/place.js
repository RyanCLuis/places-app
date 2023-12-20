///////////////////////////////////
// Our Schema and dependencies ////
///////////////////////////////////
const mongoose = require('../utils/connections')

// destructuring the Schema and model from mongoose
const { Schema, model } = mongoose


/////////////////////////
// Schema definition ////
/////////////////////////
const placeSchema = new Schema({
    name: { type: String, required: true },
    region: { type: String, required: true },
    subRegion: { type: String, required: true },
    mapLink: { type: String, required: true },
    lat: { type: Number, required: true },
    long: { type: Number, required: true },
    flag: { type: String, required: true },
    flagSmall: { type: String, required: true },
    visited: { type: Boolean, required: true },
    wishlist: { type: Boolean, required: true },
    favorite: { type: Boolean, required: true },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

/////////////////////////
// create user model ////
/////////////////////////
const User = model('Place', placeSchema)

/////////////////////////
// export user model ////
/////////////////////////
module.exports = User