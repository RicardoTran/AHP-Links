'use client'

// React Imports
import { useState } from 'react'

// MUI Imports

import Step from '@mui/material/Step'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import StepContent from '@mui/material/StepContent'

// Third-party Imports
import { toast } from 'react-toastify'
import classNames from 'classnames'

// Component Imports
import StepperWrapper from '@core/styles/stepper'
import StepperCustomDotColorBlue from '@components/stepper-dot/StepperCustomDotColorBlue'

import DropZoneImage from './DropZoneImage'

// Vars
const steps = [
  {
    title: 'HÌNH ẢNH EIR VÀ SEAL',
    subtitle: 'Upload 1 ảnh (Bắt buộc)',
    images: [{ type: 'empty' }]
  },
  {
    title: 'HÌNH ẢNH CỬA CONT',
    subtitle: 'Upload 1 ảnh (Bắt buộc)',
    images: [{ type: 'empty' }]
  },
  {
    title: 'HÌNH ẢNH LÒNG CONT',
    subtitle: 'Upload 1 ảnh (Bắt buộc)',
    images: [{ type: 'empty' }]
  },
  {
    title: 'HÌNH ẢNH HÓA ĐƠN VÀ ẢNH KHÁC',
    subtitle: 'Upload tối đa 5 ảnh',
    images: [{ type: 'empty' }, { type: 'empty' }, { type: 'empty' }, { type: 'empty' }, { type: 'empty' }]
  },
  {
    title: 'HÌNH CONT ĐẾN NHÀ MÁY',
    subtitle: 'Upload tối đa 3 ảnh (Bắt buộc 1 ảnh)',
    images: [{ type: 'empty' }, { type: 'empty' }, { type: 'empty' }]
  }
]

const StepperVerticalWithNumbers = () => {
  // States
  const [activeStep, setActiveStep] = useState(0)
  const [reRender, setReRender] = useState(false)

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)

    if (activeStep === steps.length - 1) {
      toast.success('Completed All Steps!!')
    }
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  // submit image
  const handleReset = () => {
    console.log(steps)
    setActiveStep(0)
  }

  const handleSetFile = (File, indexStep, indexImage) => {
    steps[indexStep].images[indexImage] = File
    setReRender(!reRender)
  }

  const handleRemoveImage = (indexStep, indexImage) => {
    steps[indexStep].images[indexImage] = { type: 'empty' }
    setReRender(!reRender)
  }

  return (
    <CardContent>
      <StepperWrapper>
        <Stepper activeStep={activeStep} orientation='vertical'>
          {steps.map((step, index) => (
            <Step key={index} className={classNames({ active: activeStep === index })}>
              <StepLabel StepIconComponent={StepperCustomDotColorBlue}>
                <div className='step-label'>
                  <Typography className='step-number'>{`0${index + 1}`}</Typography>
                  <div className='flex gap-2'>
                    <Typography className='step-title'>{step.title}</Typography>
                    <Typography className='step-subtitle'>{step.subtitle}</Typography>
                  </div>
                </div>
              </StepLabel>
              <StepContent>
                <div className='flex gap-4'>
                  {step?.images.map((imageFile, indexImage) => {
                    return (
                      <DropZoneImage
                        key={indexImage}
                        imageFile={imageFile}
                        indexStep={index}
                        indexImage={indexImage}
                        handleSetFile={handleSetFile}
                        handleRemoveImage={handleRemoveImage}
                      />
                    )
                  })}
                </div>
                <div className='flex gap-4 mt-4'>
                  <Button variant='contained' className='bg-[#3C95F4]' onClick={handleNext} size='small'>
                    {index === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                  <Button size='small' color='secondary' variant='tonal' onClick={handleBack} disabled={index === 0}>
                    Back
                  </Button>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </StepperWrapper>
      {activeStep === steps.length && (
        <div className='mt-2'>
          {/* <Typography>All steps are completed!</Typography> */}
          <Button
            variant='outlined'
            onClick={handleReset}
            size='small'
            className='mt-2 text-[#FF9F43] border border-[#FF9F43] text-[15px]'
          >
            Tài xế kéo xong
          </Button>
        </div>
      )}
    </CardContent>
  )
}

export default StepperVerticalWithNumbers
