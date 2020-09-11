import React, { useState } from 'react'
// import logo from "./logo.svg";
// import './App.css'
import axios from 'axios'
import { storage } from '../util/firebase'

function Upload(token) {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState()
  // "Choose before Pressing the Upload button"
  const [file, setFile] = useState(null)

  const onFileChange = event => {
    // Update the state
    setFile(event.target.files[0])
  }

  const onFileUpload = () => {
    setLoading(true)

    // Create an object of formData
    const formData = new FormData()

    // Update the formData object
    formData.append('myFile', file, file.name)

    // Details of the uploaded file
    console.log(file)
    // const type = file.type.split(`/`)[0]
    const storageRef = storage.ref()
    const videoExtension = file.name.split('.')[file.name.split('.').length - 1]
    const videoFileName = `${Math.round(
      Math.random() * Date.now()
    ).toString()}.${videoExtension}`

    storageRef
      .child(`/${videoFileName}`)
      .put(file)
      .then(snapshot => {
        setLoading(false)
        setFile(null)
        setMessage('Upload success!')
        console.log('Uploaded a blob or file!', snapshot)
        axios
          .post('/video', {
            videoFileName: videoFileName,
          })
          .then(response => {
            // handle success
            console.log(response)
          })
          .catch(error => {
            // handle error
            console.log(error.response)
          })
      })
      .catch(err => {
        console.log('Uploading error: ', err)
        setFile(null)
        setLoading(false)
        setMessage('Upload failed!')
      })
  }
  const fileData = () => {
    if (file) {
      const fileSize = (file.size / 1048576).toFixed(2)
      if (fileSize > 50) {
        console.error('Max limit 50 MB')
      }
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {file.name}</p>
          <p>File Type: {file.type}</p>
          <p>File Size: {fileSize} MB</p>

          {/* <p>Last Modified: {file.lastModifiedDate.toDateString()}</p> */}
        </div>
      )
    } else {
      return (
        <div>
          <br />
          <h4>{message}</h4>
        </div>
      )
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        {/* <img src={logo} className='App-logo' alt='logo' /> */}
        <div>
          <input type='file' onChange={onFileChange} />
          {file && (
            <button className='buttonload' onClick={onFileUpload}>
              {loading ? (
                <div>
                  <i className='fa fa-circle-o-notch fa-spin'></i> Loading
                </div>
              ) : (
                'Upload!'
              )}
            </button>
          )}
        </div>
        {fileData()}
      </header>
    </div>
  )
}

export default Upload
