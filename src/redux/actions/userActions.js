import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  MARK_NOTIFICATIONS_READ,
} from '../types'
import axios from 'axios'

// Login user
export const loginUser = (userData, history) => dispatch => {
  dispatch({ type: LOADING_UI })
  axios
    .post('/login', userData)
    .then(res => {
      setAuthorizationHeader(res.data.token)
      dispatch(getUserData())
      dispatch({ type: CLEAR_ERRORS })
      history.push('/')
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      })
    })
}

// Signup user
export const signupUser = (newUserData, history) => dispatch => {
  dispatch({ type: LOADING_UI })
  axios
    .post('/signup', newUserData)
    .then(res => {
      setAuthorizationHeader(res.data.token)
      dispatch(getUserData())
      dispatch({ type: CLEAR_ERRORS })
      history.push('/')
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      })
    })
}

// Logout user
export const logoutUser = () => dispatch => {
  localStorage.removeItem('FBIdToken')
  delete axios.defaults.headers.common['Authorization']
  dispatch({ type: SET_UNAUTHENTICATED })
}

// Get user details
export const getUserData = () => dispatch => {
  dispatch({ type: LOADING_USER })

  axios
    .get('/user')
    .then(res => {
      dispatch({
        type: SET_USER,
        payload: res.data,
      })
      localStorage.setItem('Handle', res.data.credentials.handle)
    })
    .catch(err => console.error(err))
}

// Upload image
export const uploadImage = formData => dispatch => {
  dispatch({ type: LOADING_USER })
  axios
    .post('/user/image', formData)
    .then(() => {
      dispatch(getUserData())
    })
    .catch(err => console.error(err))
}

// Edit user details
export const editUserDetails = userDetails => dispatch => {
  dispatch({ type: LOADING_USER })
  axios
    .post('/user/details', userDetails)
    .then(() => {
      dispatch(getUserData())
    })
    .catch(err => console.error(err))
}

// Mark notification read
export const markNotificationsRead = notificationIds => dispatch => {
  axios
    .post('/notifications', notificationIds)
    .then(res => {
      dispatch({
        type: MARK_NOTIFICATIONS_READ,
      })
    })
    .catch(err => console.error(err))
}

const setAuthorizationHeader = token => {
  const FBIdToken = `Bearer ${token}`
  localStorage.setItem('FBIdToken', FBIdToken)
  axios.defaults.headers.common['Authorization'] = FBIdToken
}
