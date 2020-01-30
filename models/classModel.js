const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User"
    },
    name: {
      type: String,
      required: [true, "A class must have a name "],
      unique: true,
      trim: true,
      maxlength: [
        40,
        "A lesson name must have less or equal then 40 characters"
      ],
      minlength: [5, "A lesson name have more or equal then 10 characters"]
      //   validate: [validator.isAlpha, 'A Tour name must be a character']
    },

    location: String,

    summary: {
      type: String,
      require: [true, "A class must have a summary "]
    },
    description: {
      type: String,
      require: [true, "A class must have a description "]
    },
    video:{
        type: String,
        require: [true, "please upload a video for the class"]
    },
    
    coverImage: {
        type: String,
        require: [true, "please upload a cover image for the class"]
    },

    dateCreatedAT:{
        type: Date,
        default: Date.now()
    }

  },

  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// Query  pre-Middleware 

classSchema.pre(/^find/, function(next){
  this.populate({
    path:'user',
    select: '-__v -passwordchangedat -datecreated -email'
  });
  next()
})
// classSchema.pre(/^find/, function(next){
//   this.populate({
//     path:'user',
//     select: '-__v -passwordchangedat -datecreated -email'
//   });
//   next()
// })



//  virtual populate to populate the tour model with reviews
// classSchema.virtual('class', {
//     ref: 'User',
//     foreignField: 'class',
//     localField: '_id',
    
//   });

const Class = mongoose.model("Class", classSchema);

module.exports = Class;
