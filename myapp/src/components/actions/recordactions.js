import axios from 'axios';
import {
    ADDDETAIL,
    ADDRECORD,
    ALLNEWS,
    ALLALUM,
    ADDNEWS,
    SEARCHYR,
    GETRECORD,
    ADDEDUCATION
} from './types';

import { RECORD_SERVER } from '../utils/misc';


export function adddetails(data){
    const request = axios.post(`${RECORD_SERVER}/adddetail`,data)
        .then(response => response.data);
    
    return {
        type: ADDDETAIL,
        payload: request
    }
}

export function addnews(data){
    const request = axios.post(`${RECORD_SERVER}/addnews`,data)
        .then(response => response.data);
    
    return {
        type: ADDNEWS,
        payload: request
    }
}




export function allalum(){
    const request = axios.get(`${RECORD_SERVER}/allalum`)
        .then(response => response.data);
    
    return {
        type: ALLALUM,
        payload: request
    }
}

export function allnews(){
    const request = axios.get(`${RECORD_SERVER}/allnews`)
        .then(response => response.data);
    
    return {
        type: ALLNEWS,
        payload: request
    }
}


export function getrecords(){
    const request = axios.get(`${RECORD_SERVER}/getrecords`)
        .then(response => response.data);
    
    return {
        type: GETRECORD,
        payload: request
    }
}



export function searchyear(data){
    console.log(data)
    const request = axios.post(`${RECORD_SERVER}/searchyr`,data)
        .then(response => response.data);
    return {
        type:SEARCHYR,
        payload: request
    }
}

export function addrecord(data,email){
    console.log(data)
    const request = axios.post(`${RECORD_SERVER}/records`,data)
        .then(response => response.data);
    
    return {
        type: ADDRECORD,
        payload: request
    }
}


export function addeducation(data,email){
    console.log(data)
    const request = axios.post(`${RECORD_SERVER}/education`,data)
        .then(response => response.data);
    
    return {
        type: ADDEDUCATION,
        payload: request
    }
}