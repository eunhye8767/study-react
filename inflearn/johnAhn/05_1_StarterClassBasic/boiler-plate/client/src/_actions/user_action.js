import Axios from "axios";
import {
    LOGIN_USER, REGISTER_USER, AUTH_USER
} from './types'

export function loginUser(dataTosubmit) {
    
    // request 변수 안에 리스펀스 데이터를 대입.
    const request = Axios.post('/api/users/login', dataTosubmit)
                        .then(respose =>  respose.data)

    // 리턴하여 리듀서로 보낸다.
    return {
        type: LOGIN_USER,
        // respose를 payload로 대체
        payload: request
    }
}

export function registerUser(dataTosubmit) {
    const request = Axios.post('/api/users/register', dataTosubmit)
    .then(respose =>  respose.data)

    // 리턴하여 리듀서로 보낸다.
    return {
    type: REGISTER_USER,
    payload: request
    }
}

export function auth() {
    const request = Axios.get('/api/users/auth')
    .then(respose =>  respose.data)

    // 리턴하여 리듀서로 보낸다.
    return {
    type: AUTH_USER,
    payload: request
    }
}