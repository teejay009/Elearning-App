import React, { useState } from "react";
import { Container, Flex, Box, Text } from "@chakra-ui/react";
import chooseImg from "../../../assets/why-choose-us.png";
import ReactPlayer from "react-player";

const Benefits = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <Box as="section" py={10}>
      <Container maxW="container.lg">
        <Flex direction={{ base: "column", lg: "row" }} align="center" mb="10rem">
          <Box flex="1" pr={{ base: 0, lg: 10 }}>
            <Box>
              <Text as="h2" fontWeight="semibold" mb={4}>Why Choose Us</Text>
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt mollitia nostrum harum eos praesentium odit a sed quod
                aut fugit. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Reprehenderit omnis, culpa eligendi inventore perspiciatis
                minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores cupiditate facilis provident quidem accusamus impedit
                tenetur laboriosam debitis nisi eius!
              </Text>
            </Box>
          </Box>
          <Box flex="1">
            <Box position="relative">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=qFp27TR4Yew"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" style={{ borderRadius: "15px" }} />
              )}

              {!showVideo && (
                <Box
                  className="play__icon"
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  background="#fff"
                  zIndex="7777"
                  width="50px"
                  height="50px"
                  borderRadius="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  onClick={() => setShowVideo(!showVideo)}
                >
                  <i className="ri-play-circle-line" style={{ color: "#17bf9e", fontSize: "2rem", padding: "10px" }}></i>
                </Box>
              )}
            </Box>
          </Box>
        </Flex>
        <Flex direction={{ base: "column", lg: "row" }} align="center" mb="10rem">
          <Box flex="1" pr={{ base: 0, lg: 10 }}>
            <Box>
              <Text as="h2" fontWeight="semibold" mb={4}>Why Choose Us</Text>
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt mollitia nostrum harum eos praesentium odit a sed quod
                aut fugit. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Reprehenderit omnis, culpa eligendi inventore perspiciatis
                minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores cupiditate facilis provident quidem accusamus impedit
                tenetur laboriosam debitis nisi eius!
              </Text>
            </Box>
          </Box>
          <Box flex="1">
            <Box position="relative">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=qFp27TR4Yew"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" style={{ borderRadius: "15px" }} />
              )}

              {!showVideo && (
                <Box
                  className="play__icon"
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  background="#fff"
                  zIndex="7777"
                  width="50px"
                  height="50px"
                  borderRadius="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  onClick={() => setShowVideo(!showVideo)}
                >
                  <i className="ri-play-circle-line" style={{ color: "#17bf9e", fontSize: "2rem", padding: "10px" }}></i>
                </Box>
              )}
            </Box>
          </Box>
        </Flex>
        <Flex direction={{ base: "column", lg: "row" }} align="center" mb='10rem'>
          <Box flex="1" pr={{ base: 0, lg: 10 }}>
            <Box>
              <Text as="h2" fontWeight="semibold" mb={4}>Why Choose Us</Text>
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt mollitia nostrum harum eos praesentium odit a sed quod
                aut fugit. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Reprehenderit omnis, culpa eligendi inventore perspiciatis
                minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores cupiditate facilis provident quidem accusamus impedit
                tenetur laboriosam debitis nisi eius!
              </Text>
            </Box>
          </Box>
          <Box flex="1">
            <Box position="relative">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=qFp27TR4Yew"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" style={{ borderRadius: "15px" }} />
              )}

              {!showVideo && (
                <Box
                  className="play__icon"
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  background="#fff"
                  zIndex="7777"
                  width="50px"
                  height="50px"
                  borderRadius="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  onClick={() => setShowVideo(!showVideo)}
                >
                  <i className="ri-play-circle-line" style={{ color: "#17bf9e", fontSize: "2rem", padding: "10px" }}></i>
                </Box>
              )}
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Benefits;
