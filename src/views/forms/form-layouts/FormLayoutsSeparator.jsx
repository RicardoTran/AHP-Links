'use client'

// React Imports
import { useEffect, useState } from 'react'

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
    SO_BOOKING: '',
    SI_CUT_OFF: null,
    SO_CONT: '',
    SO_SEAL: '',
    SO_MAX_GROSS: '',
    SO_TARE: '',
    TAIXE_KEO: '',
    TL_GROSS: '',
    NOI_LAY_CONT: '',
    NOI_DONG_HANG: '',
    note: ''
  })

  const fetchData = async () => {
    let token = ''
    let recordId = 12998
    let url = `https://fmapp.vdigitrans.net/fmi/data/v1/databases/TrackingContainer/layouts/PartnerNangCont/records/${recordId}`

    try {
      let res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      let resData = await res.json()

      // console.log(resData)
      let code = resData.messages[0].code

      if (code != 0) {
        let message = resData.messages[0].message

        alert(message)
      }

      let fetchData = resData.response.data[0].fieldData

      let data = {
        SO_BOOKING: fetchData.SO_BOOKING,
        SI_CUT_OFF: fetchData.SI_CUT_OFF,
        SO_CONT: fetchData.SO_CONT,
        SO_SEAL: fetchData.SO_SEAL,
        SO_MAX_GROSS: fetchData.SO_MAX_GROSS,
        SO_TARE: fetchData.SO_TARE,
        TAIXE_KEO: fetchData.TAIXE_KEO,
        TL_GROSS: fetchData.TL_GROSS,
        NOI_LAY_CONT: fetchData.NOI_LAY_CONT,
        NOI_DONG_HANG: fetchData.NOI_DONG_HANG
      }

      // console.log(data)
      setFormData({
        ...formData,
        ...data
      })
    } catch (err) {
      console.log('fetch error', err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

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
                value={formData.SO_BOOKING}
                onChange={e => setFormData({ ...formData, SO_BOOKING: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AppReactDatepicker
                selected={formData.SI_CUT_OFF}
                showYearDropdown
                showMonthDropdown
                onChange={SI_CUT_OFF => setFormData({ ...formData, SI_CUT_OFF })}
                placeholderText='MM/DD/YYYY'
                customInput={<CustomTextField fullWidth label='Giờ si' placeholder='MM-DD-YYYY' />}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Số Cont'
                placeholder='TIIU4'
                value={formData.SO_CONT}
                onChange={e => setFormData({ ...formData, SO_CONT: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Số Seal'
                placeholder='TIHU4'
                value={formData.SO_SEAL}
                onChange={e => setFormData({ ...formData, SO_SEAL: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Số Max Gross'
                type='number'
                placeholder='32500'
                value={formData.SO_MAX_GROSS}
                onChange={e => setFormData({ ...formData, SO_MAX_GROSS: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Số Tare'
                type='number'
                placeholder='5600'
                value={formData.SO_TARE}
                onChange={e => setFormData({ ...formData, SO_TARE: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Tài xế kéo'
                placeholder='Lê Hải'
                value={formData.TAIXE_KEO}
                onChange={e => setFormData({ ...formData, TAIXE_KEO: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Số Gross(Bao gồm tare)'
                type='number'
                placeholder='5600'
                value={formData.TL_GROSS}
                onChange={e => setFormData({ ...formData, TL_GROSS: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Nơi lấy rỗng'
                placeholder='SOWATCO'
                value={formData.NOI_LAY_CONT}
                onChange={e => setFormData({ ...formData, NOI_LAY_CONT: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Cắt kho'
                placeholder='HƯNG VƯƠNG'
                value={formData.NOI_DONG_HANG}
                onChange={e => setFormData({ ...formData, NOI_DONG_HANG: e.target.value })}
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
