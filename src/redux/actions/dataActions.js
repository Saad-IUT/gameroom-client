import {
  SET_VIDEOS,
  LOADING_DATA,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  DELETE_VIDEO,
  SET_ERRORS,
  POST_SCREAM,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_SCREAM,
  STOP_LOADING_UI,
  SUBMIT_COMMENT,
} from '../types'
import axios from 'axios'

// Get all screams
export const getVideos = () => dispatch => {
  dispatch({ type: LOADING_DATA })
  axios
    .get('/videos')
    .then(res => {
      dispatch({
        type: SET_VIDEOS,
        payload: res.data,
      })
    })
    .catch(err => {
      dispatch({
        type: SET_VIDEOS,
        payload: [],
      })
    })
}

// Get a scream
export const getScream = screamId => dispatch => {
  dispatch({ type: LOADING_UI })
  axios
    .get(`/scream/${screamId}`)
    .then(res => {
      dispatch({
        type: SET_SCREAM,
        payload: res.data,
      })
      dispatch({ type: STOP_LOADING_UI })
    })
    .catch(err => console.error(err))
}

// Post a scream
export const postScream = newScream => dispatch => {
  dispatch({ type: LOADING_UI })
  axios
    .post('/scream', newScream)
    .then(res => {
      dispatch({
        type: POST_SCREAM,
        payload: res.data,
      })
      dispatch(clearErrors())
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      })
    })
}

// Like a scream
export const likeScream = screamId => dispatch => {
  axios
    .get(`/scream/${screamId}/like`)
    .then(res => {
      dispatch({
        type: LIKE_SCREAM,
        payload: res.data,
      })
    })
    .catch(err => console.error(err))
}

// Unlike a scream
export const unlikeScream = screamId => dispatch => {
  axios
    .get(`/scream/${screamId}/unlike`)
    .then(res => {
      dispatch({
        type: UNLIKE_SCREAM,
        payload: res.data,
      })
    })
    .catch(err => console.error(err))
}

// Submit a comment
export const submitComment = (screamId, commentData) => dispatch => {
  axios
    .post(`/scream/${screamId}/comment`, commentData)
    .then(res => {
      dispatch({
        type: SUBMIT_COMMENT,
        payload: res.data,
      })
      dispatch(clearErrors())
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      })
    })
}

// Delete a video
export const deleteVideo = videoId => dispatch => {
  axios
    .delete(`/video/${videoId}`)
    .then(() => {
      dispatch({ type: DELETE_VIDEO, payload: videoId })
    })
    .catch(err => console.error(err))
}

// Get user details
export const getUserData = userHandle => dispatch => {
  dispatch({ type: LOADING_DATA })
  axios
    .get(`/user/${userHandle}`)
    .then(res => {
      dispatch({
        type: SET_VIDEOS,
        payload: res.data.videos,
      })
    })
    .catch(() => {
      dispatch({
        type: SET_VIDEOS,
        payload: null,
      })
    })
}

export const clearErrors = () => dispatch => {
  dispatch({ type: CLEAR_ERRORS })
}
