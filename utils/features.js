import jwt from "jsonwebtoken";

const sendCookie = (newUser, res, message) => {
  const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET);

  res
    .status(201)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 15, //15 minutes
    })
    .json({
      success: "true",
      message: message,
    });
};

export { sendCookie };
