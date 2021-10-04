const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaForWorkouts = new Schema (
  {
    day: {
      type: Date,
      default: () => new Date()
    },
    
    exercises: [{
        
      name: {
        type: String,
        trim: true,
      },
      
      type: {
        type: String,
        trim: true,
      },

      duration: Number,
      weight: {
        type: Number,
        default: 0
      },


      sets: {
        type: Number,
        default: 0
      },


      reps: {
        type: Number,
        default: 0
      },


      duration: {
        type: Number,
        default: 0
      },
    }]
  },
  {
      toJSON: {
      virtuals: true
    }
  }
);


schemaForWorkouts.virtual("totalDuration").get(function () {

  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

// Export
const Workout = mongoose.model("Workout", schemaForWorkouts);

module.exports = Workout;