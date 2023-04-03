// components/AboutAndSkills.js

import { Image, SimpleGrid, VStack, Circle, Link, HStack, Box, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';



const About = () => {


    return (

        <>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" spacing={8} mb={4}>
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" spacing={4}>
                    <Heading as="h1" fontSize="4xl" mb={2}>
                        Adam Sioud
                    </Heading>
                    <Circle size="150px" bg="gray.200">
                        <Image
                            src="https://media.licdn.com/dms/image/D4D03AQGm3jYZz_WRrQ/profile-displayphoto-shrink_200_200/0/1679491532531?e=1685577600&v=beta&t=-eZCFMA0OzmHrG4AHvX0ZVuIc5M1QLeLNSiTDPHHX6U"
                            alt="Adam Sioud"
                            boxSize="150px"
                            objectFit="cover"
                        />
                    </Circle>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" spacing={4}>
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
                <Box w="50%" display="flex" flexDirection="column" alignItems="center" justifyContent="center" spacing={4}>
                    <Heading as="h2" fontSize="2xl" mb={4}>
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
