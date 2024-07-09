import React from "react";
import { Box, Container, Text, Input, Button, Flex } from "@chakra-ui/react";
import { footer } from "../../../dummydata";

const Footer = () => {
  return (
    <>
      <Box as="section" className='footerContact' backgroundColor="#0077b6" color="#fff" py={20}>
        <Container maxW="container.lg">
          <Flex className='send' align="center" justify="space-between">
            <Box>
              <Text as="h1" fontSize="40px">Do You Have Questions ?</Text>
              <Text>We'll help you to grow your career and growth.</Text>
            </Box>
            <Button className='btn5'>Contact Us Today</Button>
          </Flex>
        </Container>
      </Box>

      <footer backgroundColor="#1d2636" color="#fff" py={20}>
        <Container maxW="container.lg" display="grid" gridTemplateColumns={{ base: "1fr", md: "6fr 2fr 2fr 1fr" }} gridGap={6}>
          <Box>
            <Box className='logo'>
              <img src='../images/logo-light.png' alt='' width="150px" />
              <Text as="h2" fontWeight="500" marginBottom="20px">Do You Need Help With Anything?</Text>
              <Text color="grey" marginBottom="20px">Receive updates, hot deals, tutorials, discounts sent straight to your inbox every month</Text>

              <Flex className='input'>
                <Input type='text' placeholder='Email Address' backgroundColor="#fff" padding="17px" borderRadius="5px" />
                <Button colorScheme="teal" ml={2}>Subscribe</Button>
              </Flex>
            </Box>
          </Box>

          {footer.map((val, index) => (
            <Box key={index}>
              <Text as="h3" fontWeight="500" marginBottom="30px">{val.title}</Text>
              <ul>
                {val.text.map((items, idx) => (
                  <li key={idx}>{items.list}</li>
                ))}
              </ul>
            </Box>
          ))}
        </Container>
      </footer>
      <Box className='legal' textAlign="center" py={4} background="#1d2636" color="rgba(255, 255, 255, 0.5)" borderTop="1px solid rgba(255, 255, 255, 0.1)">
        <Text>© 2024 E-Learn. Designed By TJLearn.</Text>
      </Box>
    </> 78
  );
}


export default Footer;
