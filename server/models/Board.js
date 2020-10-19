const mongoose = require('mongoose');


// 작성날짜 2020 08 05
// author : GGwin
// info   : Board 
// field
// 글번호, 글제목, 글내용, 조회수, 좋아요수, 싫어요수, 별점, 작성자, 비고, 댓글
const boardSchema = mongoose.Schema({
    no : {
        type : Number,
        default : 0
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
    author : {
        type : String
    },
    comments : {
        type : String
    },
    reply : {
        type : String
    },
    images : {
        type : Array,
        default : []
    },
    date : {
        type : Date,
        default : Date.now
    }
})


const Board = mongoose.model('Board', boardSchema);

module.exports = { Board }