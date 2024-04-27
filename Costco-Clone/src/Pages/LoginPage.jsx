import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { Authentication } from "../Redux/actionItems";

const LoginPage = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const state = useSelector(state=>state.authentication)
const dispatch = useDispatch()

  const handleLogin = ()=>{

    let token = JSON.parse(localStorage.getItem('credentials')) || {}

    if(token.email === email && token.password === password){
  
      dispatch({type: Authentication})
      
    }
    else{
      alert("Wrong Credentials")
    }

    console.log("token: ",token)
  }
  

  if(state.isAuth){
    return <Navigate to={'/'}/>
  }


  return (
    <Box>
      <Flex justifyContent={"center"} p={4} bg={"#EEEEEE"}>
        <Box w={150}>
          <Link to={"/"}>
            <img src="src\assets\costcoLogoIdentityIntro@3x.png" alt="" />
          </Link>
        </Box>
      </Flex>

      <SimpleGrid
        justifyContent={"center"}
        alignItems={"center"}
        w={["90%", "70%", "50%", "30%"]}
        m={"auto"}
      >
        <SimpleGrid>
          <Text fontSize={"36px"} mt={5} mb={5}>
            Sign In
          </Text>
          <Box p={7} border={"1px solid rgba(0,0,0,0.2)"}>
            <FormControl>
              <Input
                type="email"
                placeholder="Email Address"
                border={"1px solid"}
                mb={3}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                border={"1px solid"}
                onChange={(e)=>setPassword  (e.target.value)}
              />
              <Text
                color={"rgb(0,96,169)"}
                fontSize={"12px"}
                _hover={{ textDecoration: "underline" }}
                fontWeight={400}
                cursor={"pointer"}
                m={2}
              >
                Forgot Password?
              </Text>
              <Flex mt={5} mb={4}>
                <input type="checkbox" />
                <Text fontWeight={400} fontSize={"14px"}>
                  Keep me signed in
                </Text>
              </Flex>
              <Text fontWeight={400} fontSize={"12px"}>
                Check this box only when on a private device.
              </Text>

              <Button
                w={"100%"}
                mt={4}
                mb={3}
                fontWeight={400}
                bg={"#2A6293"}
                color={"#FFFFFF"}
                _hover={"none"}
                onClick={handleLogin}
              >
                Sign In
              </Button>
            </FormControl>

            <Divider bg={"rgba(0,0,0,0.5)"} mt={2} mb={3}></Divider>
            <Text fontWeight={400} fontSize={"18px"} mb={4}>
              New to Costco?
            </Text>
            <Link to={"/signup"}>
              <Button color={"#2A6293"} bg={"#EEEEEE"} w={"100%"}>
                Create Account
              </Button>
            </Link>
          </Box>
        </SimpleGrid>
      </SimpleGrid>

      <SimpleGrid
        bg={"#EEEEEE"}
        p={5}
        mt={28}
        justifyContent={"center"}
        color={"#5F5F5F"}
      >
        <Flex
          gap={3}
          fontSize={"14px"}
          mt={3}
          mb={5}
          fontWeight={400}
          justifyContent={"center"}
        >
          <Text _hover={{ textDecoration: "underline" }}>
            Term and Conditions
          </Text>
          <Text _hover={{ textDecoration: "underline" }}>Privacy Rights</Text>
        </Flex>
        <Text fontWeight={400} fontSize={"14px"}>
          © 2024 Costco Wholesale Corporation. All rights reserved.
        </Text>
      </SimpleGrid>
    </Box>
  );
};

export default LoginPage;
