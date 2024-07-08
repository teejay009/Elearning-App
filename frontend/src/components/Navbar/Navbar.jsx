import React from "react";
import { Box, Flex, Link, Button, IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import logo from '../../assets/teejay.png';

const lists = [
  { tag: "Home", path: "/" },
  { tag: "AboutUs", path: "/aboutUs" },
  { tag: "Features", path: "/features" },
  { tag: "Benefit", path: "/benefit" },
  { tag: "Courses", path: "/courses" },
  { tag: "Board", path: "/board", dropdown: ["Discover", "Rewards"]},
];

// GreetUser component for displaying user greeting
const GreetUser = ({ displayName }) => {
  // Function to format the display name
  const formatDisplayName = (name) => {
    // Ensure the display name is not null or undefined
    if (!name) return "";

    // Convert the display name to lowercase
    const lowercaseName = name.toLowerCase();

    // Capitalize the first letter
    const formattedName =
      lowercaseName.charAt(0).toUpperCase() + lowercaseName.slice(1);

    return formattedName;
  };

  return (
    <h4 style={{ textTransform: "capitalize", fontSize: "16px", marginLeft: "5rem" }}>
      Hi! {formatDisplayName(displayName)}
    </h4>
  );
};

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { currentUser } = useContext(AuthContext);

  return (
    <Box as="nav" position="sticky" top="0" left="0" zIndex="100" boxShadow="md" bgColor="white" color="black">
      <Flex className="navbar-container" align="center" justify="space-between" px="20px" py="10px" maxWidth="100%" mx="auto">
        <Box as="h3" fontSize="xl" fontWeight="bold">
          <img style={{ width: '50px', borderRadius: "50px", height: "50px" }} src={logo} alt="logo"/>
        </Box>

        <Flex align="center">
          {lists.map(({ tag, path, dropdown }) => (
            <Box key={tag} position="relative" ml={{ base: "0", md: "20px" }}>
              {dropdown ? (
                <Box>
                  <Button variant="link" onClick={onToggle} fontWeight="bold">{tag}</Button>
                  <Box display={isOpen ? "block" : "none"} position="absolute" bgColor="white" boxShadow="md" p="2" top="100%" left="0" zIndex="1">
                    {dropdown.map((item, index) => (
                      <Link key={index} as={RouterLink} to={`${path}/${item.toLowerCase()}`} display="block" py="2" px="3" color="black" _hover={{ bgColor: "gray.100" }}>{item}</Link>
                    ))}
                  </Box>
                </Box>
              ) : (
                <Button as={RouterLink} to={path} variant="ghost" fontWeight="bold" color="black" _hover={{ bgColor: "gray.100" }}>{tag}</Button>
              )}
            </Box>
          ))}
          {/* Conditionally render user display name and photo */}
          {currentUser && (
            <>
              <GreetUser displayName={currentUser.displayName} />
              <img style={{ width: '3rem', height: "3rem", borderRadius: '40px', marginLeft:"1rem" }} src={currentUser.photoURL} alt="" />
            </>
          )}
        </Flex>

        <Button
          className="--btn --btn-success btn-color"
          target="_blank"
          colorScheme="blue" // Change the color scheme to match the button's color
          size="md" // Adjust the size as needed
        >
          Start Free Trial
        </Button>

        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          display={{ base: "block", md: "none" }}
          onClick={onToggle}
        />
      </Flex>
    </Box>
  );
};

export default Navbar;