// components/AboutAndSkills.js

import { SimpleGrid, VStack, Circle, Link, HStack, Box, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ExperiencePreview = ({ title, description, href }) => (
    <VStack align="start" spacing={4}>
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <Link href={href} color="blue.500" fontWeight="bold">
            Read More
        </Link>
    </VStack>
);


const experiences = [
    {
        title: 'Experience 1',
        description: 'A brief description of Experience 1.',
        href: 'https://example.com/experience-1',
    },
    {
        title: 'Experience 2',
        description: 'A brief description of Experience 2.',
        href: 'https://example.com/experience-2',
    },
    // Add more experiences as needed
];

const ProjectCard = ({ title, description, href }) => (
    <VStack
        borderWidth={1}
        borderRadius="md"
        p={4}
        boxShadow="md"
        _hover={{ boxShadow: 'lg' }}
        spacing={4}
        align="start"
    >
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <Link href={href} color="blue.500" fontWeight="bold">
            View Project
        </Link>
    </VStack>
);


const projects = [
    {
        title: 'Project 1',
        description: 'A brief description of Project 1.',
        href: 'https://example.com/project-1',
    },
    {
        title: 'Project 2',
        description: 'A brief description of Project 2.',
        href: 'https://example.com/project-2',
    },
    // Add more projects as needed
];

const AboutAndSkills = () => {
    return (
        <Box as="section" py={8}>
            <Flex justifyContent="center">
                <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8} maxW="80%">
                    <Box>
                        <HStack spacing={4}>
                            <Circle size="100px" bg="gray.200">
                                <img
                                    src="..\media\profile.png"
                                    alt="Adam Sioud"
                                    boxSize="100px"
                                    objectFit="cover"
                                >
                                </img>
                            </Circle>
                            <Box>
                                <Heading as="h1" fontSize="4xl">
                                    Adam Sioud
                                </Heading>
                                <HStack mt={2}>
                                    <Link href="https://github.com/your-username" isExternal>
                                        <FaGithub size="24px" />
                                    </Link>
                                    <Link href="https://linkedin.com/in/your-profile" isExternal>
                                        <FaLinkedin size="24px" />
                                    </Link>
                                    {/* Add more social icons here */}
                                </HStack>
                            </Box>
                        </HStack>
                        <Heading as="h2" fontSize="2xl" mb={4}>
                            About Me
                        </Heading>
                        <Text fontSize="lg" mb={8}>
                            I'm a software developer with experience in web development, mobile app development, and more. I'm passionate about creating clean, efficient, and user-friendly applications. In my free time, I enjoy learning new technologies and working on side projects.
                        </Text>
                        <Box bg="F7F2DD" w={{ base: '100%', sm: '100%', md: '100%' }}>
                            <Text fontSize="2xl" fontWeight="bold" mb={4}>My Skills</Text>
                            <Flex flexWrap="wrap">
                                <Box mr={4} mb={4} bg="green.200" borderRadius="md" p={2}>
                                    <Text fontWeight="bold" fontSize="md">UX Designer</Text>
                                </Box>
                                <Box mr={4} mb={4} bg="gray.200" borderRadius="md" p={2}>
                                    <Text fontWeight="bold" fontSize="md">Writing</Text>
                                </Box>
                                <Box mr={4} mb={4} bg="green.200" borderRadius="md" p={2}>
                                    <Text fontWeight="bold" fontSize="md">Programming</Text>
                                </Box>
                                <Box mr={4} mb={4} bg="gray.200" borderRadius="md" p={2}>
                                    <Text fontWeight="bold" fontSize="md">Marketing</Text>
                                </Box>
                                {/* Add more skills here */}
                            </Flex>

                        </Box>

                        <Box as="section" >

                            <Flex justifyContent="center" alignItems="stretch">


                                <Heading as="h2" fontSize="2xl" mb={4}>
                                    My Experience
                                </Heading>
                                {experiences.map((experience, index) => (
                                    <ExperiencePreview key={index} {...experience} />
                                ))}

                            </Flex>
                        </Box>

                        <Box as="section" py={8}>


                            <Flex justifyContent="center" alignItems="stretch">
                                <Heading as="h2" fontSize="2xl" mb={4}>
                                    My Projects
                                </Heading>
                                <SimpleGrid columns={[1, 1, 2]} spacing={8}>
                                    {projects.map((project, index) => (
                                        <ProjectCard key={index} {...project} />
                                    ))}
                                </SimpleGrid>

                            </Flex>
                        </Box>
                    </Box>

                </Grid>
            </Flex>
        </Box >
    );
};

export default AboutAndSkills;
