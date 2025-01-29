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
  const formik = useFormik({
    initialValues: {
      type: data.type ||"",
      strength: data.strength || "",
      milk: data.milk || "",
      isIced: data.isIced || "",
      isDecaf: data.isDecaf || "",
      isClient: data.isClient || "",
      sugar: data.sugar || "",
    },

    validationSchema: Yup.object({
      type: Yup.string().required("Required"),
      strength: Yup.string().required("Required"),
      milk: Yup.string().required("Required"),
    //   isIced: Yup.string().required("Required"),
    //   isDecaf: Yup.string().required("Required"),
    //   isClient: Yup.string().required("Required"),
    //   sugar: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      console.log(values);
      close();
    }
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
          <MenuItem value="1/2">1/2</MenuItem>
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
        </Select>

        <Select 
            name="milk"
            defaultValue={data.milk}
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
