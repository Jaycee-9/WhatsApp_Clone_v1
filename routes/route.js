import { Router } from "express";

import { addUser, getUsers } from "../controller/user-controller.js";
import {
  newConversation,
  getConversation,
} from "../controller/conversation-controller.js";
import { getMessages, newMessage } from "../controller/message-controller.js";
import { uploadImage, getImage } from "../controller/image-controller.js";
import upload from "../utils/upload.js";
const route = Router();

//post requests
route.post("/add", addUser);
route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);
route.post("/message/add", newMessage);
route.post("/file/upload", upload.single("file"), uploadImage);
//get requests
route.get("/users", getUsers);
route.get("/message/get/:id", getMessages);
route.get("/file/:filename", getImage);
export default route;
