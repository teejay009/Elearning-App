import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Button,
  Spacer,
  Text,
} from "@chakra-ui/react";
import learnerImage from "../../assets/learner.jpg";
import gamified1 from "../../assets/gamified1.jpg";
import gamified2 from "../../assets/gamified2.jpg";
import discover from "../../assets/discover1.jpg";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { Navigate } from "react-router-dom";

const HeroSection = () => {
  const handleClick = () => {};

  const navigate = useNavigate()
  const handleLogout = () => {
    signOut(auth) // Sign out the user
      .then(() => {
        // Sign-out successful.
        console.log("User signed out");
        // You might want to redirect the user to a different page after logout
        navigate('/')
      })
      .catch((error) => {
        // An error happened.
        console.error("Error signing out:", error);
      });
  };


  return (
    <>
            <Box
        as="div"
        className="heroPage"
        marginTop="5rem"
        marginLeft="9rem"
        marginBottom="6rem"
      >
        <Flex className="learner">
          <Box className="heroSection" flex="1">
            <Heading className="hero" fontSize="3.5rem" marginBottom="10px">
              Unlock <span style={{ color: "#0575e6" }}>Learning</span>, <br />{" "}
              Unleash <span style={{ color: "#0575e6" }}>Discovery</span>!!
            </Heading>
            <Text className="para" fontSize="1.3rem">
              Are you ready to revolutionize your learning experience and
              discover amazing products along the way? Look no further!
              [Platform name] is your ultimate destination for gamified
              learning and products exploration
            </Text>
          </Box>
          <Spacer />
          <Box className="image" flex="1">
            <Image src={learnerImage} alt="Learner" borderRadius="10px" />
          </Box>
        </Flex>
     
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="blue"
          backgroundColor="transparent"
          color="#0575e6"
          padding="10px 20px"
          fontSize="16px"
          borderRadius="20px"
          border="1px solid #0575e6"
          marginBottom="15rem"
          _hover={{ backgroundColor: "#0575e6", color: "white" }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>

      <Box className="aboutGame"  marginLeft="9rem">
        <Flex className="aboutPara">
          <Box className="aboutUs" flex="1">
            <Heading as="h5" fontSize="2.5em" marginBottom="1rem">
              Gamified Learning:
            </Heading>
            <p
              className="aboutPara"
              fontSize="25px"
              marginBottom="2rem"
              color="#202020"
              lineHeight="1.2"
            >
              Immerse yourself in a world of interactive <br />
              challenges, quizzes, and activities designed to <br /> make
              learning enjoyable. Engage in dynamic <br /> courses that blend
              education with entertainment. <br /> Our gamified approach ensures
              that learning is <br /> not only effective but also fun! Earn
              points and <br /> level up, Accumulate points and unlock exciting{" "}
              <br /> rewards, your achievements don't go unnoticed.
            </p>
            <Flex
              className="learnButton"
              justifyContent="center"
              marginBottom="2rem"
            >
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="blue"
                onClick={handleClick}
                className="btnPara"
                backgroundColor="#0575e6"
                color="white"
                padding="10px 20px"
                fontSize="20px"
                borderRadius="20px"
                marginTop="1rem"
                marginRight="15rem"
                _hover={{ backgroundColor: "#ffffff", color: "#0575e6" }}
              >
                Join Now
              </Button>
            </Flex>
          </Box>
          <Spacer />
          <Box
            className="imagePara"
            width="400px"
            backgroundColor="#f2f2f2"
            borderRadius="10px"
            padding="5px"
            marginRight="9rem"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Image
              className="aboutone"
              src={gamified1}
              alt=""
              width="300px"
              height="25vh"
              borderRadius="10px"
              marginBottom="20px"
              marginLeft="10rem"
            />
            <Image
              className="abouttwo"
              src={gamified2}
              alt=""
              width="300px"
              height="25vh"
              borderRadius="10px"
              marginRight="6rem"
             
            />
          </Box>
        </Flex>
      </Box>

      <Box className="product" marginTop="10rem" >
        <Flex className="productContainer">
          <Box
            className="discoverImgContainer"
            backgroundColor="#f2f2f2"
            padding="20px"
            borderRadius="10px"
            marginLeft="7rem"
          >
            <Image
              className="discoverImg"
              src={discover}
              alt=""
              width="300px"
              height="330px"
            />
          </Box>
          <Spacer />
          <Box
            className="productCont"
            marginRight="7rem"
            marginBottom="8rem"
            lineHeight="2"
          >
            <Heading className="productPara" fontSize="3.5rem" >
              Product Discovery:
            </Heading>
            <p fontSize="19px">
              Explore a curated selection of products <br /> handpicked just for
              you. From cutting-edge <br /> gadgets to must-have lifestyle
              items, our <br /> platform introduces you exciting products that{" "}
              <br /> align with your interests and preferences{" "}
            </p>
            <div>
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="blue"
                onClick={handleClick}
                className="btnProduct"
                backgroundColor="#0575e6"
                color="white"
                padding="10px 20px"
                fontSize="16px"
                borderRadius="20px"
                _hover={{ backgroundColor: "#ffffff", color: "#0575e6" }}
              >
                Join Us
              </Button>
            </div>
          </Box>
        </Flex>
      </Box>

      <Flex
      className="box-container"
      justifyContent="center"
      alignItems="center"
      height="300px" /* Adjust as needed */
      color="#ffffff"
    >
      <Box
        className="box"
        bg="black"
        w="60%"
        borderRadius="1rem"
        padding="20px"
        textAlign="center"
      >
        <Heading as="h3" className="box-font" fontSize="2rem" marginBottom="2rem">
          Join Us by Creating <br /> Account
        </Heading>
        <Text className="box-para" fontSize="15px">
          Don't miss out on the fusion of learning and discovery. Sign up <br /> now to embark on a thrilling journey of knowledge acquisition <br /> and product exploration. The products await.
        </Text>
        <Flex className="boxx-container" justifyContent="center" marginTop="1rem" gap="1rem">
          <Link to="/register">
            <Button onClick={handleClick} className="--btn --btn-success btn" target="_blank">
              Sign Up Now
            </Button>
          </Link>
          <Link to="/contact">
            <Button onClick={handleClick} className="--btn --btn-success btn" target="_blank">
              Contact Us
            </Button>
          </Link>
        </Flex>
      </Box>
    </Flex>
    <Footer/>
    </>
  );
};

export default HeroSection;
