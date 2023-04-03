// pages/index.js

import About from '../components/About';
import Experience from '../components/Experience';
import Interests from '../components/Interests';
import Projects from '../components/Projects';
import { Box, VStack, Grid } from '@chakra-ui/react';


export default function Home() {
  return (
    <>
      <Box as="section" py={8} px={{ base: 4, md: 8 }} maxW="100%" mx="auto">
        <Grid templateColumns="repeat(2, 1fr)" templateRows={{ base: "repeat(4, auto)", md: "repeat(2, 1fr)" }} gap={8}>
          <Box gridColumn="1 / 2" gridRow={{ base: "1 / 2", md: "1 / 3" }} bg="gray.200">
            <About />
          </Box>
          <Box gridColumn="2 / 3" gridRow={{ base: "2 / 3", md: "1 / 2" }} bg="blue.200">
            <Interests />
          </Box>
          <Box gridColumn="1 / 2" gridRow={{ base: "3 / 4", md: "2 / 3" }} bg="green.200">
            <Experience />
          </Box>
          <Box gridColumn="2 / 3" gridRow={{ base: "4 / 5", md: "2 / 3" }} bg="purple.200">
            <Projects />
          </Box>
        </Grid>
      </Box>



    </>
  );
}
