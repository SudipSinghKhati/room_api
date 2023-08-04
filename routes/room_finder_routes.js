const express = require('express');
const upload = require('../middleware/upload');


const {
    getAllRooms,
    createARoom,
    uploadImage,
    getRoomById,
    updateRoom,
    deleteRoomById,
    getAllMyRooms,
    

} = require('../controller/room_finder')

const { verifyUser } = require('../middleware/auth');
const router = express.Router();

router.get('/getAllRooms', verifyUser, getAllRooms);
router.post('/addRooms', verifyUser, createARoom);
router.put((req, res, next) => {
    res.status(405).json({ error: "Put request is not allowed" });
});
router.post("/uploadImage/:postId", upload, uploadImage);
router.get('/getMyRooms',verifyUser, getAllMyRooms);



router.get('/:room_id', verifyUser,  getRoomById);

router.put('/getMyRooms/:room_id',    updateRoom);
router.delete('/getMyRooms/:room_id', deleteRoomById);
router.post((req, res) => {
    res.status(405).json({ error: "POST method is not allowed here" })
});


module.exports = router;