import axios from 'axios';
import {CONSTANTS, URL} from '../constants/constants'

export const changeDescription = (event) => ({
    type: CONSTANTS.DESCRIPTION_CHANGED,
    payload: event.target.value
})

export const search = (description) => {
    const search = description ? `&description__regex=/${description}/` : ''
    const request = axios.get(`${URL}?sort=-createdAt${search}`)
    return {
        type: CONSTANTS.TODO_SEARCHED,
        payload: request
    }
}


export const add = (description) => {
    return dispatch => {
        axios.post(URL,{description}).then(
            resp => dispatch(clear())
        ).then(
            resp => dispatch(
                search()
            )
        )
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`,{...todo, done: true})
        .then(resp => dispatch({type: CONSTANTS.TODO_MARKED_AS_DONE, payload: resp.data}))
        .then(resp => dispatch(search()))
    }
}


export const markAsPeding = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`,{...todo, done: false})
        .then(resp => dispatch({type: CONSTANTS.TODO_MARKED_AS_DONE_FALSE, payload: resp.data}))
        .then(resp => dispatch(search()))
    }
}

export const markAsRemove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
        .then(resp => dispatch({type: CONSTANTS.TODO_MARKED_AS_REMOVE, payload: resp.data}))
        .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return {
        type: CONSTANTS.TODO_CLEAR
    }
}