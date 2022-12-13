import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";

export function About() {
  return (
    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">About US</Text>
      </Stack>

      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Text
          fontWeight="bold"
          fontSize={{ base: "sm" }}
          textAlign={"left"}
          maxW={"4xl"}
        >
          WHO WE ARE
        </Text>

        <Text fontSize={{ base: "sm" }} textAlign={"left"} maxW={"4xl"}>
          We are Group 5 students who created this full-stack message
          application for our final project.
        </Text>
      </Stack>
    </Stack>
  );
}

{
  /* <div>
      <Card>
        <CardHeader>
          <Heading size="md">Who</Heading>
          <Heading size="md">We</Heading>
          <Heading size="md">Are</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase"></Heading>
              <Text pt="2" fontSize="sm">
                We are Group 5 students who created this full-stack message
                application for our final project.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Team Members ABCCC
              </Heading>
              <Text pt="2" fontSize="sm">
                <li>Stephanie Cambria</li>
                <li>Tyler Porter</li>
                <li>Joyce Chen</li>
                <li>Caleb Lacson</li>
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase"></Heading>
              <Text pt="2" fontSize="sm">
                Thank you for reviewing our work. Please don't hesitate to
                contact us for any useful feedback.
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </div> */
}
