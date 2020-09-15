import React, { useState } from 'react'
import axios from 'axios'
import { storage } from '../util/firebase'

function Upload(token) {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState()
  const [file, setFile] = useState(null)

  const onFileChange = event => {
    setFile(event.target.files[0])
  }

  const onFileUpload = () => {
    setLoading(true)

    const formData = new FormData()

    formData.append('myFile', file, file.name)

    // console.log(file)
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
        // console.log('Uploaded a blob or file!', snapshot)
        axios
          .post('/video', {
            videoFileName: videoFileName,
          })
          .then(response => {
            console.log(response)
          })
          .catch(error => {
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
