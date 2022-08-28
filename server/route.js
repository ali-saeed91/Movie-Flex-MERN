const express = require('express')
const router = express.Router()
const dataBase = require('nedb')
const db = new dataBase({ filename: 'database/database.db', autoload: true })


//-----------------------------------Routes--------------------------------------------//

// DataFormat = {"movieName":"", "movieRating":"", "userName":""}

// GET ALL ENDPOINT
router.get("/", async (req, res) => {
    try {
        db.find({}, (err, data) => {
            if (err) {
                return res.status(500).json({ message: "Error" + err });
            }
            //res.send(data);
            res.send(data)
        });
    } catch (error) {
        res.status(500).json({ message: "" + error });
    }
});
// GET by movieName ENDPOINT
router.get('/:movieName', async (req, res) => {
    try {
        db.find({ movieName: req.params.movieName }, (err, data) => {
            if (err) {
                return res.status(500).json({ message: "Error" + err });
            }
            if (data == null) {
                return res.json({ message: "No data found in database with this movieName" })
            }
            else {
                res.send(data)
            }
        })
    }
    catch (error) {
        res.status(500).json({ message: "" + error });
    }
})
// GET by movieRating ENDPOINT
router.get('/:movieRating', async (req, res) => {
    try {
        db.find({ movieRating: req.params.movieRating }, (err, data) => {
            if (err) {
                return res.status(500).json({ message: "Error" + err });
            }
            if (data == null) {
                return res.json({ message: "No data found in database with this movieRating" })
            }
            else {
                res.send(data)
            }
        })
    }
    catch (error) {
        res.status(500).json({ message: "" + error });
    }
})
// GET by userName ENDPOINT
router.get('/:userName', async (req, res) => {
    try {
        db.find({ userName: req.params.userName }, (err, data) => {
            if (err) {
                return res.status(500).json({ message: "Error" + err });
            }
            if (data == null) {
                return res.json({ message: "No data found in database with this userName" })
            }
            else {
                res.send(data)
            }
        })
    }
    catch (error) {
        res.status(500).json({ message: "" + error });
    }
})

// Average movieRating
router.post("/averageRating", (req, res) => {
    try {
      db.find(
        { movieName: req.body.movieName }, (err, data) => {
          const movieRatingArray = [];
          let result = 0;
  
          data.map((item) => {
            movieRatingArray.push(item.movieRating);
          });
          for (i = 0; i < movieRatingArray.length; i++) {
            result = result + Number(movieRatingArray[i]);
          }
          result = result / movieRatingArray.length;
          return res.json({ averageMovieRating: result });
        }
      );
    } catch (err) {
      console.log(err);
    }
  });
// Average movieRating 2
router.post("/averageRating2", (req, res) => {
    try {
      db.find(
        // { type: 'food' }, { item: 1, qty: 1 } )
        { movieName: req.body.movieName},{movieRating: req.body.movieRating}, (err, data) => {
          console.log(data)
          
            const movieRatingArray = [];
          let result = 0;
  
          data.map((item) => {
            movieRatingArray.push(item.movieRating);
          });
          for (i = 0; i < movieRatingArray.length; i++) {
            result = result + Number(movieRatingArray[i]);
          }
          result = result / movieRatingArray.length;
          return res.json({ averageMovieRating: result });
        }
      );
    } catch (err) {
      console.log(err);
    }
  });


// POST ENDPOINT
router.post('/', async (req, res) => {
    try {
        
        db.insert(req.body, (err, data) => {
            if (err) {
                return res.status(500).json({ message: "Error" + err });
            }
            res.json({ message: "Data inserted successfully" })
        })
    }
    catch (error) {
        res.status(500).json({ message: "" + error });
    }
})
// PATCH ENDPOINT
router.patch('/:id', async (req, res) => {
    try {
        db.findOne({ _id: req.params.id }, (err, data) => {
            if (err) {
                return res.status(500).json({ message: "Error" + err });
            }
            if (data == null) {
                return res.json({ message: "No data found in database with this id" })
            }
            else {
                db.update({ _id: req.params.id }, req.body, { upsert: false })
                return res.json({ message: "Data updated successfully" })
            }
        })
    }
    catch (error) {
        res.status(500).json({ message: "" + error });
    }
})
// DELETE ENDPOINT
router.delete("/:id", async (req, res) => {
    try {
        await db.remove({ _id: req.params.id }, (err, removalStatus) => {
            if (err) {
                return res.status(500).json({ message: "Error" + err });
            }
            if (removalStatus == true) {
                return res.json({ message: "Data removed successfully" });
            } else {
                return res.status(500).json({
                    message: "Data with this ID does not exist, nothing was deleted",
                });
            }
        });
    } catch (error) {
        res.status(500).json({ message: "" + error });
    }
});

module.exports = router