import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FeaturedDishes from "../components/FeaturedDishes";

export default function MenuPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Our Menu</Typography>
      <Typography variant="body1" color="text.secondary">Browse our full selection of homestyle dishes.</Typography>
      <FeaturedDishes />
    </Container>
  );
}
