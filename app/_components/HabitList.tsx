"use client";
import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useHabitSelector } from "@/lib/hook";

const HabitList: React.FC = () => {
  const { habits } = useHabitSelector((state) => state.habits);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
      {habits.map((habit) => (
        <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
          <Grid
            container
            alignItems="center"
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid>
              <Typography variant="h6">{habit.name}</Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ textTransform: "capitalize" }}
              >
                {habit.frequency}
              </Typography>
            </Grid>
            <Grid>
              <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                <Button>
                  <CheckCircleOutlineOutlinedIcon />
                  Mark Complete
                </Button>
                <Button color="error">Remove</Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default HabitList;
