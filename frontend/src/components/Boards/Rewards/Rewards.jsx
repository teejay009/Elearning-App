import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";

const Rewards = () => {
  return (
    <Flex direction="column" alignItems="center" >
      <Flex direction="column" alignItems="center" marginBottom="10rem">
        <Box
          backgroundColor="#61605e"
          width="30vw"
          borderRadius="10px"
          marginBottom="20px"
          padding="20px"
          textAlign="center"
          marginRight="70rem" // Aligns to the right
        >
          <Heading as="h4" size="md" color="white" marginBottom="5px">
            Total Earned
          </Heading>
          <Text fontSize="1.5rem" color="white" marginBottom="5px">
            $100
          </Text>
          <Text
            color="blue"
            textDecoration="underline"
            cursor="pointer"
            _hover={{ color: "darkblue" }}
          >
            See details
          </Text>
        </Box>
        <Box
          backgroundColor="#61605e"
          width="30vw"
          borderRadius="10px"
          marginBottom="20px"
          padding="20px"
          textAlign="center"
          marginRight="auto" // Aligns to the right
        >
          <Heading as="h4" size="md" color="white" marginBottom="5px">
            Badges Earned
          </Heading>
          <Text fontSize="1.5rem" color="white" marginBottom="5px">
            2
          </Text>
          <Text
            color="blue"
            textDecoration="underline"
            cursor="pointer"
            _hover={{ color: "darkblue" }}
          >
            See details
          </Text>
        </Box>
      </Flex>
      <Flex direction="column" alignItems="center">
        <Heading as="h2" size="2rem" fontWeight="600" marginBottom="1rem" marginRight="60rem" fontSize="3rem">
          Quest
        </Heading>
        <Box
          backgroundColor="#fdf0d5"
          width="55vw"
          borderRadius="10px"
          marginBottom="20px"
          padding="20px"
          textAlign="flex-start"
          marginRight="20rem"
        >
          <Heading as="h4" size="md" color="black" marginBottom="5px">
            Quick Bill
          </Heading>
          <Text fontSize="1.5rem" color="black" marginBottom="5px">
            Points Earned
          </Text>
          <Text
           fontSize="2rem"
        fontWeight="300"
          >
           50
          </Text>
        </Box>
        <Box
          backgroundColor="#fdf0d5"
          width="55vw"
          borderRadius="10px"
          marginBottom="20px"
          padding="20px"
          textAlign="flex-start"
          marginRight="20rem"
        >
          <Heading as="h4" size="md" color="black" marginBottom="5px">
            Supreme small chops
          </Heading>
          <Text fontSize="1.5rem" color="black" marginBottom="5px">
            Points Earned
          </Text>
          <Text
        fontSize="2rem"
        fontWeight="300"
          >
            50
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Rewards;
