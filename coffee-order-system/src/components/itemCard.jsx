import React from 'react'
import {Card} from '@mui/material'


export const ItemCard = ({data, onClick}) => {
  return (
    <Card onClick={onClick}
    variant='primary'
    sx={{
        width: 100,
        height: 100,
        margin: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // border: '1px solid black',
        borderRadius: 5,
        cursor: 'pointer',
    }}
    >
        {data&&data}

        

    </Card>
    
  )
}
