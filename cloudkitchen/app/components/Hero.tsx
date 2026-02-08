"use client";

import Image from "next/image";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Hero() {
  return (
    <Box component="section" sx={{ bgcolor: "background.paper", py: 8 }}>
      <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center", gap: 6, flexDirection: { xs: "column", md: "row" } }}>
        <Box sx={{ flex: 1 }}>
          <Image src="/swadika-logo.svg" alt="Swadika Delights" width={180} height={60} />
          <Typography variant="h3" component="h1" sx={{ mt: 3, fontWeight: 800 }}>
            Swadika Delights
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, color: "text.secondary" }}>
            Authentic homestyle meals — fresh, flavorful, and delivered hot to your door.
          </Typography>
          <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
            <Button variant="contained" color="primary" href="#menu">
              Order Now
            </Button>
            <Button variant="outlined" color="inherit" href="#about">
              How it works
            </Button>
          </Box>
        </Box>

        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Image
            src="/hero-swadika.svg"
            alt="Delicious food"
            width={800}
            height={520}
            style={{ borderRadius: 12, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
          />
        </Box>
      </Container>
    </Box>
  );
}
