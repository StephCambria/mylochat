// import React from "react";
// import { Center } from "@chakra-ui/react";

// // import HeroImage from "../image/hero-mylo.png",

// function About() {
//   return (
//     <Center bg="white" h="100px" color="black">
//       This is the Center
//     </Center>
//   );
// }
// export default About;


import React, { useEffect } from "react";
// import HeroImage from "../image/hero-mylo.png",
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
import Login from "../components/authentication/Login";
import Signup from "../components/authentication/Signup";
import { useHistory } from "react-router-dom";

// ==========================================================
// ==========================================================
// Homepage Setup
// ==========================================================
// ==========================================================
const Homepage = () => {
  // ==========================================================
  // Local Storage
  // ==========================================================
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    // If the user is logged in, push them to the chats page
    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
       <Center bg="white" h="100px" color="black">
      This is the Center
    </Center>
    
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
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList mb="1em">
            <Tab width="70%">Login!</Tab>
            <Tab width="70%">Sign Up!</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {" "}
              <Login />{" "}
            </TabPanel>
            <TabPanel>
              {" "}
              <Signup />{" "}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;