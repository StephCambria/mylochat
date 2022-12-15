import React from "react";
import Footer from "../components/Footer";

import {
  Center,
  Stack,
  HStack,
  Container,
  ButtonGroup,
  IconButton,
  Box,
  Image,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

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
            {/* <Text as="b" fontSize="4xl" fontFamily="Work Sans" color="gray.200">
              
            </Text> */}
            <Image
              align="50% 50%"
              src={require("../image/hero.png")}
              alt="Mylo mascot image"
            />
          </HStack>
        </Center>
        {/* --------------------------------------------------------  */}
        {/* About US Section */}
        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
          <div class="about-section" align="left">
            <h1>
              <strong>About Us</strong>
            </h1>
            <br />
            <p>
              <strong>MyloChat</strong> is a chat messaging APP designed with a
              love for furry felines in mind. We create a platform where you can
              find your Mylo to start a converstaion!
            </p>
          </div>
          {/* --------------------------------------------------------  */}
          {/* Our Mission Section */}
          <div class="about-section" align="left">
            <h1>
              <strong>Our Mission</strong>
            </h1>
            <br />
            <p>
              <strong>MyloChat</strong> It was something like Inspired by
              Bobby’s homeless cat — To spread awareness about animals that are
              endangered, neglected, mistreated, in need of food and medical
              care, or otherwise without homes A Free chat service; Donations
              are welcomed — 100% of all funds not used to pay for the chat
              service are donated to animal shelters, endangered animal
              conservation,
            </p>
          </div>
          {/* -------------------------------------------------------- */}
          <h1 align="center">
            <strong>Our Team</strong>
          </h1>
          <div>
            <div className="row">
              <div className="column">
                <div className="card">
                  {/* <img src="../image/hero-mylo.png" alt="Jane" style="width:100%"/> */}
                  <div className="container">
                    <h2>Steph Cambria</h2>
                    <p className="title">Back-End</p>
                    {/* <p>jane@example.com</p> */}
                    <p>
                      <Center
                        justify="space-between"
                        direction="row"
                        align="center"
                      >
                        <ButtonGroup variant="ghost">
                          <IconButton
                            as="a"
                            href="https://github.com/StephCambria/message-app-prototype"
                            aria-label="GitHub"
                            icon={<FaGithub fontSize="1.6rem" />}
                          />
                        </ButtonGroup>
                      </Center>
                    </p>
                  </div>
                </div>
              </div>
              {/* -------------------------------------------------------- */}
              <div className="column">
                <div className="card">
                  {/* <img src="../image/hero-mylo.png" alt="Jane" style="width:100%"/> */}
                  <div className="container">
                    <h2>Tyler Porter</h2>
                    <p className="title">Back-End</p>
                    {/* <p>jane@example.com</p> */}
                    <p>
                      <Center
                        justify="space-between"
                        direction="row"
                        align="center"
                      >
                        <ButtonGroup variant="ghost">
                          <IconButton
                            as="a"
                            href="https://github.com/Mykneeisonfire"
                            aria-label="GitHub"
                            icon={<FaGithub fontSize="1.6rem" />}
                          />
                        </ButtonGroup>
                      </Center>
                    </p>
                  </div>
                </div>
                <br />
              </div>
            </div>
            {/* -------------------------------------------------------- */}
            <div className="row">
              <div className="column">
                <div className="card">
                  {/* <img src="../image/hero-mylo.png" alt="Jane" style="width:100%"/> */}
                  <div className="container">
                    <h2>Joyce Chen</h2>
                    <p className="title">Front-End</p>
                    {/* <p>jane@example.com</p> */}
                    <p>
                      <Center
                        justify="space-between"
                        direction="row"
                        align="center"
                      >
                        <ButtonGroup variant="ghost">
                          <IconButton
                            as="a"
                            href="https://github.com/Joyce750526"
                            aria-label="GitHub"
                            icon={<FaGithub fontSize="1.6rem" />}
                          />
                        </ButtonGroup>
                      </Center>
                    </p>
                  </div>
                </div>
              </div>
              {/* -------------------------------------------------------- */}
              <div className="column">
                <div className="card">
                  {/* <img src="../image/hero-mylo.png" alt="Jane" style="width:100%"/> */}
                  <div className="container">
                    <h2>Caleb Lacson</h2>
                    <p className="title">Front-End</p>
                    {/* <p>jane@example.com</p> */}
                    <p>
                      <Center
                        justify="space-between"
                        direction="row"
                        align="center"
                      >
                        <ButtonGroup variant="ghost">
                          <IconButton
                            as="a"
                            href="https://github.com/clacson95"
                            aria-label="GitHub"
                            icon={<FaGithub fontSize="1.6rem" />}
                          />
                        </ButtonGroup>
                      </Center>
                    </p>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};
export default About;

// Saved Texts for later
// <h1>Stephanie Cambria | Tyler Porter | Joyce Chen | Caleb Lacson</h1>
// <h4>Thanks for viewing our work. Please don't hesitate to contact us for
// any useful feedback.
// </h4>
