import { useState } from 'react'
import Step from '@mui/material/Step'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import StepContent from '@mui/material/StepContent'
import Image from 'next/image'
import { toast } from 'react-toastify'
import classNames from 'classnames'
import StepperWrapper from '@core/styles/stepper'
import StepperCustomDot from '@components/stepper-dot'

const steps = [
  {
    title: 'Hình Ảnh Phiếu Cân',
    subtitle: 'Upload 1 ảnh (bắt buộc)',
    description: ['']
  },
  {
    title: 'Hình Cont Tại Nhà Máy',
    subtitle: 'Upload 2 ảnh tối đa (Bắt buộc 1 ảnh)',
    description: ['', '']
  },
  {
    title: 'Hình Ảnh Eri Hạ ',
    subtitle: 'Upload 1 ảnh (Bắt buộc)',
    description: ['']
  },
  {
    title: 'Hình Ảnh Khóa Seal',
    subtitle: 'Upload 1 ảnh (bắt buộc)',
    description: ['']
  },
  {
    title: 'Hóa đơn và các ảnh khác tại cảng',
    subtitle: 'Upload tối đa 5 ảnh',
    description: ['', '', '', '', '']
  },
]

const ImportIMG = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [imagePaths, setImagePaths] = useState(steps.map(step => new Array(step.description.length).fill('/images/crop-image-default.jpg')))

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)

    if (activeStep === steps.length - 1) {
      toast.success('Completed All Steps!!')
    }
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  const handleImageUpload = (stepIndex, descIndex, imagePath) => {
    const newImagePaths = [...imagePaths]
    newImagePaths[stepIndex][descIndex] = imagePath
    setImagePaths(newImagePaths)
  }

  const handleImageRemove = (stepIndex, descIndex) => {
    const newImagePaths = [...imagePaths]
    newImagePaths[stepIndex][descIndex] = '/images/crop-image-default.jpg'
    setImagePaths(newImagePaths)
  }

  const handleImageClick = (stepIndex, descIndex) => {
    // Truy cập vào input file tương ứng để chọn ảnh
    const input = document.getElementById(`image-upload-${stepIndex}-${descIndex}`)
    if (input) {
      input.click()
    }
  }

  return (
    <Card>
      <CardContent>
        <StepperWrapper>
          <Stepper activeStep={activeStep} orientation='vertical'>
            {steps.map((step, stepIndex) => (
              <Step key={stepIndex} className={classNames({ active: activeStep === stepIndex })}>
                <StepLabel StepIconComponent={StepperCustomDot}>
                  <div className='step-label'>
                    <Typography className='step-number'>{`0${stepIndex + 1}`}</Typography>
                    <div className='flex gap-2'>
                      <Typography className='step-title uppercase'>{step.title}</Typography>
                      <Typography className='step-subtitle'>{step.subtitle}</Typography>
                    </div>
                  </div>
                </StepLabel>
                <StepContent>
                  <div className='flex gap-3'>
                    {step.description.map((_, descIndex) => (
                      <div key={descIndex} className='relative w-[20%] h-[120px]' >
                        <Image onClick={() => handleImageClick(stepIndex, descIndex)}
                          src={imagePaths[stepIndex][descIndex] || '/images/crop-image-default.jpg'}
                          alt='image default'
                          layout='fill'
                          objectFit='cover'
                        />
                        <div
                          className='absolute right-[-5px] translate-y-[-6px] w-[16px] h-[16px] rounded-full bg-[#FF4D4D] text-white flex justify-center items-center text-[10px] cursor-pointer'
                          onClick={() => handleImageRemove(stepIndex, descIndex)}
                        >
                          X
                        </div>
                        <label htmlFor={`image-upload-${stepIndex}-${descIndex}`} className='absolute bottom-0 mb-1 mr-1' style={{ display: 'none' }}>
                          <input
                            id={`image-upload-${stepIndex}-${descIndex}`}
                            type='file'
                            style={{ display: 'none' }}
                            onChange={e => {
                              const file = e.target.files[0]
                              if (file) {
                                const reader = new FileReader()
                                reader.onloadend = () => {
                                  handleImageUpload(stepIndex, descIndex, reader.result)
                                }
                                reader.readAsDataURL(file)
                              }
                            }}
                          />
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className='flex gap-4 mt-4'>
                    <Button
                      variant='contained'
                      className='text-[#fff] bg-[#3C95F4] '
                      onClick={handleNext}
                      size='small'
                    >
                      {stepIndex === steps.length - 1 ? 'Hoàn tất' : 'Next'}
                    </Button>
                    <Button
                      size='small'
                      color='secondary'
                      variant='tonal'
                      onClick={handleBack}
                      disabled={stepIndex === 0}
                    >
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
            <Typography>Tất cả các bước đã hoàn tất!</Typography>
            <Button
              variant='contained'
              onClick={handleReset}
              size='small'
              className='bg-white text-sm rounded-md border-solid border-2 border-[#28C76F] text-[#28C76F]'
            >
              Tài xế hạ xong
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default ImportIMG
