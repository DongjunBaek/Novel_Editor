const mongoose = require('mongoose');


// 작성날짜 2020 08 03
// author : GGwin
// 설명 소설 스키마
// field
// 글번호, 글제목, 글내용, 조회수, 좋아요수, 싫어요수, 별점, 작성자, 비고, 댓글
const novelSchema = mongoose.Schema({
    no :{
        type : Number,
        unique : 1
    },
    title : {
        type : String
    },
    contents : {
        type : String
    },
    readCount : {
        type : Number,
        default : 0
    },
    like : {
        type : Number,
        default : 0
    },
    unLike : {
        type : Number,
        default : 0
    },
    star : {
        type : Number,
        default : 0
    },
    author : {
        type : String
    },
    comments : {
        type : String
    },
    reply : {
        type : String
    }

})


const Novel = mongoose.model('Novel', novelSchema);

module.exports = { Novel }