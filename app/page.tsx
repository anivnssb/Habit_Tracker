import Button from "@mui/material/Button";
import styles from "./page.module.css";
import AddTaskForm from "../components/AddTaskForm";
import { Container } from "@mui/material";
import StoreProvider from "../store/StoreProvider";
import TaskList from "../components/TaskList";

export default function Home() {
  return (
    <StoreProvider>
      <Container sx={{ marginTop: "100px" }}>
        <AddTaskForm />
        <TaskList />
      </Container>
    </StoreProvider>
  );
}
