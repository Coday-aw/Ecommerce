import Massage from "../models/massageModel.js";

const createMassage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMassage = new Massage({
      name,
      email,
      message,
    });
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    await newMassage.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export { createMassage };
