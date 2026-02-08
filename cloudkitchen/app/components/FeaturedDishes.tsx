import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DishCard from "./DishCard";

export default function FeaturedDishes() {
  const dishes = [
    { id: 1, name: "Butter Chicken", desc: "Creamy tomato gravy with tender chicken chunks.", price: "₹249" },
    { id: 2, name: "Paneer Tikka Masala", desc: "Smoky paneer in a rich, spiced sauce.", price: "₹229" },
    { id: 3, name: "Chole Bhature", desc: "Classic spicy chickpeas with fried bread.", price: "₹199" },
  ];

  return (
    <Box component="section" id="menu" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h5" sx={{ fontWeight: 700 }}>Featured Dishes</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>Our most-loved dishes this week — ready for delivery.</Typography>

        <Grid container spacing={2} sx={{ mt: 3 }}>
          {dishes.map((d) => (
            <Grid item xs={12} sm={6} md={4} key={d.id}>
              <DishCard dish={d} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
