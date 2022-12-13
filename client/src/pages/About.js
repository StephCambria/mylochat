import React from "react";
import {
  Center,
  HStack,
  Container,
  Box,
  Text,
  Image,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";

const About = () => {
  return (
    <div>
      <Container maxW="xl" centerContent>
        <Center
          d="flex"
          justifyContent="center"
          p={3}
          bg={"#8BAD94"}
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <HStack spacing="-20px">
            <Text as="b" fontSize="4xl" fontFamily="Work Sans" color="gray.200">
              Mylo
            </Text>
            <Image
              align="50% 50%"
              src={require("../image/hero-mylo.png")}
              alt="Mylo mascot image"
            />
            <Text as="b" fontSize="4xl" fontFamily="Work Sans" color="gray.200">
              Chat
            </Text>
          </HStack>
        </Center>
        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
          <h1>
            We are Group 5 students who created this full - stack message
            application for our final project.
          </h1>
          <ol>
            <li>Stephanie Cambria</li>
            <li>Tyler Porter</li>
            <li>Joyce Chen</li>
            <li>Caleb Lacson</li>
          </ol>
          <h4>
            viewing our work. Please don't hesitate to contact us for any useful
            feedback.
          </h4>
        </Box>
      </Container>
    </div>
  );
};

export default About;
