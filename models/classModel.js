const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User"
    },
    title: {
      type: String,
      required: [true, "A class must have a name "],
      trim: true,
      minlength: [5, "A lesson name have more or equal then 5 characters"]
     
    },

    duration:{
      type: String,
      required: [true, " A class must have a duration"]
    },

    aboutClass: {
      type: String,
      require: [true, "A class must have a summary "]
    },

    resources: {
      type: String,
      
    },
    enrolled: [
     { type: Boolean}
      
  ],

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
    
  });
  next()
})


const Class = mongoose.model("Class", classSchema);

module.exports = Class;
