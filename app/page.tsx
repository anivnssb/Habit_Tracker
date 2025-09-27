import Button from "@mui/material/Button";
import styles from "./page.module.css";
import AddHabitForm from "./_components/AddHabitForm";
import { Container } from "@mui/material";
import StoreProvider from "./StoreProvider";

export default function Home() {
  return (
    <StoreProvider>
      <Container>
        <AddHabitForm />
      </Container>
    </StoreProvider>
  );
}
