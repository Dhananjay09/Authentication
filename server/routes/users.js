const express = require("express");
const router = express.Router();
const { listUsers, listPosts ,likePost, addPost, addcalenderEvent, getcalenderEvents, updateevent,removeevent} = require("../controllers/users");
router.get("/list-users", listUsers);
router.get("/all-products", listPosts);
router.post("/update-like", likePost);
router.post("/add-post", addPost);
router.post("/addevent", addcalenderEvent);
router.get("/getevents",getcalenderEvents);
router.post("/updateevent",updateevent);
router.post("/removeevent",removeevent)
module.exports = router;