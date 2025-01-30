import { useState } from "react";
import { ItemCard } from "../components/itemCard";
import { OrderDialog } from "../components/orderDialog";
import { useFormik } from "formik";
import {
  getDatabase,
  ref,
  set,
  child,
  get,
  push,
  update,
} from "firebase/database";
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button } from "@mui/material";

export const Menu = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // 处理对话框开关
  const handleDialogOpen = () => setIsDialogOpen(true);
  const handleDialogClose = () => setIsDialogOpen(false);

  //image mapping
  const imageMapping = {
    "Flat White": "https://www.soulorigin.com.au/cdn/shop/files/Flat_White_2000x2000_ee1c75b2-f9fb-4115-b832-35491bfebae6_800x.jpg?v=1730688106",
    "Cappuccino": "https://www.soulorigin.com.au/cdn/shop/files/Cappuccino_2000x2000_8abdb892-291a-465b-8dbb-dbb80ba7cdb3_800x.jpg?v=1730687672",
    "Latte":"https://www.soulorigin.com.au/cdn/shop/files/Latte_2000x2000_9d053b61-c32f-4120-b035-f4a93754bd0f_800x.jpg?v=1730687648",
    "Long Black": "https://www.soulorigin.com.au/cdn/shop/files/Long_Black_2000x2000_84b1d1c7-c990-4733-ba01-7cd676d15756_800x.jpg?v=1730687649",
    "Espresso": "https://www.soulorigin.com.au/cdn/shop/files/Espresso_2000x2000_403c7691-7e6b-4fa5-92a4-374e30ca26d7_800x.jpg?v=1730687649",
    "Mocha" : "https://www.soulorigin.com.au/cdn/shop/files/Mocha_2000x2000_V2_800x.jpg?v=1730687649",
    "Short Macchiato": "https://www.soulorigin.com.au/cdn/shop/files/Macchiato_2000x2000_39f80406-6129-4506-ace1-8674af01a4cb_800x.jpg?v=1730687649",
    "Long Macchiato": "https://www.soulorigin.com.au/cdn/shop/files/Macchiato_Strong_2000x2000_2b9b7f09-c177-44da-a84e-bbfe99e6bb55_800x.jpg?v=1730687649",
    "Piccolo": "https://www.soulorigin.com.au/cdn/shop/files/Piccolo_2000x2000_742ffea6-7a40-472c-9789-342ca519f5f8_400x.jpg?v=1730687648",
    "Dirty Chai": "https://www.soulorigin.com.au/cdn/shop/files/Mocha_2000x2000_V2_800x.jpg?v=1730687649",
    "English Breakfast": "https://cdn.shopify.com/s/files/1/0382/1836/7107/t/3/assets/dehydrated-tea-hero-image-1639694925155.jpg?v=1639694928",
    "Earl Gray": "https://www.theteashelf.com/cdn/shop/articles/How_is_Earl_Grey_different_from_black_tea_-_The_Tea_Shelf_900x.png?v=1702007889",
    "Green Tea": "https://static.wixstatic.com/media/64b42c_8f336462892749bf9b4b5ae0becd4905~mv2.jpg/v1/fill/w_740,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/64b42c_8f336462892749bf9b4b5ae0becd4905~mv2.jpg",
    "Chocolate": "https://www.soulorigin.com.au/cdn/shop/files/Iced_Mocha_edd9a3c8-782c-44d1-ab56-c1d3adf137c7_800x.jpg?v=1713837116",
    "Chai": "https://www.soulorigin.com.au/cdn/shop/files/Iced_Coffee_43003b27-6d3d-4e92-94a7-710db556d261_800x.jpg?v=1713743728",
    "Peppermint": "https://assets.clevelandclinic.org/transform/LargeFeatureImage/a3ec7f82-35f9-4e41-8450-030498e44617/spearmint-Tea-1418206475_770x533_jpg",
    "Lemongrass Ginger": "https://www.siftandsimmer.com/wp-content/uploads/2022/02/lemongrass-tea2.jpg",
    "Chamomile": "https://media.istockphoto.com/id/1277086333/photo/herbal-chamomile-tea-and-chamomile-flowers-near-teapot-and-tea-glass-on-wooden-table.jpg?s=612x612&w=0&k=20&c=dz3g5-x2_sWLmUUW1YyqyYork1P8-xNksZ7kpaYxZ7g="
  }

  // 处理 Formik 类型
  const handleFormikType = (type) => {
    formik.setFieldValue("type", type);
  };

    //get data--order number
    const deRef = ref(getDatabase());
    const getOrderNumber = get(child(deRef, "Order Number"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log("number in database:",snapshot.val());
          return snapshot.val();
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });

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
    onSubmit:async (values) => {
      console.log("Submitted values:", values);
      const orderNumber = await getOrderNumber;
      const newOrderNumber = parseInt(orderNumber) + 1;
      set(ref(getDatabase(), `Orders/${newOrderNumber}`), values)
        .then(() => {
          console.log("Data submitted successfully");
        })
        .catch((error) => {
          console.error("Error submitting data:", error);
          alert("Network error, please try again later！")
        })
      set(ref(getDatabase(), `Order Number`), newOrderNumber);
      formik.resetForm();
      handleDialogClose();
    },
  });

  // 菜单项
  const menuItems = {
    COFFEE: ["Flat White", "Latte", "Long Black", "Espresso", "Long Macchiato", "Mocha", "Short Macchiato", "Cappuccino", "Dirty Chai", "Piccolo"],
    TEA: ["English Breakfast", "Earl Gray", "Green Tea", "Peppermint", "Lemongrass Ginger", "Chamomile"],
    "Choc&Chai": ["Chocolate", "Chai"],
  };

  return (
    <Box sx={{ textAlign: "center", py: 4, bgcolor: "black", minHeight: "100vh" }}>
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 4 }}>Menu</Typography>

      {Object.keys(menuItems).map((category) => (
        <Box key={category} sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
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
                    height="200"
                    image={imageMapping[item]}
                    alt={item}
                  />
                  {/* 文字部分 */}
                  <CardContent sx={{ bgcolor: "white", p: 2 }}>
                    <Typography variant="h6">{item}</Typography>
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
