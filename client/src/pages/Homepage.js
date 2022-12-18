import React, { useEffect } from "react";
import Footer from "../components/Footer";
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
        {/* Rose pink: #d1c8c3 (we use for team section) */}
        <Box bg="#6b9e7c" w="100%" p={4} borderRadius="lg" borderWidth="1px">
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList mb="1em">
              <Tab textColor="white" fontSize="16px" width="50%">
                Login!
              </Tab>
              <Tab width="50%">Sign Up!</Tab>
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
    </div>
  );
};

export default Homepage;
