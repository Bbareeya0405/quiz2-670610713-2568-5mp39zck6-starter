import { useState } from "react";
import { Button, Stack, Title, Divider, Container } from "@mantine/core";
import { v4 as uuidv4 } from "uuid";

type Expense = {
  id: string;
  name: string;
  amount: number | string;
  category: string;
};

export default function ExpenseTracker() {
  const [opened, setOpened] = useState(false);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const categories = ["Food", "Transport", "Entertainment"];

  const handleAdd = () => {
    const newTask: Task = {
      id: uuidv4(),
      description: lorem.generateWords(10),
      isDone: false,
      dueDate: new Date(),
      doneAt: null
    };
    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Expense Tracker
      </Title>
      <Button onClick={handleAdd}>Add Expense Item</Button>
      {/* Type additional AddExpenseModal here. */}
      
      <Divider my="md" />
      {/* Type additional total cost here. */}
      <Title order={4}>Total cost: {} Baht</Title>
      <Stack my="sm">{
        <Text>
          Food: {} Bath
          Transport: {} Bath
          Entertainment: {} Bath
        </Text>
      }</Stack>
        

      <Divider my="md" />
      {/* Type additional card here. */}
      <Stack>{

      }</Stack>
    </Container>
  );
}
