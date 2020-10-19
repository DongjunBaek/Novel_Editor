import axios from 'axios';
import {
    GET_BOARDNO
} from './types';

import { COMMON_ROUTE } from '../components/Config.js';

export function getBoardNo(){

    const request = axios.get(`${COMMON_ROUTE}/getBoardNo`)
        .then(response => response.data);

    return {
        type : GET_BOARDNO,
        payload  : request
    }
}
