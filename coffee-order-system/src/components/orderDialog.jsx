import React, { useCallback } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";

export const OrderDialog = ({ open, close, data }) => {
  console.log("Data received in component:", data);

  const { type, strength, milk, isIced, isClient, isDecaf, isXhot, sugar } =
    data;

  const formik = useFormik({
    initialValues: {
      strength: strength || "",
      type: type,
      milk: milk || "",
      isIced: isIced || false,
      isDecaf: isDecaf || false,
      isClient: isClient || false,
      isXhot: isXhot || false,
      sugar: sugar || 0,
    },

    // validationSchema: Yup.object({
    //   type: Yup.string().required("Required"),
    //   strength: Yup.string().required("Required"),
    //   milk: Yup.string().required("Required"),
    //   isIced: Yup.string().required("Required"),
    //   isDecaf: Yup.string().required("Required"),
    //   isClient: Yup.string().required("Required"),
    //   sugar: Yup.string().required("Required"),
    // }),

    onSubmit: (values) => {
      console.log("Submitted Values", values);
      close();
    },
  });



  console.log("Formik initialValues:", formik.initialValues);

  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>Order Details</DialogTitle>

      {type}

      <form onSubmit={formik.handleSubmit}>
        <TextField
          // type="hidden"
          onChange={formik.handleChange}
          name="type"
          value={type}
          slotProps={{ readOnly: true }}
        ></TextField>

        <Select
          onChange={formik.handleChange}
          name="strength"
          value={formik.values.strength}
        >
          <MenuItem value="1/2">1/2</MenuItem>
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
        </Select>

        <Select
          name="milk"
          value={formik.values.milk}
          onChange={formik.handleChange}
        >
          <MenuItem value="Full Cream">Full Cream</MenuItem>
          <MenuItem value="Lite">Lite Milk</MenuItem>
          <MenuItem value="Oat">Oat Milk</MenuItem>
          <MenuItem value="Soy">Soy Milk</MenuItem>
          <MenuItem value="Almond">Almond Milk</MenuItem>
        </Select>

        <Button type="submit">Submit</Button>
      </form>
    </Dialog>
  );
};
