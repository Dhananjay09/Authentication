const express = require("express");
const router = express.Router();
const { listUsers, listPosts ,likePost, addPost, addcalenderEvent, getcalenderEvents, updateevent,deleteevent} = require("../controllers/users");
router.get("/list-users", listUsers);
router.get("/all-products", listPosts);
router.post("/update-like", likePost);
router.post("/add-post", addPost);
router.post("/addevent", addcalenderEvent);
router.get("/getevents",getcalenderEvents);
router.post("/updateevent",updateevent);
router.post("/deleteevent",deleteevent)
module.exports = router;
