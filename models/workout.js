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
        type: String
      },


      type: {
        type: String
      },

      weight: {
        type: Number
      },


      sets: {
        type: Number
      },


      reps: {
        type: Number
      },


      duration: {
        type: Number
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