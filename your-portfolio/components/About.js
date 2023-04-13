// components/About.js

import { Image, SimpleGrid, VStack, Circle, Link, HStack, Box, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';



const About = () => {


    return (


        <>
            <Box spacing={8} mb={4} gap={3}>
                <Box display="flex" flexDirection="column" justifyContent="center" spacing={5} mb={4}>
                    <Heading as="h1" fontSize="5xl" mb={2} fontWeight="bold">
                        Adam Sioud
                    </Heading>
                    <Box
                        boxSize="190px"
                        borderWidth="2px"
                        borderColor="neonBlue"
                        borderRadius="lg"
                        overflow="hidden"
                    >
                        <Image
                            src="data:image/jpeg;base64,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" // Replace with the path to your image
                            alt="Adam Sioud"
                            boxSize="190px"
                            objectFit="cover"
                        />
                    </Box>
                </Box>
                <Box display="flex" spacing={4}>
                    <HStack spacing={4}>
                        <Link href="https://github.com/AdamSioud" isExternal>
                            <FaGithub size="24px" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/adam-sioud-316b48191/" isExternal>
                            <FaLinkedin size="24px" />
                        </Link>
                        {/* Add more social icons here */}
                    </HStack>
                </Box>
                <Box w="70%" display="flex" flexDirection="column" justifyContent="center" spacing={4}>
                    <Heading as="h2" fontSize="2xl" mb={4} mt={3}>
                        Om meg
                    </Heading>
                    <Text fontSize="lg">
                        Jeg er en 3 års Datateknologi-student ved NTNU som liker å spille tennis så mye som mulig og lage skulpturer når jeg får tid.
                    </Text>
                </Box>
            </Box>
        </>



    );

};


export default About;
