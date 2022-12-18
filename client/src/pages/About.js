import React from "react";
import {
  Box,
  ButtonGroup,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import Footer from "../components/Footer";

// ==========================================================
// ==========================================================
// About Page
// ==========================================================
// ==========================================================
const About = () => {
  return (
    <div>
      <Container maxW="xl" centerContent>
        {/* -------------------------------------------------------- */}
        {/* ----------------------- Header ------------------------- */}
        {/* -------------------------------------------------------- */}
        <Center
          p={3}
          bg={"#8BAD94"}
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Image
            align="50% 50%"
            src={require("../image/hero.png")}
            alt="Mylo mascot image"
          />
        </Center>

        {/* -------------------------------------------------------- */}
        {/* ---------------------- Our Mission -------------------- */}
        {/* -------------------------------------------------------- */}

        <Box
          bg="#474e5d"
          w="100%"
          p="15px"
          m="15px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <div class="about-section">
            <h1>
              <strong>Our Mission</strong>
            </h1>
            <br />
            <p>
              <strong>MyloChat</strong> was inspired by Bobby’s homeless cat —
              Our mission is to spread awareness about animals that are
              endangered, neglected, mistreated, in need of food and medical
              care, or otherwise without homes A Free chat service; Donations
              are welcomed — 100% of all funds not used to pay for the chat
              service are donated to animal shelters, endangered animal
              conservation,
            </p>
          </div>
        </Box>

        {/* -------------------------------------------------------- */}
        {/* ----------------------- About Us ----------------------- */}
        {/* -------------------------------------------------------- */}

        <Box
          bg="#474e5d"
          w="100%"
          p="15px 0 15px 0"
          m="15px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <div class="about-section">
            <h1>
              <strong>About Us</strong>
            </h1>
            <br />
            <p>
              <strong>MyloChat</strong> is a chat messaging APP designed with a
              love for furry felines in mind. We create a platform where you can
              find your Mylo to start a conversation!
            </p>
          </div>
        </Box>

        {/* -------------------------------------------------------- */}
        {/* ------------------- Team Member Cards ------------------ */}
        {/* -------------------------------------------------------- */}

        <Box
          bg="#d1c8c3"
          w="100%"
          p={4}
          m="20px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
          textAlign="center"
        >
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={6}
          >
            {/* ------------------- Stephanie Cambria ------------------ */}
            <GridItem
              bg="white"
              p="4"
              borderRadius="lg"
              borderWidth="1px"
              textAlign="center"
            >
              <Box className="profile-holder">
                {" "}
                <Image
                  align="50% 50%"
                  src={require("../image/hero-mylo.png")}
                  alt="Mylo mascot image"
                />
              </Box>
              <Heading size="md">Stephanie Cambria</Heading>

              <Text color="#bcb45e" fontSize="sm" padding="5px">
                Back-End Developer
              </Text>
              <Center justify="space-between" direction="row" align="center">
                <ButtonGroup variant="ghost">
                  <IconButton
                    as="a"
                    href="https://github.com/StephCambria"
                    aria-label="GitHub"
                    icon={<FaGithub fontSize="1.8rem" />}
                  />
                </ButtonGroup>
              </Center>
            </GridItem>
            {/* --------------------- Tyler Porter --------------------- */}
            <GridItem
              bg="white"
              p="4"
              borderRadius="lg"
              borderWidth="1px"
              textAlign="center"
            >
              <Box className="profile-holder">
                {" "}
                <Image
                  align="50% 50%"
                  src={require("../image/hero-mylo.png")}
                  alt="Mylo mascot image"
                />
              </Box>
              {/* --------------------- Tyler Porter --------------------- */}
              <Heading size="md">Tyler Porter</Heading>

              <Text color="#bcb45e" fontSize="sm" padding="5px">
                BIG ASS Back-End Developer
              </Text>
              <Center justify="space-between" direction="row" align="center">
                <ButtonGroup variant="ghost">
                  <IconButton
                    as="a"
                    href="https://github.com/Mykneeisonfire"
                    aria-label="GitHub"
                    icon={<FaGithub fontSize="1.8rem" />}
                  />
                </ButtonGroup>
              </Center>
            </GridItem>
            {/* ----------------------  Joyce Chen --------------------- */}
            <GridItem
              bg="white"
              p="4"
              borderRadius="lg"
              borderWidth="1px"
              textAlign="center"
            >
              <Box className="profile-holder">
                {" "}
                <Image
                  align="50% 50%"
                  src={require("../image/hero-mylo.png")}
                  alt="Mylo mascot image"
                />
              </Box>
              <Heading size="md">Joyce Chen</Heading>

              <Text color="#bcb45e" fontSize="sm" padding="5px">
                Front-End Developer
              </Text>
              <Center justify="space-between" direction="row" align="center">
                <ButtonGroup variant="ghost">
                  <IconButton
                    as="a"
                    href="https://github.com/Joyce750526"
                    aria-label="GitHub"
                    icon={<FaGithub fontSize="1.8rem" />}
                  />
                </ButtonGroup>
              </Center>
            </GridItem>
            {/* --------------------- Caleb Lacson --------------------- */}
            <GridItem
              bg="white"
              p="4"
              borderRadius="lg"
              borderWidth="1px"
              textAlign="center"
            >
              <Box className="profile-holder">
                {" "}
                <Image
                  align="50% 50%"
                  src={require("../image/hero-mylo.png")}
                  alt="Mylo mascot image"
                />
              </Box>
              <Heading size="md">Caleb Lacson</Heading>

              <Text color="#bcb45e" fontSize="sm" padding="5px">
                Front-End Developer
              </Text>
              <Center justify="space-between" direction="row" align="center">
                <ButtonGroup variant="ghost">
                  <IconButton
                    as="a"
                    href="https://github.com/clacson95"
                    aria-label="GitHub"
                    icon={<FaGithub fontSize="1.8rem" />}
                  />
                </ButtonGroup>
              </Center>
            </GridItem>
          </Grid>
        </Box>
      </Container>
      <Box>
        <Footer />
      </Box>
    </div>
  );
};

export default About;
