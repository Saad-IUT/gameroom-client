import {
  SET_VIDEOS,
  LOADING_DATA,
  DELETE_VIDEO,
  CLEAR_ERRORS,
} from '../types'
import axios from 'axios'

// Get all videos
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

// Edit video details
export const editVideoDetails = (videoDetails, videoId) => dispatch => {
  axios
    .post(`/video/details/${videoId}`, videoDetails)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => console.error(err))
}


// ---------------------------------------------------------------------------------------

// Like a scream
// export const likeScream = screamId => dispatch => {
//   axios
//     .get(`/scream/${screamId}/like`)
//     .then(res => {
//       dispatch({
//         type: LIKE_SCREAM,
//         payload: res.data,
//       })
//     })
//     .catch(err => console.error(err))
// }

// Unlike a scream
// export const unlikeScream = screamId => dispatch => {
//   axios
//     .get(`/scream/${screamId}/unlike`)
//     .then(res => {
//       dispatch({
//         type: UNLIKE_SCREAM,
//         payload: res.data,
//       })
//     })
//     .catch(err => console.error(err))
// }

// Submit a comment
// export const submitComment = (screamId, commentData) => dispatch => {
//   axios
//     .post(`/scream/${screamId}/comment`, commentData)
//     .then(res => {
//       dispatch({
//         type: SUBMIT_COMMENT,
//         payload: res.data,
//       })
//       dispatch(clearErrors())
//     })
//     .catch(err => {
//       dispatch({
//         type: SET_ERRORS,
//         payload: err.response.data,
//       })
//     })
// }

// ------------------------------------------------------------------------------------------------

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
