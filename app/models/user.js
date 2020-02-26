const mongoose = require("mongoose")

const Shema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    age: String,
    gender: String,
    height: String,
    weight: String,
    city: String,
    city_code: String,
    street_number: String,
    street_type: String,
    street_name: String,
    phone: String,
    image_profil: {
        type: String,
        default: "https://maxesport.gg/medias/Figurines-Funko-POP-Overwatch-Mei-1-400x400.jpg"
    }
}, {
    collection: 'users',
    minimize: false,
    versionkey: false
}) .set('toJSON', {
    transform: (doc, ret) => {
        ret.id = ret._id

        delete ret.id
    }
})

module.exports = Shema
