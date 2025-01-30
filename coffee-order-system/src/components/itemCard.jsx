import React from 'react'
import {Card} from '@mui/material'


export const ItemCard = ({data, onClick}) => {
  return (
    <Card onClick={onClick}>
        {data}

        

    </Card>
    
  )
}
