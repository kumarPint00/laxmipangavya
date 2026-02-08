import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>About Swadika Delights</Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Swadika Delights started with the idea of bringing homestyle flavors to busy city residents. We focus on fresh ingredients, balanced spice profiles and timely delivery.
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        We cook in small batches and update our weekly specials based on customer feedback.
      </Typography>
    </Container>
  );
}
