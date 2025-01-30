import React from "react";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BlockIcon from '@mui/icons-material/Block';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import HailIcon from '@mui/icons-material/Hail';
import {
  Dialog,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
  Button,
  Box,
  Switch,
  Slider,
  Typography,
  Grid,
  FormControl,
  InputLabel,
} from "@mui/material";

export const OrderDialog = ({ open, close, type, formik }) => {
  return (
    <Dialog open={open} onClose={close} maxWidth="sm" fullWidth>
      <Box
        sx={{
          p: 3,
          borderRadius: 2,
          bgcolor: "background.paper",
          color: "text.primary",
          boxShadow: 3,
        }}
      >
        <DialogTitle
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            pb: 2,
            borderBottom: "1px solid",
            borderColor: "grey.300",
          }}
        >
          Customize Your Order
        </DialogTitle>

        <Typography variant="h5" textAlign="center" sx={{ my: 2 }}>
          {type}
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <input type="hidden" name="type" value={type} />

          <Grid container spacing={2}>
            {/* Strength */}
            <Grid item xs={12}>
              <FormControl fullWidth variant="filled">
                <InputLabel shrink>Strength</InputLabel>
                <Select
                  name="strength"
                  value={formik.values.strength}
                  onChange={formik.handleChange}
                >
                  {[1 / 2, 1, 2, 3, 4].map((val) => (
                    <MenuItem key={val} value={val}>
                      {val}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Milk */}
            <Grid item xs={12}>
              <FormControl fullWidth variant="filled">
                <InputLabel>Milk</InputLabel>
                <Select
                  name="milk"
                  value={formik.values.milk}
                  onChange={formik.handleChange}
                >
                  {["Full Cream", "Lite", "Oat", "Soy", "Almond", "None"].map((milk) => (
                    <MenuItem key={milk} value={milk}>
                      {milk}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Switches */}
            {[
              { name: "isIced", label: "Iced", icon: AcUnitIcon },
              { name: "isDecaf", label: "Decaf", icon: BlockIcon },
              { name: "isExtraHot", label: "Extra Hot", icon: DeviceThermostatIcon },
              { name: "isClient", label: "Client", icon: HailIcon },
            ].map(({ name, label, icon: Icomponent }) => (
              <Grid item xs={6} key={name}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Box display="flex" alignItems="left">
                  <Icomponent color="secondary"/>
                  <Typography>{label}</Typography>
                  </Box>
                  <Switch
                    name={name}
                    checked={formik.values[name]}
                    onChange={formik.handleChange}
                    color="secondary"
                  />
                </Box>
              </Grid>
            ))}

            {/* Sugar Slider */}
            <Grid item xs={12}>
              <Typography gutterBottom>Sugar</Typography>
              <Slider
                name="sugar"
                value={formik.values.sugar}
                onChange={formik.handleChange}
                min={0}
                max={5}
                step={1}
                color="secondary"
                valueLabelDisplay="auto"
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12} textAlign="center">
              <Button
                type="submit"
                variant="contained"
                size="large"
                color="secondary"
                sx={{
                  px: 4,
                  py: 1,
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: 2,
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Dialog>
  );
};
