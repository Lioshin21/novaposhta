import { TextField } from '@mui/material'
import React from 'react'

const InputTTH = () => {
  return (
    <TextField
    id="outlined-basic"
    label="Введіть TTN"
    variant="outlined"
    type='number'
    fullWidth={false}
  />
  )
}

export default InputTTH