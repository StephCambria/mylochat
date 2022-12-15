import React from "react";
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

const Footer = () => {
  return (
    <div class="footer-distributed">
      <HStack class="footer-left">
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
        {/* -------------------------------------------------------- */}
        <div class="footer-icons">
          {/* Anchor tag (GitHub) */}
          {/* TODO: Need to replace this anchor tag to Heroku URL once we deployed */}

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

        </div>
      </HStack>
    </div>
   );
 };
export default Footer;



/* CONTACT US */
{/* <div class="footer-right"> */}
  {/* <p>Contact Us</p>
  Anchor tag (Email)
  TODO: Commented out for now! */}
  {/* <form action="#" method="post">
    <input type="text" name="email" placeholder="Email" />
    <textarea name="message" placeholder="Message"></textarea>
    <button>Send</button>
  </form>
</div> */}
