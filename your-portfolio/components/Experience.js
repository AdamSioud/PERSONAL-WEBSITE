import { Image, SimpleGrid, VStack, Circle, Link, HStack, Box, Flex, Grid, Heading, Text } from '@chakra-ui/react';

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
        description: 'Som leder av prosjektteamet organiserte jeg et vellykket Hackathon som brakte sammen over 45 talentfulle studenter for en spennende 24-timers case.',
        href: 'https://nornir.io/ntnu-hackathon-brain-and-nornir/',
    },
    {
        title: 'Webutvikler i REVJU',
        description: "Høsten 2022 var jeg webutvikler i oppstartsselskapet Revju.no, hvor jeg var del av et team på fire personer som jobbet med å utvikle deres nettside.",
        href: 'https://www.revju.no/',
    },
    {
        title: 'Webutvikler i Muttu',
        description: 'I vår har jeg jobbet på et prosjekt sammen med resten av Muttu med å utvikle deres plattform,  hovedfokus på frontend og design.',
        href: 'https://www.muttu.no/v%C3%A5rt-oppdrag',
    },
];

const Experience = () => {
    return (
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
    );
};

export default Experience;
