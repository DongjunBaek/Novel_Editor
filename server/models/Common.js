const mongoose = require('mongoose');


// 작성날짜 2020 10 17
// author : GGwin
// info   : Common 
// field
// 일반게시판 글번호, 소설게시판 글번호, 유저번호 등등
const commonSchema = mongoose.Schema({

    seqName : {
        type : String
    },
    no : {
        type : Number,
        default : 0
    }
})


const Common = mongoose.model('Common', commonSchema);

module.exports = { Common }