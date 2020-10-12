const express = require('express');
const router = express.Router();
const { Board } = require('../models/Board');

//=================================
//            Board
//=================================

router.post("/insert", (req, res) => {

    const board = new Board(req.body);

    console.log('board',board);

    board.save((err,doc)=>{
        if(err) return res.json({success : false, err});
        else {
            return res.status(200).json({success : true});
        }
    })

    // user.save((err, doc) => {
    //     if (err) return res.json({ success: false, err });
    //     return res.status(200).json({
    //         success: true
    //     });
    // });
});

module.exports = router;
