import axios from 'axios';
import {
    INSERT_BOARD
    
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

