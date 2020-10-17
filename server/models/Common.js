const mongoose = require('mongoose');


// 작성날짜 2020 10 17
// author : GGwin
// info   : Common 
// field
// 일반게시판 글번호, 소설게시판 글번호, 유저번호 등등
const commonSchema = mongoose.Schema({

    boardNo : {
        type : Number,
        default : 0
    },
    NovelNo : {
        type : Number,
        default : 0
    },
    UserNo : {
        type : Number,
        default : 0
    }
})


const Common = mongoose.model('Common', commonSchema);

module.exports = { Common }