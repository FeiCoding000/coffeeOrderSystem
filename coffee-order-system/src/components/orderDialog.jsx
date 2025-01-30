import React, { useCallback } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Switch, Slider } from "@mui/material";

export const OrderDialog = ({ open, close, type, formik }) => {
  console.log("Type in component:", type);

  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>Order Details</DialogTitle>

      {type}

      <form onSubmit={formik.handleSubmit}>
        <input
          type="hidden"
          onChange={formik.handleChange}
          name="type"
          value={type}
        ></input>

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
        
        <Switch
            name="isIced"
            value={formik.values.isIced}
            onChange={formik.handleChange}
            checked={formik.values.isIced}
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
        >
        </Switch>

        <Switch
            name="isDecaf"
            value={formik.values.isDecaf}
            onChange={formik.handleChange}
            checked={formik.values.isDecaf}
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
        >
        </Switch>

        <Switch
            name="isExtraHot"
            value={formik.values.isExtraHot}
            onChange={formik.handleChange}
            checked={formik.values.isExtraHot}
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
        >
        </Switch>

        <Switch
            name="isClient"
            value={formik.values.isClient}
            onChange={formik.handleChange}
            checked={formik.values.isClient}
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
        >
        </Switch>

        <Slider
            name="sugar"
            value={formik.values.sugar}
            onChange={formik.handleChange}
            min={0}
            max={5}
            step={1}
            aria-labelledby="discrete-slider-small-steps"
            valueLabelDisplay="auto"
        ></Slider>

        <Button type="submit">Submit</Button>
      </form>
    </Dialog>
  );
};
