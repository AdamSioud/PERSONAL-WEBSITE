// components/AboutAndSkills.js

import { Image, SimpleGrid, VStack, Circle, Link, HStack, Box, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ExperiencePreview = ({ title, description, href }) => (
    <VStack align="start" spacing={4}>
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <Link href={href} color="blue.500" fontWeight="bold">
            Mer om dette
        </Link>
    </VStack>
);



const experiences = [
    {
        title: 'Prosjektleder BRAIN Hackathon',
        description: 'Som leder av prosjektteamet organiserte jeg et vellykket Hackathon som brakte sammen over 45 talentfulle studenter for en spennende 24-timers case',
        href: 'https://nornir.io/ntnu-hackathon-brain-and-nornir/',
    },
    {
        title: 'Webutvikler i REVJU',
        description: "Høsten 2022 var jeg webutvikler i oppstartsselskapet Revju.no, hvor jeg var del av et team på fire personer som jobbet med å utvikle deres nettside",
        href: 'https://www.revju.no/',
    },
    {
        title: 'Webutvikler i Muttu',
        description: 'I vår har jeg jobbet på et prosjekt sammen med resten av Muttu med å utvikle deres plattform,  hovedfokus på frontend og design',
        href: 'https://www.muttu.no/v%C3%A5rt-oppdrag',
    },

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
            Se prosjektet
        </Link>
    </VStack>
);


const projects = [
    {
        title: 'Sure Protocol (Startup)',
        description: "Med på å bygge en protokoll for forsikring på blockchainen Solana",
        href: 'https://sure.claims/',
    },
    {
        title: 'Data Dashboard ',
        description: 'En enkel applikasjon som lar deg raskt bygge dashboards for ditt spesifikke behov ved hjeøp av Python og Plotly',
        href: 'https://github.com/AdamSioud/Start-NTNU-Hackathon-2022',
    },
    {
        title: 'Trondheim Kart',
        description: 'Som en del av et gruppeprosjekt ved NTNU, ga Trondheim kommune meg og en gruppe studenter i oppdrag å lage en prototype som kan finne det beste stedet å bo i Trondheim basert på visse kriterier',
        href: 'https://github.com/AdamSioud/Trondheim-Kommune-Prosjekt-Frontend',
    },
    {
        title: 'MINTA IOS APP',
        description: 'Lag NFT-er raskt ved hjelp av mobilen din',
        href: 'https://github.com/AdamSioud/MINTA',
    },
];

const AboutAndSkills = () => {

    const skills = [
        'UX Designer',
        'Writing',
        'Programming',
        'Marketing',
        // Add more skills here
    ];

    return (
        <Box as="section" py={8} px={{ base: 4, md: 8 }} maxW="90%" mx="auto" bg="gray.100">
            <VStack spacing={8} alignItems="flex-start">
                <Box>
                    <Circle size="150px" bg="gray.200">
                        <Image
                            src="https://media.licdn.com/dms/image/D4D03AQGm3jYZz_WRrQ/profile-displayphoto-shrink_200_200/0/1679491532531?e=1685577600&v=beta&t=-eZCFMA0OzmHrG4AHvX0ZVuIc5M1QLeLNSiTDPHHX6U"
                            alt="Adam Sioud"
                            boxSize="150px"
                            objectFit="cover"
                        />
                    </Circle>
                </Box>
                <Box textAlign="center">
                    <Heading as="h1" fontSize="4xl" mb={2}>
                        Adam Sioud
                    </Heading>
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
                <Box w="50%">
                    <Heading as="h2" fontSize="2xl" mb={4}>
                        Om meg
                    </Heading>
                    <Text fontSize="lg">
                        Jeg er en 3 års Datateknologi-student ved NTNU som liker å spille tennis så mye som mulig og lage skulpturer når jeg får tid.                    </Text>
                </Box>
                <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8} w="80%">
                    <Box>
                        <Heading as="h2" fontSize="2xl" mb={4}>
                            Erfaringer
                        </Heading>
                        <VStack spacing={4} alignItems="flex-start">
                            {experiences.map((experience, index) => (
                                <ExperiencePreview key={index} {...experience} />
                            ))}
                        </VStack>
                    </Box>
                    <Box>
                        <Heading as="h2" fontSize="2xl" mb={4}>
                            Prosjekter
                        </Heading>
                        <SimpleGrid columns={[1, 1, 2]} spacing={8}>
                            {projects.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                            ))}
                        </SimpleGrid>
                    </Box>
                </Grid>
            </VStack>
        </Box>
    );

};


export default AboutAndSkills;
