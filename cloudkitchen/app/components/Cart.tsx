"use client";

import React from "react";
import dynamic from "next/dynamic";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import useCartStore from "../store/useCartStore";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Snackbar from "@mui/material/Snackbar";

export default function Cart() {
  const [open, setOpen] = React.useState(false);
  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQty = useCartStore((s) => s.updateQty);
  const clear = useCartStore((s) => s.clear);
  const total = useCartStore((s) => s.total)();
  const count = useCartStore((s) => s.count)();

  const [snack, setSnack] = React.useState<string | null>(null);

  function handleCheckout() {
    setSnack("Checkout not implemented — this is a demo");
  }

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setOpen(true)}
        sx={{ position: "fixed", right: 20, bottom: 20, borderRadius: "50%", zIndex: 2000 }}
      >
        <Badge badgeContent={count} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </Button>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 420, p: 3, display: "flex", flexDirection: "column", minHeight: 320 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Your Cart
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {count} item(s)
          </Typography>

          <Divider sx={{ my: 2 }} />

          {items.length === 0 ? (
            <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", color: "text.secondary" }}>
              <div>Your cart is empty — add something tasty!</div>
            </Box>
          ) : (
            <List sx={{ flex: 1 }}>
              {items.map((it) => (
                <ListItem key={it.id} secondaryAction={<IconButton edge="end" onClick={() => removeItem(it.id)} aria-label="remove"><DeleteIcon /></IconButton>}>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "primary.main" }}>{it.name.charAt(0)}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={it.name} secondary={`₹${it.price} x ${it.qty}`} />
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ ml: 2 }}>
                    <IconButton size="small" onClick={() => updateQty(it.id, it.qty - 1)} aria-label="decrease"><RemoveIcon /></IconButton>
                    <Typography>{it.qty}</Typography>
                    <IconButton size="small" onClick={() => updateQty(it.id, it.qty + 1)} aria-label="increase"><AddIcon /></IconButton>
                  </Stack>
                </ListItem>
              ))}
            </List>
          )}

          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Subtotal
              </Typography>
              <Typography variant="h6">₹{total}</Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
              <Button variant="outlined" onClick={clear} disabled={items.length === 0}>Clear</Button>
              <Button variant="contained" onClick={handleCheckout} disabled={items.length === 0}>Checkout</Button>
            </Box>
          </Box>
        </Box>
      </Drawer>

      <Snackbar open={!!snack} autoHideDuration={3000} onClose={() => setSnack(null)} message={snack} />
    </>
  );
}
