"use client";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import useCartStore from "../store/useCartStore";
import { useState } from "react";

type Dish = { id: number; name: string; desc: string; price: string };

export default function DishCard({ dish }: { dish: Dish }) {
  const addItem = useCartStore((s) => s.addItem);
  const [open, setOpen] = useState(false);

  const priceValue = parseInt(dish.price.replace(/\D/g, ""), 10) || 0;

  function handleAdd() {
    addItem({ id: dish.id, name: dish.name, price: priceValue });
    setOpen(true);
  }

  return (
    <>
      <Card
        sx={{
          borderRadius: 2,
          transition: "transform 180ms ease, box-shadow 180ms ease",
          '&:hover': { transform: "translateY(-6px)", boxShadow: 6 },
        }}
      >
        <CardContent>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar sx={{ bgcolor: "primary.main" }}>{dish.name.charAt(0)}</Avatar>
            <div>
              <Typography variant="h6" component="h3">
                {dish.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                {dish.desc}
              </Typography>
            </div>
          </Stack>
        </CardContent>

        <CardActions sx={{ justifyContent: "space-between", px: 2, py: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {dish.price}
          </Typography>
          <Button size="small" color="primary" variant="contained" onClick={handleAdd}>
            Add
          </Button>
        </CardActions>
      </Card>

      <Snackbar open={open} autoHideDuration={1500} onClose={() => setOpen(false)} message={`${dish.name} added to cart`} />
    </>
  );
}
