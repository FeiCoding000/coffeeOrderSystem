import { useState } from "react";
import { ItemCard } from "../components/itemCard";
import { OrderDialog } from "../components/orderDialog";
import { useFormik } from "formik";
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button } from "@mui/material";

export const Menu = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // 处理对话框开关
  const handleDialogOpen = () => setIsDialogOpen(true);
  const handleDialogClose = () => setIsDialogOpen(false);

  // 处理 Formik 类型
  const handleFormikType = (type) => {
    formik.setFieldValue("type", type);
  };

  // 设置 Formik
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

  // 菜单项
  const menuItems = {
    coffee: ["Flat White", "Latte", "Long Black", "Espresso", "Long Macchiato", "Mocha", "Short Macchiato", "Cappuccino", "Dirty Chai", "Piccolo"],
    tea: ["English Breakfast", "Earl Gray", "Green Tea"],
    "Choc&Chai": ["Chocolate", "Chai"],
  };

  return (
    <Box sx={{ textAlign: "center", py: 4, bgcolor: "black", minHeight: "100vh" }}>
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 4 }}>Menu</Typography>

      {Object.keys(menuItems).map((category) => (
        <Box key={category} sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            {category === "Choc&Chai" ? "Chocolate & Chai" : category}
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {menuItems[category].map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                    transition: "transform 0.2s",
                    "&:hover": { transform: "scale(1.02)" },
                  }}
                  onClick={() => {
                    handleFormikType(item);
                    handleDialogOpen();
                  }}
                >
                  {/* 图片部分 */}
                  <CardMedia
                    component="img"
                    height="150"
                    image={`https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dalgona-coffee-ddfc357.jpg?quality=90&webp=true&resize=440,400`}
                    alt={item}
                  />
                  {/* 文字部分 */}
                  <CardContent sx={{ bgcolor: "white", p: 2 }}>
                    <Typography variant="h6">{item}</Typography>
                    <Button variant="contained" fullWidth sx={{ mt: 1 }}>
                      Order Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}

      <OrderDialog open={isDialogOpen} close={handleDialogClose} type={formik.values.type} formik={formik} />
    </Box>
  );
};
