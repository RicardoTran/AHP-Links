'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

// Components Imports
import CustomTextField from '@core/components/mui/TextField'

// Styled Component Imports
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

const FormLayoutsSeparator = () => {
  // States
  const [formData, setFormData] = useState({
    bookingNumber: '',
    siHour: null,
    contNumber: '',
    sealNumber: '',
    maxGrossNumber: '',
    tareNumber: '',
    driver: '',
    grossTareNumber: '',
    emptyPlace: '',
    cutStock: '',
    note: ''
  })

  const handleClickShowPassword = () => setFormData(show => ({ ...show, isPasswordShown: !show.isPasswordShown }))

  const handleClickShowConfirmPassword = () =>
    setFormData(show => ({ ...show, isConfirmPasswordShown: !show.isConfirmPasswordShown }))

  const handleReset = () => {
    setFormData({
      bookingNumber: '',
      siHour: null,
      contNumber: '',
      sealNumber: '',
      maxGrossNumber: '',
      tareNumber: '',
      driver: '',
      grossTareNumber: '',
      emptyPlace: '',
      cutStock: '',
      note: ''
    })
  }

  return (
    <Card>
      <CardHeader title='CẬP NHẬT THÔNG TIN NÂNG CONT' />
      <Divider />
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Số Booking'
                placeholder='SGNE4'
                value={formData.bookingNumber}
                onChange={e => setFormData({ ...formData, bookingNumber: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AppReactDatepicker
                selected={formData.siHour}
                showYearDropdown
                showMonthDropdown
                onChange={siHour => setFormData({ ...formData, siHour })}
                placeholderText='MM/DD/YYYY'
                customInput={<CustomTextField fullWidth label='Giờ si' placeholder='MM-DD-YYYY' />}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Số Cont'
                placeholder='TIIU4'
                value={formData.contNumber}
                onChange={e => setFormData({ ...formData, contNumber: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Số Seal'
                placeholder='TIHU4'
                value={formData.sealNumber}
                onChange={e => setFormData({ ...formData, sealNumber: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Số Max Gross'
                type='number'
                placeholder='32500'
                value={formData.maxGrossNumber}
                onChange={e => setFormData({ ...formData, maxGrossNumber: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Số Tare'
                type='number'
                placeholder='5600'
                value={formData.tareNumber}
                onChange={e => setFormData({ ...formData, tareNumber: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Tài xế kéo'
                placeholder='Lê Hải'
                value={formData.driver}
                onChange={e => setFormData({ ...formData, driver: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Số Gross(Bao gồm tare)'
                type='number'
                placeholder='5600'
                value={formData.grossTareNumber}
                onChange={e => setFormData({ ...formData, grossTareNumber: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Nơi lấy rỗng'
                placeholder='SOWATCO'
                value={formData.emptyPlace}
                onChange={e => setFormData({ ...formData, emptyPlace: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Cắt kho'
                placeholder='HƯNG VƯƠNG'
                value={formData.emptyPlace}
                onChange={e => setFormData({ ...formData, emptyPlace: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <CustomTextField
                fullWidth
                label='Ghi chú kéo'
                placeholder='LẤY ĐÚNG NGÀY 2/3, LẤY BD'
                value={formData.note}
                onChange={e => setFormData({ ...formData, note: e.target.value })}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button type='submit' variant='contained' className='mie-2 bg-[#3C95F4]'>
            Cập nhật
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

export default FormLayoutsSeparator
