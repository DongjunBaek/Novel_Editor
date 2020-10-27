const express = require('express');
const router = express.Router();
const { Board } = require('../models/Board');
const { Common } = require('../models/Common');
//=================================
//            Board
//=================================

router.post("/insert", (req, res) => {
    console.log('req.body',req.body);

    Common.findOneAndUpdate({seqName : 'board'}, {$inc : {'no' : 1}})
    // .find( { $text : { $search : term } })
    .exec((err, response)=>{
        if(err) {
            return res.status(400).json({success : false, err})
        } else {
            // console.log(no);
            // req.body.no = no;
            req.body.no = response.no;
            // console.log(res.no);
            console.log(req.body)
            const board = new Board(req.body);
        
            console.log('board',board);
        
            board.save((err,doc)=>{
                if(err) return res.json({success : false, err});
                else {
                    return res.status(200).json({success : true});
                }
            })
        }            
    })
});
router.get("/boardList", (req, res) => {

    // console.log('Request BoardList ==req',req);
    // console.log('Request BoardList ==res',res);

    Board.find()
    // .find( { $text : { $search : term } })
    .exec((err, boardList)=>{
        if(err) return res.status(400).json({success : false, err})
                    
        return res.status(200).json({success : true, boardList})
    })


});

router.get('/selectBoard', (req,res)=>{
    console.log('Request selectBoard ');
    console.log(req.query.boardNo);
    
    Board
    .find({no : req.query.boardNo})
    .exec((err, boardDetail) => {
        if(err) return res.status(400).json({success : false, err})
                    
        console.log('boardDetail',boardDetail);
        return res.status(200).json({success : true, boardDetail})
    })
    

})


module.exports = router;
