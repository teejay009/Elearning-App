import React from "react";
import { Box, Container, Flex, Text, Input, Textarea, Button } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const Back = ({ title }) => {
  const location = useLocation();

  return (
    <>
      <section className='back'>
        {/* <h2> {location.pathname.split("/")[1]}</h2> */}
        
      </section>
      <div className='margin'></div>
    </>
  );
};

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ';
  
  return (
    <>
      <Back title='Contact us' />
      <Box as="section" className='contacts padding'>
        <Container maxW="container.lg" className='container shadow'>
          <Flex direction={{ base: "column", lg: "row" }} align="center">
            <Box flex="1" pr={{ base: 0, lg: 10 }}>
              <Box className='left row'>
                <iframe src={map}></iframe>
              </Box>
            </Box>
            <Box flex="1">
              <Box className='right row' p={10}>
                <Text as="h1" fontSize="30px" fontWeight="400">Contact us</Text>
                <Text color="gray">We're open for any suggestion or just to have a chat</Text>

                <Flex direction="column" className='items grid2' mt={8} mb={6}>
                  <Box>
                    <Text as="h4">ADDRESS:</Text>
                    <Text>198 West 21th Street, Suite 721 New York NY 10016</Text>
                  </Box>
                  <Box>
                    <Text as="h4">EMAIL:</Text>
                    <Text>info@yoursite.com</Text>
                  </Box>
                  <Box>
                    <Text as="h4">PHONE:</Text>
                    <Text>+ 1235 2355 98</Text>
                  </Box>
                </Flex>

                <form action=''>
                  <Flex direction={{ base: "column", lg: "row" }} justify="space-between" mb={4}>
                    <Input type='text' placeholder='Name' mb={{ base: 4, lg: 0 }} />
                    <Input type='email' placeholder='Email' />
                  </Flex>
                  <Input type='text' placeholder='Subject' mb={4} />
                  <Textarea cols='30' rows='10' mb={4} placeholder='Create a message here...' />
                  <Button className='primary-btn'>SEND MESSAGE</Button>
                </form>

                <Text as="h3" fontWeight="500" mt={8} mb={2}>Follow us here</Text>
                <Text color="#1eb2a6" fontWeight="600" fontSize="15px" wordSpacing="5px">FACEBOOK TWITTER INSTAGRAM DRIBBBLE</Text>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
