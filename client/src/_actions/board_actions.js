import axios from 'axios';
import {
    INSERT_BOARD
    , SELECT_BOARD
} from './types';

import { BOARD_ROUTE } from '../components/Config.js';

export function insertBoard(board){

    const request = axios.post(`${BOARD_ROUTE}/insert`, board)
        .then(response => response.data);
    console.log(board);

    return {
        type : INSERT_BOARD,
        payload  : request
    }
}

export function selectBoard(boardNo){
    const request = 
    axios.get(`${BOARD_ROUTE}/selectBoard?boardNo=`+boardNo+'&type=single')
        .then(response => response.data);

    console.log('게시글 번호 : >>>> '+boardNo);

    return {
        type : SELECT_BOARD,
        payload  : request
    }
}
