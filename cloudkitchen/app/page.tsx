import Hero from "./components/Hero";
import FeaturedDishes from "./components/FeaturedDishes";
import CartWrapper from "./components/CartWrapper";
import Container from "@mui/material/Container";

export default function Home(): JSX.Element {
  return (
    <main>
      <Hero />

      <Container maxWidth="lg" sx={{ pt: 4 }}>
        <FeaturedDishes />
      </Container>

      <footer style={{ marginTop: 48, padding: "32px 0", textAlign: "center", color: "#6b7280" }}>
        <div>© {new Date().getFullYear()} Swadika Delights</div>
        <div style={{ marginTop: 8 }}>Contact: <a href="mailto:hello@swadika.example" style={{ color: "#F59E0B" }}>hello@swadika.example</a> • Delivery: citywide</div>
      </footer>

      <CartWrapper />
    </main>
  );
}
