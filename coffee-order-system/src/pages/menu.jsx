import { useEffect, useState } from "react";
import React from "react";
import { ItemCard } from "../components/itemCard";
import { OrderDialog } from "../components/orderDialog";
import { useFormik } from "formik";
import { Box, Typography } from "@mui/material";
import * as Yup from "yup";

export const Menu = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  //handle dialog open and close
  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };
  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  //formik setValue to formik.type
  const handleFormikType = (type) => {
    formik.setFieldValue("type", type);
  };

  //set up formik
  const formik = useFormik({
    initialValues: {
      type: "",
      milk: "Full Cream",
      strength: "1",
      sugar: "0",
      isIced: false,
      isDecaf: false,
      isExtraHot: false,
      isClient: false,
    },
    onSubmit: (values) => {
      console.log("Submitted values:", values);
      formik.resetForm();
      handleDialogClose();
    },
  });

  const menuItems = {
    coffee: ["Flat White", "Latte", "Long Black"],
    tea: ["English Breakfast", "Earl Gray", "Green Tea"],
    "Choc&Chai": ["Choclate", "Chai"],
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <h1>Menu</h1>
        <Typography>Coffee</Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap" }} gap={2}>
          {menuItems.coffee.map((item, index) => {
            return (
              <ItemCard
                key={index}
                data={item}
                onClick={() => {
                  handleFormikType(item);
                  handleDialogOpen();
                }}
              ></ItemCard>
            );
          })}
        </Box>

        <Typography>Tea</Typography>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", alignContent: "left" }}
          gap={2}
        >
          {menuItems.tea.map((item, index) => {
            return (
              <ItemCard
                key={index}
                data={item}
                onClick={() => {
                  handleFormikType(item);
                  handleDialogOpen();
                }}
              ></ItemCard>
            );
          })}
        </Box>

        <Typography>Chocolate&Chai</Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap" }} gap={2}>
          {menuItems["Choc&Chai"].map((item, index) => {
            return (
              <ItemCard
                key={index}
                data={item}
                onClick={() => {
                  handleFormikType(item);
                  handleDialogOpen();
                }}
              ></ItemCard>
            );
          })}
        </Box>
      </Box>

      <OrderDialog
        open={isDialogOpen}
        close={handleDialogClose}
        type={formik.values.type}
        formik={formik}
      ></OrderDialog>
    </div>
  );
};
