import React, { useCallback, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'
import Moment from 'react-moment'

export function Home() {
  const [uploadedImageUrl, setUploadedImageUrl] = useState('')
  const [images, setImages] = useState([])
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
        // setUploadedImageUrl(resp.data.secureUri)
        console.log(images)
        setImages(prevImages => {
          return [resp.data, ...prevImages]
        })
      })
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const loadPictures = async () => {
    const resp = await axios.get('/api/images')
    setImages(resp.data)
  }

  useEffect(() => {
    // load all the images form our API(database) and add them to state to display below
    loadPictures()
  }, [])

  return (
    <div>
      <h1>Welcome!</h1>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Upload a new picture!</p>
        )}
      </div>
      {/* {uploadedImageUrl && <img src={uploadedImageUrl} />} */}
      <main>
        <ul>
          {images.map(image => {
            return (
              <li className="image-tile">
                <img src={image.imageUrl} alt="" />
                {/* <p>{new Date(image.dateUploaded).toDateString()}</p> */}
                <Moment fromNow>{image.dateUploaded}</Moment>
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  )
}
