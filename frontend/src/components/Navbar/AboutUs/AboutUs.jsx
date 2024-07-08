import React from "react";
import { Box, Button, Heading, Text, Image, Flex } from "@chakra-ui/react";
import about from "../../../assets/abouts.jpg";
import About1 from "../../../assets/about1.jpg";
import About2 from "../../../assets/about2.jpg";
import About3 from "../../../assets/about3.jpg";

const AboutUs = () => {
  const handleClick = () => {};

  return (
    <>
      <Box className="about-container" padding="20px">
        <Box position="relative" width="100%">
          <Box
            className="about-image"
            position="relative"
            height="400px"
            overflow="hidden"
          >
            <Image
              src={about}
              alt="About Us"
              objectFit="cover"
              borderRadius="1rem"
            />
            <Box
              className="about-text"
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              color="#fff"
            >
              <Heading fontSize="3rem" marginTop="10px" marginBottom="10px">
                About Us
              </Heading>
              <Text fontSize="16px" marginTop="2rem">
                Unleash your potential with your powered gamified learning{" "}
                <br /> and product discovery platform, Where education meets{" "}
                <br /> entertainment, and every user embarks on a transformative{" "}
                <br /> journey of knowledge and discovery.
              </Text>
              <Button
                type="button"
                className="about-button"
                width="10%"
                padding="10px"
                backgroundColor="#333"
                color="#fff"
                borderRadius="1rem"
                cursor="pointer"
                position="absolute"
                bottom="20px"
                left="50%"
                transform="translateX(-50%)"
                _hover={{ backgroundColor: "#202122" }}
              >
                See more
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Heading
        className="about-stud"
        textAlign="center"
        fontSize="3rem"
        marginBottom="4rem"
      >
        Preparing Students to achieve Success
      </Heading>
      <Box className="about-cont" marginLeft="5rem" display="flex" marginBottom="4rem">
        <Box className="about-class" marginRight="2rem">
          <Heading className="about-dev" fontSize="2rem" marginBottom="3rem">
            Developing Confident And <br /> Gateway to Knowledge
          </Heading>
          <Text fontSize="20px">
            Ensure a safe learning environment where you can track your <br />{" "}
            progress, preferences, an Achievements <br /> Access your enrolled
            courses, and explore recommended <br /> products seamlessly
          </Text>
          <Button
            onClick={handleClick}
            className="btnPara"
            backgroundColor="#0575e6"
            color="#000000"
            height="60px"
            width="240px"
            padding="15px 20px"
            fontSize="20px"
            borderRadius="10px"
            marginTop="1rem"
            marginRight="15rem"
            _hover={{ backgroundColor: "#ffffff", color: "#0575e6" }}
          >
            View more
          </Button>
        </Box>
       
          <Image
            src={About1}
            alt="About Image"
            position="absolute"
            width="300px"
            height="300px"
            marginLeft="50rem"
            objectFit="cover"
            clipPath="polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
            transform="rotate(-30deg)" // Rotate image slightly
          />
        </Box>
     

      <Flex className="enjoy-para" alignItems="center" marginBottom="7rem">
      <Image
        src={About2}
        alt=""
        w="300px" // Set width
        h="300px"
        marginLeft="4rem" // Set height
        objectFit="cover" // Ensure the image covers the entire area
        clipPath="polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" // Create pentagon shape
        transform="rotate(-30deg)" // Rotate the image slightly
      />
      <Box  marginLeft="20rem" > {/* Add space between image and text */}
        <Heading as="h3" fontSize="2.5rem" marginBottom="10px"> {/* Set font size */}
          Enjoy Learning with a Unique and <br/> Learning Experience
        </Heading>
        <Text fontSize="1.2rem"> {/* Set font size */}
          Immerse yourself in interactive learning designed to <br/> captivate and
          challenge. Climb the leaderboards as you <br/> progress through courses. The
          gamification elements not <br/> only motivate but transform learning into an
          enjoyable adventure.
        </Text>
        <Button
            onClick={handleClick}
            className="btnPara"
            backgroundColor="#0575e6"
            color="#000000"
            height="60px"
            width="240px"
            padding="15px 20px"
            fontSize="20px"
            borderRadius="10px"
            marginTop="1rem"
            marginRight="15rem"
            _hover={{ backgroundColor: "#ffffff", color: "#0575e6" }}
          >
            View more
          </Button>
      </Box>
    </Flex>

    <Box className="about-cont" marginLeft="5rem" display="flex" marginBottom="4rem">
        <Box className="about-class" marginRight="2rem">
          <Heading className="about-dev" fontSize="2rem" marginBottom="3rem">
            Developing Confident And <br /> Gateway to Knowledge
          </Heading>
          <Text fontSize="20px">
            Ensure a safe learning environment where you can track your <br />{" "}
            progress, preferences, an Achievements <br /> Access your enrolled
            courses, and explore recommended <br /> products seamlessly
          </Text>
          <Button
            onClick={handleClick}
            className="btnPara"
            backgroundColor="#0575e6"
            color="#000000"
            height="60px"
            width="240px"
            padding="15px 20px"
            fontSize="20px"
            borderRadius="10px"
            marginTop="1rem"
            marginRight="15rem"
            _hover={{ backgroundColor: "#ffffff", color: "#0575e6" }}
          >
            View more
          </Button>
        </Box>
        
        <Image
        src={About3}
        alt=""
        w="300px" // Set width
        h="300px"
        marginLeft="20rem" // Set height
        objectFit="cover" // Ensure the image covers the entire area
        clipPath="polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" // Create pentagon shape
        transform="rotate(-30deg)" // Rotate the image slightly
      />
        </Box>
      
    </>
  );
};

export default AboutUs;
