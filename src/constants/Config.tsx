import axios from "axios";


export enum SERVER {
    LIVE = "https://gorest.co.in/public/v2/",
}

export enum RESPONSE_STATUS_CODES {
    SUCCESS = "SUCCESS",
    PENDING_ACTION = "PENDING_ACTION",
    FAILURE = "FAILURE",
    INVALID_REQUEST = "INVALID_REQUEST",
    UNAUTHORIZED = "UNAUTHORIZED",
    AUTHORIZATION_FAILD = "Authorization Failed",
};

export const headers = {
    Accept: "application/json",
};

export const axiosAPI = axios.create({
    baseURL: SERVER.LIVE,
    headers: headers,
});





