import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import type React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDisaptch } from "../store/store";
import { addHabit } from "../store/habit-slice";

const AddHabitForm: React.FC = () => {
  const dispatch = useDispatch<AppDisaptch>();
  const [name, setName] = useState<string>("");
  const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(addHabit({ name, frequency }));
      setName("");
      setFrequency("daily");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "2" }}>
        <TextField
          label="Haibt Name"
          placeholder="Enter Habit Name"
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

export default AddHabitForm;
