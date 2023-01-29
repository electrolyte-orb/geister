"use client";
import { Page, Text, Button } from "@geist-ui/core";

export default function Home() {
  return (
    <Page.Body>
      <Text h1>Haulo</Text>
      <Text p type="secondary">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id cum nisi
        libero veniam reiciendis velit eius minus minima eos ullam molestias,
        dolorum ducimus, deleniti nam adipisci ex cupiditate commodi. Dolorum?
      </Text>

      <Button shadow type="success-light" width="100%">
        Login
      </Button>
      <Button type="secondary" width="100%" ghost mt={1}>
        Know More
      </Button>
    </Page.Body>
  );
}
