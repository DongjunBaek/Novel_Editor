const express = require('express');
const router = express.Router();
const { Board } = require('../models/Board');

//=================================
//            Board
//=================================

router.post("/insert", (req, res) => {
    console.log('req.body',req.body);
    const board = new Board(req.body);

    console.log('board',board);

    board.save((err,doc)=>{
        if(err) return res.json({success : false, err});
        else {
            return res.status(200).json({success : true});
        }
    })
});
router.get("/boardList", (req, res) => {

    console.log('Request BoardList ')

    Board.find()
    // .find( { $text : { $search : term } })
    .exec((err, boardList)=>{
        if(err) return res.status(400).json({success : false, err})
                    
        return res.status(200).json({success : true, boardList})
    })


});

module.exports = router;
