const router = require("express").Router();
const Workout = require("../models/workout.js");





//READ- to get previous workout 

router.get("/api/workouts", (req, res) => {
  Workout.find()
  .then(dbWorkout => {
  res.json(dbWorkout);
  })
  .catch(err => {
      res.json(err);
  });
});

//api/workouts/range
//READ - Gets workouts

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
  .then(dbWorkout => {
      console.log(dbWorkout)
      res.json(dbWorkout);
  })
  .catch(err => {
      res.json(err);
  });
});


//api-workouts.js 
//CREAT- new workout

router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });    
});





//DELETE

router.delete("/api/workouts", ( { body }, res) => {
    Workout.findByIdAndDelete(body.id)
    .then(() => {
        res.json(true);
    })
    .catch(err => {
        res.json(err);
    });
});


//api/workouts/:id
//UPDATE - takes exercises from the body and updates

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body} },
        { new: true, runValidators: true }
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});



//export
module.exports = router;


