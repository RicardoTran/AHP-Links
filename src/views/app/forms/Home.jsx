'use client'
// MUI Imports
import { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import ImportIMG from './ImportImg'
// Components Imports
import CustomTextField from '@core/components/mui/TextField'

const Form = () => {
  // States
  const [formData, setFormData] = useState({
    SO_BOOKING: '',
    CUT_OFF: '',
    SO_CONT: '',
    SO_SEAL: '',
    NOI_DONG_HANG: '',
    TEN_TAU: '',
    TAIXE_HA: '',
    SO_CHUYEN: '',
    NOI_HA: '',
    CANG_DEN: '',
    GHI_CHU_HA: '',
    CHUYEN_TAI: ''
  })

  const fetchData = async () => {
    let token = '35e86a7e58fd3552db68753bea10fda8efb273dd98c11055e243'
    let recordId = 12998
    let url = `https://fmapp.vdigitrans.net/fmi/data/v1/databases/TrackingContainer/layouts/PartnerHaCont/records/${recordId}`

    try {
      let res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      let resData = await res.json()


      let code = resData.messages[0].code

      if (code != 0) {
        let message = resData.messages[0].message
        alert(message)
      }

      let fetchData = resData.response.data[0].fieldData
      let data = {
        SO_BOOKING: fetchData.SO_BOOKING || '',
        CUT_OFF: fetchData.CUT_OFF || '',
        SO_CONT: fetchData.SO_CONT || '',
        SO_SEAL: fetchData.SO_SEAL || '',
        NOI_DONG_HANG: fetchData.NOI_DONG_HANG || '',
        TEN_TAU: fetchData.TEN_TAU || '',
        TAIXE_HA: fetchData.TAIXE_HA || '',
        SO_CHUYEN: fetchData.SO_CHUYEN || '',
        NOI_HA: fetchData.NOI_HA || '',
        GHI_CHU_HA: fetchData.GHI_CHU_HA || '',
        CANG_DEN: fetchData.CANG_DEN || '',
        CHUYEN_TAI: fetchData.CHUYEN_TAI || ''
      }
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
      <CardHeader title='CẬP NHẬT THÔNG TIN HẠ CONT' />
      <Divider></Divider>
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CustomTextField
                fullWidth label='Số booking'
                placeholder='SGNE40720400'
                value={formData.SO_BOOKING}
                onChange={e => setFormData({ ...formData, SO_BOOKING: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                fullWidth
                label='Giờ Cut Off'
                placeholder='06/04/2024 10:00'
                value={formData.CUT_OFF}
                onChange={e => setFormData({ ...formData, CUT_OFF: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                fullWidth
                label='Số Cont'
                placeholder='TIIU4281805'
                value={formData.SO_CONT}
                onChange={e => setFormData({ ...formData, SO_CONT: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                fullWidth
                label='Số Seal'
                placeholder='VN680225AB'
                value={formData.SO_SEAL}
                onChange={e => setFormData({ ...formData, SO_SEAL: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                fullWidth
                label='Tài xế hạ'
                placeholder='Lê Hải'

                value={formData.TAIXE_HA}
                onChange={e => setFormData({ ...formData, TAIXE_HA: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                fullWidth
                label='Cắt Kho'
                placeholder='BÌNH MINH'
                value={formData.NOI_DONG_HANG}
                onChange={e => setFormData({ ...formData, NOI_DONG_HANG: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                fullWidth
                label='Nơi Hạ Hàng'
                placeholder='CAT LAI'
                value={formData.NOI_HA}
                onChange={e => setFormData({ ...formData, NOI_HA: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                fullWidth
                label='Tên Tàu'
                placeholder='YM CELEBRITY'
                value={formData.TEN_TAU}
                onChange={e => setFormData({ ...formData, TEN_TAU: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                fullWidth
                label='Số Chuyến'
                placeholder='066N'
                value={formData.SO_CHUYEN}
                onChange={e => setFormData({ ...formData, SO_CHUYEN: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                fullWidth
                label='Cảng Chuyển Tài'
                placeholder='SHEKOU'
                value={formData.CHUYEN_TAI}
                onChange={e => setFormData({ ...formData, CHUYEN_TAI: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                fullWidth
                label='Cảng Đến'
                placeholder='SHEKOU'
                value={formData.CANG_DEN}
                onChange={e => setFormData({ ...formData, CANG_DEN: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                fullWidth
                label='Ghi Chú Hạ'
                placeholder='Mã Hạ Cont: 7A9T7W'
                value={formData.GHI_CHU_HA}
                onChange={e => setFormData({ ...formData, GHI_CHU_HA: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <div className='flex items-center justify-between flex-wrap gap-5 '>
                <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' variant='contained' type='submit'>
                  Cập nhật
                </Button>
              </div>
            </Grid>
          </Grid>
          <ImportIMG />
        </form>
      </CardContent>
    </Card>
  )
}

export default Form
