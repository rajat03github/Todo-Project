import Task from "../models/task.js";

const newTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    await Task.create({
      title,
      description,
      user: req.user, //Auth.js done it
    });

    res.status(201).json({
      success: true,
      message: "Task Added",
    });
  } catch (error) {
    console.log(error);
  }
};

export { newTask };
