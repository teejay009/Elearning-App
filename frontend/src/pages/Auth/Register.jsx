import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [clear, setClear] = useState("");
  const [clearTwo, setClearTwo] = useState("");
  const [clearThree, setClearThree] = useState("");

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    setClear("");
    setClearTwo("");
    setClearThree("");

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
          } catch (errr) {}
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <Center h="100vh">
      <Box p="8" maxW="md" borderWidth="1px" borderRadius="lg">
        <Heading mb="4" textAlign="center">
          Register
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing="4">
            <FormControl isRequired isInvalid={err}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Name"
                value={clear}
                onChange={(e) => setClear(e.target.value)}
                name="name"
              />
            </FormControl>
            <FormControl isRequired isInvalid={err}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                value={clearTwo}
                onChange={(e) => setClearTwo(e.target.value)}
                name="email"
              />
            </FormControl>
            <FormControl isRequired isInvalid={err}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Password"
                value={clearThree}
                onChange={(e) => setClearThree(e.target.value)}
                name="password"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Add Profile Picture</FormLabel>
              <Input required type="file" id="file" />
            </FormControl>
            <Button type="submit" colorScheme="blue" isLoading={loading}>
              Register
            </Button>
            {loading && <Text mt="2" color="green.500">Registration Successful</Text>}
          </Stack>
        </form>
        <Stack mt="4" direction="row" align="center" justify="center">
          <Text>Already have an Account?</Text>
          <Link to="/login">Login</Link>
        </Stack>
      </Box>
    </Center>
  );
};

export default Register;