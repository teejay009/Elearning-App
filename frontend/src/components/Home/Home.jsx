import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Text } from "@chakra-ui/react";
import homePage from "../../assets/home-page-header.jpg";
import { FiArrowRight } from "react-icons/fi";
import { chakra } from "@chakra-ui/react";

const StyledSpan = chakra("span", {
  baseStyle: {
    color: "#0575e6",
    fontSize: "3rem", // Adjust the font size as needed
  },
});

const Home = () => {
  return (
    <Box
      as="header"
      h="100vh"
      minH="100"
      d="flex"
      alignItems="center"
      justifyContent="center" 
      color="white"
      backgroundImage={`linear-gradient(rgba(5, 10, 35, 0.75), rgba(5, 10, 35, 0.75)), url(${homePage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      textAlign="center" 
    >
      <Box className="container" textAlign="center" paddingTop="25rem">
        <h2 style={{ fontSize: "3rem"}}>Welcome To</h2> 
        <h1 className="fw-semibold" style={{ fontSize: "3rem" }}>Tee-Jay <StyledSpan>ELEARNING</StyledSpan></h1> 
        <Text fontSize="xl" mt={4}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
          fugit? Doloremque deserunt ipsum eaque, <br/> dolor tempore, minima nisi
          debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione
          expedita! Porro, ut.
        </Text>
        <Box mt={4}>
        <Button
            className="secondary-button"
            mt="1rem"
            fontSize="15px"
            padding="25px"
            alignItems="center"
            cursor="pointer"
            rightIcon={<FiArrowRight />}
          >
            <Link to="/register">
              <h1>Register</h1>
            </Link>
          </Button>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Home;