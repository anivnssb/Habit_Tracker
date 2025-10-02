"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { addTask } from "@/store/slice/taskSlice";
import { useTaskDispatch } from "@/store/hook";
import { useAddTaskMutation } from "@/store/api";

const AddTaskForm: React.FC = () => {
  const [addTask, { isLoading }] = useAddTaskMutation();
  const [name, setName] = useState<string>("");
  const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      addTask({ task_name: name, frequency });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography textAlign="center" variant="h2">
          Ambition Tracker
        </Typography>
        <TextField
          label="Task Name"
          placeholder="Enter Task Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel>Frequency</InputLabel>
          <Select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="secondary">
          Add
        </Button>
      </Box>
    </form>
  );
};

export default AddTaskForm;
