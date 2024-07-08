import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

const Login = () => {
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const google = () => {
    alert("Currently not available, make use of the other options below");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/userPage");
    } catch (err) {
      setErr("Invalid login parameters");
    }
  };

  return (
    <Center h="100vh" w="100vw">
      <Box p="8" maxW="md" borderWidth="1px" borderRadius="lg">
        <Heading mb="4" textAlign="center" fontSize="3rem" marginBottom="2rem">
          Welcome Back!
        </Heading>
        <Text textAlign="center">Please enter your details</Text>
        <Stack spacing="4">
          <Button
            onClick={google}
            className="--btn --btn-google"
            colorScheme="blue"
          >
            Login with Google
          </Button>
          <Text textAlign="center" fontWeight="bold">
            or
          </Text>
          <form onSubmit={handleSubmit}>
            <FormControl isRequired isInvalid={!!err}>
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                placeholder="example@gmail.com"
                required
                name="email"
              />
              <FormErrorMessage>{err}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input marginBottom="2rem" type="password" placeholder="Password" required />
            </FormControl>
            <Button
              type="submit"
              className="--btn --btn-primary --btn-block"
              colorScheme="blue"
              marginLeft="5rem"
            >
              Login
            </Button>
          </form>
        </Stack>
        <Stack mt="4" direction="row" align="center" justify="center">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: "2rem",
            }}
          >
            <Button
              className="secondary-button"
              mt="1rem"
              fontSize="15px"
              padding="25px"
              alignItems="center"
              cursor="pointer"
              rightIcon={<FiArrowRight />}
            >
              <Link
                to="/forgot"
                style={{
                  marginBottom: "8px",
                  textDecoration: "none",
                }}
              >
                Forgot password
              </Link>
            </Button>
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
          </div>

          <Text>Don't have an Account?</Text>
        </Stack>
      </Box>
    </Center>
  );
};

export default Login;