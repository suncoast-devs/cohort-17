import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'

export function Home() {
  const [uploadedImageUrl, setUploadedImageUrl] = useState('')
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles)
    const fileToUpload = acceptedFiles[0]
    const formData = new FormData()
    formData.append('file', fileToUpload)
    axios
      .post('/file/upload', formData, {
        headers: {
          'content-type': 'multipart/form-data',
          accept: 'application/json',
        },
      })
      .then(resp => {
        console.log(resp.data)
        setUploadedImageUrl(resp.data.secureUri)
      })
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div>
      <h1>File Upload Test!</h1>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      {uploadedImageUrl && <img src={uploadedImageUrl} />}
    </div>
  )
}
