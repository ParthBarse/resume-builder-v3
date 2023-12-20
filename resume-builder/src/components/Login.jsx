import React, { useState } from 'react';
import { ChakraProvider, extendTheme, Box, Flex, Heading, Input, Button, Link, FormControl, FormLabel, } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'black',
      },
    },
  },
});

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });


  const handleAdminLogin = () => {
    navigate('/Admin');
  };





  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();
    if(!formData.email.includes("@")){
      alert("Enter a valid Email")
    }else if (formData.email.length > 0 && formData.password.length > 0 && formData.email.includes("@")) {
      const res = await axios({
        method : "post",
        url : `${process.env.REACT_APP_HOST}/login`,
        data : formData
      })
      console.log(res);
      if (res.data.success === true) {
        localStorage.setItem("token", res.data.authToken)
        navigate('/Create');
        // setRegistrationComplete(true);
      }
      // Set registrationComplete to true for demo purposes
      else{
        alert(res.data.message || "Could not register")
      }
    }else{
      alert("Email or password cannot be empty")
    }
  }
    const handleRegister = () => {
    // Implement your register logic here
    //alert('Register clicked!');
    navigate('/Registration');
  };

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    navigate('/Forget-Password');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex
        align="center"
        justify="center"
        h="100vh"
      >
        <Box p={8} maxWidth="400px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="#00b0ff">
          <form >
          <Heading mb={4} textAlign="center" color="white">
            Login
          </Heading>
          <FormControl mb={4} isRequired>
              <FormLabel color="black">Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                color="black"
                bg="white"
              />
            </FormControl>
            <FormControl mb={4} isRequired>
              <FormLabel color="black">Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                color="black"
                bg="white"
              />
            </FormControl>
           
            <Button
              onClick={handleLogin}
              colorScheme="blackAlpha"
              mb={2}
              width="100%"
            >
              Login
            </Button>
          </form>
          <Flex direction="column" align="center" mb={4}>
            <Link onClick={handleForgotPassword} color="white" fontSize="sm" mb={4}>
              Forgot Password?
            </Link>
            <Button
              onClick={handleRegister}
              colorScheme="blackAlpha"
              mb={2}
              width="100%"
            >
              Register
            </Button>
          </Flex>
          <Button
            onClick={handleAdminLogin}
            colorScheme="blackAlpha"
    
            width="100%"
          >
            Login as Admin
          </Button>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default LoginPage;
