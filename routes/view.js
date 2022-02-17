// require path
const path = require ('path');
// require router
const router = require('express').Router();

// html route for /exercise
router.get("/exercise", (req,res)=>{
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})

//html route for /stats
router.get("/stats", (req,res)=>{
    res.sendFile(path.join(__dirname, "../public/stats.html"))
})

module.exports = router;