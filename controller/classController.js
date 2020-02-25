const Class = require("../models/classModel");
const User = require("../models/userModel");

exports.getAllClass = async (req, res) => {
  try {
    const lessons = await Class.find();
    res.status(200).json(lessons);
  } catch (err) {
    res.status(500).json({
      status: "failed",
      msg: err.message
    });
  }
};

exports.createClass = async (req, res) => {
  try {
    // const user = await User.findById(req.user.id);
    const newLesson = await Class.create({
      title: req.body.title,
      duration: req.body.duration,
      aboutClass: req.body.aboutClass,
      resources: req.body.resources,
      video: req.body.video,
      coverImage: req.body.coverImage,
      user: req.user.id
    });

    // console.log(newLesson);
    res.status(200).json(newLesson);
   
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message
    });
  }
};

exports.getClassById = async (req, res) => {
  try {
    const lesson = await Class.findById(req.params.id);
    res.status(200).json(lesson);
    
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message
    });
  }
};

exports.updateClass = async (req, res) => {
  try {
    const lesson = await Class.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: "success",
      msg: "Class updated!!",
      data: {
        lesson
      }
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message
    });
  }
};

exports.deleteClass = async (req, res) => {
  try {
    await Class.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message
    });
  }
};

exports.deleteMyClass = async (req, res) => {
  try {
    // check if class exist
    const lesson = await Class.findById(req.params.id);
    if (!lesson) return res.status(404).json({ msg: "Class not found" });

    // check if user owns the class

    if (lesson.user.id.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not Authorized" });
    }

    await lesson.remove();
    res.json({ msg: "Class Deleted" });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message
    });
  }
};

// exports.updateMyClass = async (req, res) => {
//   try {
//     const lesson = await Class.findById(req.params.id);

//     if (!lesson) {
//       return res.status(404).json({ msg: "lesson not found" });
//     }

//     if (lesson.user.id.toString() !== req.user.id) {
//       return res.status(401).json({ msg: "User not Authorized" });
//     }

//     await Class.findOneAndUpdate((lesson.name = req.body.name, lesson.location = req.body.location, lesson.summary = req.body.summary,lesson.description = req.body.description, lesson.video = req.body.video, lesson.coverImage = req.body.coverImage));

//     await lesson.save();

//     res.json(lesson);
//   } catch (err) {
//     console.error(err.message);
//     if (err.kind === "ObjectId") {
//       return res.status(404).json({ msg: "Post not found" });
//     }
//     res.status(500).send("Server Error...");
//   }
// };

exports.updateMyClass = async (req, res) => {
  try {
    const less = await Class.findById(req.params.id);

    if (less.user.id.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ msg: "Access Denied you do not own this class" });
    }
    const lesson = await Class.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.json(lesson);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(500).send("Server Error...");
  }
};

//working
exports.getAllMyClass = async (req, res) => {
  try {
    const lesson = await Class.find();
    const userClass = lesson.filter(
      el => el.user._id.toString() === req.user.id
    );
    // console.log(user);

    res.status(200).json({
      status: "success",
      NumOFclasses: userClass.length,
      data: {
        myClass: userClass
      }
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message
    });
  }
};



// const cloudinary = require('cloudinary');
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME, 
//   api_key: process.env.CLOUDINARY_API_KEY, 
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

// app.route("/api/picture_upload")
// .post((req, res) => {

//   const picture = req.files.file;
//   cloudinary.uploader.upload(picture.path)
//     .then(results => res.json(results))
//     .catch(err => res.status(400).json(err));

// });