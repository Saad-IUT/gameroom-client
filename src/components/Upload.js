import React, { useState } from 'react'
import axios from 'axios'
import { storage } from '../util/firebase'
import { Button, Paper, Typography } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'
import ProgressBar from './ProgressBar'

function Upload(token) {
  const handleSelectVideo = () => {
    const fileInput = document.getElementById('videoSelect')
    fileInput.click()
  }

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState()
  const [file, setFile] = useState(null)
  let [progress, setProgress] = useState(null)

  const onFileChange = event => {
    setFile(event.target.files[0])
  }

  const onFileUpload = () => {
    setLoading(true)

    const formData = new FormData()

    formData.append('myFile', file, file.name)

    const storageRef = storage.ref()
    const videoExtension = file.name.split('.')[file.name.split('.').length - 1]
    const videoFileName = `${Math.round(
      Math.random() * Date.now()
    ).toString()}.${videoExtension}`
    var uploadTask = storageRef.child(`/${videoFileName}`).put(file)

    uploadTask.on(
      'state_changed',
      function (snapshot) {
        progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(progress)
      },
      function (err) {
        console.error('Uploading error: ', err)
        setFile(null)
        setLoading(false)
        setMessage('Upload failed!')
      },
      function () {
        uploadTask.snapshot.ref.getDownloadURL().then(() => {
          setLoading(false)
          setFile(null)
          setMessage('Completed')

          axios
            .post('/video', {
              videoFileName: videoFileName,
            })

            .then(response => {
              console.log(response)
            })
            .catch(error => {
              console.error(error.response)
            })
        })
      }
    )
  }
  const fileData = () => {
    if (file) {
      const fileSize = (file.size / 1048576).toFixed(2)
      if (fileSize > 50) {
        console.error('Max limit 50 MB')
      }
      return (
        <div>
          <Paper elavation={24} style={{ padding: 20 }}>
            <Typography variant='h6'>File Details:</Typography>
            <Typography variant='body1'>Name: {file.name}</Typography>
            <Typography variant='body1'>Type: {file.type}</Typography>
            <Typography variant='body1'>Size: {fileSize} MB</Typography>
          </Paper>
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
    <div>
      <div>
        <input
          type='file'
          id='videoSelect'
          onChange={onFileChange}
          hidden='hidden'
        />
        {file ? (
          <>{null}</>
        ) : (
          <Button
            variant='contained'
            color='primary'
            startIcon={<InsertDriveFileIcon />}
            onClick={handleSelectVideo}
            style={{ marginBottom: '20px' }}
          >
            Choose
          </Button>
        )}
        {file && (
          <Button
            variant='contained'
            color='primary'
            startIcon={<CloudUploadIcon />}
            onClick={onFileUpload}
            style={{ marginBottom: '20px' }}
          >
            Upload
          </Button>
        )}
      </div>
      {loading ? <ProgressBar progress={progress} /> : fileData()}
    </div>
  )
}

export default Upload
