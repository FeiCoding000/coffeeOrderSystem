import { useEffect, useState } from "react";
import React from 'react'
import { ItemCard } from "../components/itemCard";
import { OrderDialog } from "../components/orderDialog";

export const Menu = () => {
    const defaultData = {
        type: "",
        strength:"1",
        milk:"Full Cream",
        isIced: false,
        isClient: false,
        isDecaf: false,
        isXhot:false
    }
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const [drinkData, setDrinkData] = useState(defaultData);
    //handle drinkData
    const handlSetDrinkData = () => {

    } 

    //handle dialog open and close
    const handleDialogOpen = () => {
        setIsDialogOpen(true);
    }
    const handleDialogClose = () => {
        setIsDialogOpen(false);
    }

    const handleSetDrinkType = (input) => {
        setDrinkData(
            {
                ...drinkData,
                type: input
            }
        );
    }

    useEffect (() => {
        console.log(drinkData, defaultData)
    }, [drinkData])

    const menuItems= {
    "coffee":[
        "Flat White",
        "Latte",
        "Long Black"
    ],
    "tea": [
        "English Breakfast",
        "Eral Gray",
        "Green Tea"
    ],
    "Choc&Chai": [
        "Choclate",
        "Chai"
    ]
}


  return (
    <div>
        <h1>Menu</h1>
        <h3>Coffee</h3>
        {menuItems.coffee.map((item, index) => {
            return <ItemCard key={index} data={item} onClick={() => {handleSetDrinkType(item); handleDialogOpen()}}>item</ItemCard>
        })}
        
        <h3>Tea</h3>
        {menuItems.tea.map((item, index) => {
            return <ItemCard key={index} data={item} onClick={() => {handleSetDrinkType(item); handleDialogOpen()}}>item</ItemCard>
        })}

        <h3>Chocolate&Chai</h3>
        {menuItems["Choc&Chai"].map((item, index) => {
            return <ItemCard key={index} data={item} onClick={() => {handleSetDrinkType(item); handleDialogOpen()}}>item</ItemCard>
        })}


        <OrderDialog open={isDialogOpen} close={handleDialogClose} data= {drinkData}></OrderDialog>
    </div>
  )
}
