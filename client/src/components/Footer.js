import React from "react";
import {
  Box,
  Container,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Logo = () => {
  return (
    <Image
      viewBox="0 0 120 28"
      align="50% 50%"
      src={require("../image/footer.png")}
      alt="Mylo logo image"
    />
  );
};

const Footer = () => (
  /* -------------------Footer Box Color------------------ */
  <Box bg="#6b9e7c" color={useColorModeValue("gray.700", "gray.200")}>
    <Container
      as={Stack}
      maxW={"6xl"}
      py={4}
      direction={{ base: "column", md: "row" }}
      spacing={4}
      justify={{ base: "center", md: "space-between" }}
      align={{ base: "center", md: "center" }}
    >
      <Logo />
      <Text fontFamily="Roboto" fontStyle="bold" fontSize="lg" color="white">
        © MyloChat Inc. 2022 | All rights reserved
      </Text>
    </Container>
  </Box>
);

export default Footer;
