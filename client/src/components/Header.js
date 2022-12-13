import React from "react";
// import { Container, Image, Box } from "@chakra-ui/react";
import HeaderImage from "../image/hero-mylo.png";

function Header() {
  return (
    <div className="hero-container">
      <div className="hero-text" align="center">
        <h1>
          Mylo
          <img className="d-block w-100" src={HeaderImage} alt="Cat Image" />
          Chat
        </h1>

        <a href="About" class="btn btn-primary">
          Start Chat with Mylo
        </a>
      </div>
    </div>
  );
}

export default Header;

{
  /* <CardFooter>
<Button variant='solid' colorScheme='blue'>
  Buy Latte
</Button> */
}
