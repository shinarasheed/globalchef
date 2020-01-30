const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema(
  {
    
    review: {
      type: String,
      required: [true, 'please input a review'],
      minlength: [5, 'A tour must have more or equal then 10 characters']
    },

    rating: {
      type: Number,
      min: 1,
      max: 5,
      
    },


    createdAt: {
      type: Date,
      default: Date.now()
    },

    
    class: {
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
      required: [true, 'review must belong to a tour']
    },

    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'review must belong to a user']
    },



  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);
// query  pre middleware
ReviewSchema.pre(/^find/, function(next){
  this.populate({
    path:'user',
    select: 'name photo'
  })
  next()
})

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review 
