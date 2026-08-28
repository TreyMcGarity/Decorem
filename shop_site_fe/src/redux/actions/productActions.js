import axios from 'axios';
import { API_BASE_URL } from '../../config';
import {
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILURE,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE
} from '../actions/type';


export const getProducts = () => (dispatch) => {
    axios
    .get(`${API_BASE_URL}/products`)
    .then((res) => {
        dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: res.data,
        });
    })
    .catch((err) => {
        dispatch({
            type: GET_PRODUCTS_FAILURE,
            payload: err.message,
        });
    });
};

export const getProduct = (id) => (dispatch) => {
    axios
    .get(`${API_BASE_URL}/products/${id}`)
    .then((res) => {
        dispatch({
            type: GET_PRODUCT_SUCCESS,
            payload: res.data,
        });
    })
    .catch((err) => {
        dispatch({
            type: GET_PRODUCT_FAILURE,
            payload: err.message,
        });
    });
};


export const addProduct = (data) => (dispatch) => {
    axios
    .get(`${API_BASE_URL}/products`, data)
    .then((res) => {
        dispatch({
            type: ADD_PRODUCT_SUCCESS,
            payload: res.data,
        });
    })
    .catch((err) => {
        dispatch({
            type: ADD_PRODUCT_FAILURE,
            payload: err.message,
        });
    });
};

export const updateProduct = (id, updatedData) => (dispatch) => {
    axios
    .get(`${API_BASE_URL}/products/${id}`, updatedData)
    .then((res) => {
        dispatch({
            type: UPDATE_PRODUCT_SUCCESS,
            payload: res.updatedData,
        });
    })
    .catch((err) => {
        dispatch({
            type: UPDATE_PRODUCT_FAILURE,
            payload: err.message,
        });
    });
};

export const deleteProduct = (id) => (dispatch) => {
    axios
    .get(`${API_BASE_URL}/products/${id}`)
    .then((res) => {
        dispatch({
            type: DELETE_PRODUCT_SUCCESS,
            payload: res.data,
        });
    })
    .catch((err) => {
        dispatch({
            type: DELETE_PRODUCT_FAILURE,
            payload: err.message,
        });
    });
};