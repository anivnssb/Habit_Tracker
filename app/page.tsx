import Button from "@mui/material/Button";
import styles from "./page.module.css";
import AddTaskForm from "./_components/AddTaskForm";
import { Container } from "@mui/material";
import StoreProvider from "./StoreProvider";
import TaskList from "./_components/TaskList";

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
