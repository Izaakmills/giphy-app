let express = require('express');
let router = express.Router();
let axios = require('axios')

// let queryURL = "https://api.giphy.com/v1/gifs/"
let APIKEY = "NCWFcjgphTcq8gGzLPS918neSnqMDRDO"

router.get('/getStartUpGiphs', (req, res, next) => {
    axios.get("https://api.giphy.com/v1/gifs/trending?&rating=pg&limit=50&fmt=json&api_key="+APIKEY+"")
    .then(function(result) {
        let giphs = result.data.data
        res.send({giphs});
    })
    .catch(err=>{
      console.dir(err,{depth:null,colors:true})
        res.send("Something went wrong. Check Routes/Api")
      })
})

router.get("/searchGiphs",(req,res,next) => {
  console.log(req.query.term)
  let query = req.query.term
  axios.get("https://api.giphy.com/v1/gifs/search?q="+query+"&rating=pg&limit=50&&fmt=json&api_key="+APIKEY+"")
    .then(result=>{
      console.log(result.data.data.length)
      res.send(result.data.data)
    })
    .catch(err=> {
      console.dir(err,{depth:null,colors:true})
      res.send("something went wrong check server output logging")
    })
})

module.exports = router;
