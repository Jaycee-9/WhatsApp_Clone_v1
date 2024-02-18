import Conservation from "../models/conservations.js";

export const newConversation = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;

    const exist = await Conservation.findOne({
      members: { $all: [receiverId, senderId] }, //watch it again this part
    });
    if (exist) {
      return res.status(200).json("consversation already exit");
    }

    const newConversation = new Conservation({
      members: [senderId, receiverId],
    });
    await newConversation.save();
    return res.status(200).json("conservation saved successfully");
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const getConversation = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;
    let conservation = await Conservation.findOne({
      members: { $all: [receiverId, senderId] },
    });

    return res.status(200).json(conservation);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
