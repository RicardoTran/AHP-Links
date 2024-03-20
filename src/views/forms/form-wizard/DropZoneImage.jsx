import Image from 'next/image'

import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined'
import { useDropzone } from 'react-dropzone'
import CancelIcon from '@mui/icons-material/Cancel'

const DropZoneImage = ({ imageFile, indexStep, indexImage, handleSetFile, handleRemoveImage }) => {
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    onDrop: acceptedFiles => {
      let file = acceptedFiles.map(file => Object.assign(file))

      if (file && file[0]) {
        handleSetFile(file[0], indexStep, indexImage)
      }
    }
  })

  if (imageFile.type !== 'empty') {
    let url = URL.createObjectURL(imageFile)

    return (
      <div className='relative w-[20%] h-[120px] bg-[#ccc] flex justify-center items-center rounded'>
        <Image src={url} fill alt='image' />
        <CancelIcon
          onClick={() => {
            handleRemoveImage(indexStep, indexImage)
          }}
          className='absolute right-[-10px] top-[-10px]  rounded-full bg-white text-[#FF4D4D] text-[20px] cursor-pointer'
        />
      </div>
    )
  }

  return (
    <div
      {...getRootProps({ className: 'dropzone' })}
      className='relative w-[20%] h-[120px] bg-[#ccc] flex justify-center items-center rounded'
    >
      <input {...getInputProps()} />
      <InsertPhotoOutlinedIcon className='text-white text-[45px]' />
      <CancelIcon
        onClick={() => {
          handleRemoveImage(indexStep, indexImage)
        }}
        className='absolute right-[-10px] top-[-10px]  rounded-full bg-white text-[#FF4D4D] text-[20px] cursor-pointer'
      />
    </div>
  )
}

export default DropZoneImage
