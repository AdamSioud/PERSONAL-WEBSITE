import { Box, Heading, VStack, Link, Text } from "@chakra-ui/react";



const Interest = ({ title, description, href }) => (
    <VStack align="start" spacing={2}>
        <Link fontSize="xl" href={href} fontWeight="bold" textDecoration="none" _hover={{ textDecoration: "underline" }}>
            {title}
        </Link>
        <Text>{description}</Text>
    </VStack>
);

const interests = [
    {
        title: "Finans",
        description: "Interessen min for finans har jeg hatt lenge, og jeg liker å utforske dette området gjennom podcaster, blogger, videoer og nyheter. Har ikke så mye skin in the game lenger, men liker altså og følge med.  Har tidligere utviklet en bot som oppdager populære kryptovalutaer på den mest brukte plattformen for kryptovaluta-søk før det blir publisert. en front running bot. Du kan se mer om dette her: https://github.com/AdamSioud/CMC-DETECTIVE",
        href: "/interests/finance",
    },
    {
        title: "Kunst",
        description: "Jeg liker å være kreativ og siden i fjor vår har jeg laget skulpturer av gips inspirert av naturen, spesielt dyr og planter, og omgivelsene. Det å jobbe med gips gir meg frihet til å utforske og uttrykke min kunstneriske visjon. Jeg er også glad i å besøke gallerier og museer for å få nye ideer og lære om ulike kunststiler. Det er gøy å gå rundt i disse kulturstedene og bli inspirert.",
        href: "/interests/art",
    },
];

const Interests = () => {
    return (
        <Box borderRadius="lg" boxShadow="md">
            <Heading as="h2" fontSize="2xl" mb={4}>
                Mine Interesser
            </Heading>
            <VStack spacing={4} alignItems="flex-start">
                {interests.map((interest, index) => (
                    <Interest key={index} {...interest} />
                ))}
            </VStack>
        </Box>
    );
};


export default Interests;
