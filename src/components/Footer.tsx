import { type FooterProps } from "../libs/Footer";
import { Text, Group } from "@mantine/core";

export default function Footer({ courseName , year, fullName, studentId }: FooterProps){
  return (
    <Group p="md" justify="center">
      <Text>
        © CPE207-2025 Bariya 670610713. All rights reserved.
      </Text>
    </Group>
  );
}
