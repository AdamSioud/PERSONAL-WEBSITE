import { Image, SimpleGrid, VStack, Circle, Link, HStack, Box, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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
        title: 'Data Dashboard',
        description: 'En enkel applikasjon som lar deg raskt bygge dashboards for ditt spesifikke behov ved hjelp av Python og Plotly',
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

const Projects = () => {
    return (
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
    );
};

export default Projects;
