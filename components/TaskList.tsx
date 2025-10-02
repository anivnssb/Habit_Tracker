"use client";
import React, { useEffect } from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useTaskDispatch, useTaskSelector } from "@/store/hook";
import { removeTask } from "@/store/slice/taskSlice";
import { useGetTasksQuery, useDeleteTaskMutation } from "@/store/api";

const TaskList: React.FC = () => {
  const {
    data: tasks = { tasklist: [] },
    isLoading,
    error,
  } = useGetTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();
  const dispatch = useTaskDispatch();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
      {tasks.tasklist.map((task) => (
        <Paper key={task.id} elevation={2} sx={{ p: 2 }}>
          <Grid
            container
            alignItems="center"
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid>
              <Typography variant="h6">{task.task_name}</Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ textTransform: "capitalize" }}
              >
                {task.frequency}
              </Typography>
            </Grid>
            <Grid>
              <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                <Button
                  startIcon={<CheckCircleOutlineOutlinedIcon />}
                  variant="outlined"
                >
                  Mark Complete
                </Button>
                <Button
                  onClick={() => deleteTask(Number(task.id))}
                  color="error"
                >
                  Remove
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default TaskList;
