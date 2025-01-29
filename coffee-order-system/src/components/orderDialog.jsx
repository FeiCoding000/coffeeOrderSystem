import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

export const OrderDialog = ({ open, close, data }) => {
  console.log("data in the card", data);
  const formik = useFormik({
    initialValues: data,
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
    }),
    onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
        console.log("values", values);
    },
  });

  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>Order Details</DialogTitle>
      {data.type}
      <form onSubmit={formik.handleSubmit}>
        <TextField 
            name="type"
            defaultValue={data.type}
            onChange={formik.handleChange}
            value={formik.values.type}
        >
        </TextField>

        <Select 
            defaultValue={data.strength}
            onChange={formik.handleChange}
            name="strength"
            value={formik.values.strength}
        >
          Strength
          <MenuItem value={data.strength}>{data.strength}</MenuItem>
          <MenuItem value="1/2">1/2</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
        </Select>

        <Select 
            defaultValue={data.milk}
            value={formik.values.milk}
            onChange={formik.handleChange}
            >
            
          Milk
          <MenuItem value={data.milk}>{data.milk}</MenuItem>
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
