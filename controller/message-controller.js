import TextMessage from "../models/message.js";
import conservation from "../models/conservations.js";

export const newMessage = async (req, res) => {
  try {
    const message = new TextMessage(req.body);
    await message.save();
    await conservation.findByIdAndUpdate(req.body.conversationId, {
      message: req.body.text,
    });

    return res.status(200).json("message sent successfully");
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const getMessages = async (req, res) => {
  try {
    const message = await TextMessage.find({ conversationId: req.params.id });
    return res.status(200).json(message);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
