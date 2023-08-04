const mongoose = require('mongoose')
const rooms = require('../data/room')


const roomsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        default: 'https://img.freepik.com/free-vector/empty-conference-room_529539-71.jpg?w=2000',
    },

    user: { type: mongoose.Types.ObjectId, ref: 'user' }
}, {
    timestamps: true
});
roomsSchema.set('toJSON', {
    transform: (document, returnDocument) => {
        returnDocument.id = document._id.toString(),
            delete returnDocument._id;
        delete returnDocument.__v

    }
});

module.exports = mongoose.model('Rooms', roomsSchema)