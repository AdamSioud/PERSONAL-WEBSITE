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
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          templateRows={{ base: "repeat(4, auto)", md: "repeat(2, 1fr)" }}
          gap={6}
        >
          <Box gridColumn={{ base: "1 / 2", md: "1 / 2" }} gridRow={{ base: "1 / 2", md: "1 / 3" }}>
            <About />
          </Box>
          <Box gridColumn={{ base: "1 / 2", md: "2 / 3" }} gridRow={{ base: "2 / 3", md: "1 / 2" }}>
            <Interests />
          </Box>
          <Box gridColumn={{ base: "1 / 2", md: "1 / 2" }} gridRow={{ base: "3 / 4", md: "2 / 3" }}>
            <Experience />
          </Box>
          <Box gridColumn={{ base: "1 / 2", md: "2 / 3" }} gridRow={{ base: "4 / 5", md: "2 / 3" }}>
            <Projects />
          </Box>
        </Grid>
      </Box>




    </>
  );
}
