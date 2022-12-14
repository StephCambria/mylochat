import React from "react";
// import {
//     ButtonGroup,
//     Container,
//     HStack,
//     IconButton,
//     Image,
//     Stack,
//     Text,
//     Box,
// } from "@chakra-ui/react";
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div class="footer-distributed">
      <div class="footer-left">
        <h3>
          Mylo<span>Chat</span>
        </h3>
        <p class="footer-links">
          <a href="/about">About</a> |
          <a href="/contact">Contact</a>
        </p>

        <p class="footer-company-name">
          MyloChat Inc. All rights reserved © 2022
        </p>
        <div class="footer-icons">
          {/* Saved this anchor tag for later (LinkedIn) */}
          {/* <a href="#">
            <i class="fa fa-linkedin">linkedIn</i>
          </a> */}
          
          {/* Anchor tag (GitHub) */}
          {/* TODO: Need to replace this anchor tag to Heroku URL once we deployed */}
          <a href="https://github.com/StephCambria/message-app-prototype">
            <i class="fa fa-github">GitHub</i>
          </a>
        </div>
      </div>
      {/* CONTACT US */}
      <div class="footer-right">
        <p>Contact Us</p>

        <form action="#" method="post">
          <input type="text" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button class="contact-btn">Send</button>
        </form>
      </div>
    </div>
  );
};
export default Footer;

// <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
//   <HStack spacing={{ base: '4', md: '5' }}>
//       <Image
//           align='50% 50%'
//           src={require('../image/Logo.png')}
//           alt='Mylo logo image'
//           />
//       <Text fontSize="sm" color="subtle">
//       &copy; {new Date().getFullYear()} Chakra UI, Inc. All rights reserved.
//       </Text>
//       <Stack justify="space-between" direction="row" align="center">

//       {/* insert logo here*/}

//       <ButtonGroup variant="ghost">
//           <IconButton as="a" href="https://github.com/StephCambria/message-app-prototype" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
//       </ButtonGroup>
//       </Stack>
//   </HStack>
// </Container>

// export default Footer;`import {
//     ButtonGroup,
//     Container,
//     HStack,
//     IconButton,
//     Image,
//     Stack,
//     Text,
// } from "@chakra-ui/react";
// import * as React from 'react'
// import { FaGithub } from 'react-icons/fa'

// const Footer = () => (
//   <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
//     <HStack spacing={{ base: '4', md: '5' }}>
//         <Image
//             align='50% 50%'
//             src={require('../image/Logo.png')}
//             alt='Mylo logo image'
//             />
//         <Text fontSize="sm" color="subtle">
//         &copy; {new Date().getFullYear()} Chakra UI, Inc. All rights reserved.
//         </Text>
//         <Stack justify="space-between" direction="row" align="center">

//         {/* insert logo here*/}

//         <ButtonGroup variant="ghost">
//             <IconButton as="a" href="https://github.com/StephCambria/message-app-prototype" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
//         </ButtonGroup>
//         </Stack>
//     </HStack>
//   </Container>
//   <Footer />
// )
