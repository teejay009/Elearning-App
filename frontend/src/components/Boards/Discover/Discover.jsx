import React from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Discover = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/arbitrum");
  };

  const doubleClick = () => {
    navigate("/lisk");
  };

  const btnClick = () => {
    navigate("/celo");
  };

  const onClick = () => {
    navigate("/dlt");
  };

  return (
    <Box className="discover">
      <Grid
        className="discover-container"
        templateColumns="repeat(2, 1fr)"
        gap="4rem"
        lineHeight="2.5"
        padding="5rem 15rem"
      >
        <GridItem
          className="supreme-container"
          marginTop="20px"
          bgColor="#f4f4f9"
          height="60vh"
          width="30vw"
          letterSpacing="1px"
          padding="1.5rem 2rem"
          alignItems="center"
          borderRadius="10px"
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        >
          <Heading
            as="h2"
            fontSize="2.7rem"
            marginTop="5px"
            textAlign="center"
            marginBottom="2rem"
          >
            Arbitrum
          </Heading>
          <Text>
            Arbitrum is a layer 2 solution designed to improve the capabilities
            of Ethereum smart contracts — boosting their speed and scalability,
            while adding in additional privacy features to boot. The platform is
            designed to allow developers to easily run unmodified Ethereum
            Virtual Machine (EVM) contracts and Ethereum transactions on a
            second layer, while still benefiting from Ethereum's excellent layer
            1 security.
          </Text>
          <Button
            className="more"
            onClick={handleClick}
            marginLeft="10rem"
            marginTop="1rem"
          >
            Learn more
          </Button>
        </GridItem>

        <GridItem
          className="supreme-container"
          marginTop="20px"
          bgColor="#f4f4f9"
          height="60vh"
          width="30vw"
          letterSpacing="1px"
          padding="1.5rem 2rem"
          alignItems="center"
          borderRadius="10px"
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        >
          <Heading
            as="h2"
            fontSize="2.7rem"
            marginTop="5px"
            textAlign="center"
            marginBottom="2rem"
          >
            Ethereum
          </Heading>
          <Text>
            Ethereum is a decentralized blockchain platform that enables
            developers to build and deploy smart contracts and decentralized
            applications (DApps). It was proposed by Vitalik Buterin in late
            2013 and development began in early 2014 Ethereum's programming
            language, and can be used to automate a wide range of processes,
            from financial transactions to supply chain management and
            decentralized finance (DeFi) applications.
          </Text>
          <Button
            className="more"
            onClick={doubleClick}
            marginLeft="10rem"
            marginTop="-2rem"
          >
            Learn more
          </Button>
        </GridItem>

        <GridItem
          className="supreme-container"
          marginTop="20px"
          bgColor="#f4f4f9"
          height="60vh"
          width="30vw"
          letterSpacing="1px"
          padding="1.5rem 2rem"
          alignItems="center"
          borderRadius="10px"
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        >
          <Heading
            as="h2"
            fontSize="2.5rem"
            marginTop="5px"
            textAlign="center"
            marginBottom="1rem"
          >
            Celo
          </Heading>
          <Text>
            Celo is a payments platform attempting to make crypto payments as
            easy as possible to support communities around the world who are
            still left without critical financial services. Instead of having to
            manage complex crypto addresses, users can send cryptocurrencies
            using mobile phone numbers. CELO is a proof-of-stake (PoS) token
            used for transaction fees, governance participation and related
            activities on the Celo network.
          </Text>
          <Button
            className="more"
            onClick={btnClick}
            marginLeft="10rem"
            marginTop="2rem"
          >
            Learn more
          </Button>
        </GridItem>

        <GridItem
          className="supreme-container"
          marginTop="20px"
          bgColor="#f4f4f9"
          height="60vh"
          width="30vw"
          letterSpacing="1px"
          padding="1.5rem 2rem"
          alignItems="center"
          borderRadius="10px"
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        >
          <Heading
            as="h2"
            fontSize="2.5rem"
            marginTop="5px"
            textAlign="center"
            marginBottom="3rem"
          >
            DLT Africa
          </Heading>
          <Text>
            DLT Africa is there to give you a comprehensive guide on setting up
            your own coding environment. Whether you're a beginner or seasoned
            developer, having the right tools and environment is crucial for
            success.DLT Africa aims to support web3 innovation across Africa by
            training more web3 devs, product managers, marketing professionals
            and support through Hackathons, incubation programs and open demo
            days.
          </Text>
          <Button className="more" onClick={onClick} marginLeft="12rem">
            Learn more
          </Button>
        </GridItem>
        {/* Repeat the same pattern for other containers */}
      </Grid>
    </Box>
  );
};

export default Discover;
