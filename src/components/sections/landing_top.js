import React from 'react';
//assests
import logo from '../../assets/logo.svg';
import LightMode_techphantoms from '../../assets/LightMode_techphantoms.svg';
import LightMode_MLSA_Badge from '../../assets/LightMode_MLSA_Badge.svg';
//css
import { Box, Text, SimpleGrid, Image } from "@chakra-ui/core";

const LandingTop = props => {
  return (
    <div>
      <Box padding="10px" w="100%" mt={["100px", "200px"]} mb={["100px", "200px"]} color="#ED654B">
        <SimpleGrid columns="2" spacing={1}>
          <Box >
            <center><Image src={logo} width={{lg: "40%", md:"60%", sm:"50%", xs:"75%"}} alt="lightlogo" /></center>
          </Box>

          <Box >
            <center><Image src={LightMode_techphantoms} width={{lg: "60%", md:"60", sm:"25", xs:"90%"}} alt="LightMode_techphantoms" /></center>
            <center><Text fontSize={["10px", "sm"]} p={[2, 4, 10]}>A Technical Community <br /> By</Text></center>
            <center><img src={LightMode_MLSA_Badge} width={{lg: "20%", md:"10%", sm:"10%", xs:"10%"}} alt="LightMode_MLSA_Badge" /></center>

          </Box>
        </SimpleGrid>
      </Box>
    </div>
  );
}
export default LandingTop;