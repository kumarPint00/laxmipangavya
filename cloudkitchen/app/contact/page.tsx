import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function ContactPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Contact</Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Have a question or catering request? Fill out the form below and we'll get back to you.
      </Typography>

      <Box component="form" sx={{ display: "grid", gap: 2 }}>
        <TextField label="Name" fullWidth />
        <TextField label="Email" type="email" fullWidth />
        <TextField label="Message" multiline rows={4} fullWidth />
        <Button variant="contained">Send</Button>
      </Box>
    </Container>
  );
}
