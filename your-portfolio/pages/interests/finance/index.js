import {
    Box,
    Heading,
    VStack,
    Text,
} from "@chakra-ui/react";

import Link from 'next/link'; // Import the Link component from Next.js

const blogPosts = [
    {
        title: "Understanding Cryptocurrencies",
        description: "An introduction to the world of cryptocurrencies and their impact on the global economy.",
        slug: "understanding-cryptocurrencies",
    },
    {
        title: "Understanding Biases",
        description: "An introduction to the world of cryptocurrencies and their impact on the global economy.",
        slug: "understanding-biases",
    },
    // Add more blog posts here
];

const Finance = () => {
    return (
        <Box py={8} px={{ base: 4, md: 8 }} maxW="100%" mx="auto">
            <Heading as="h2" fontSize="2xl" mb={4}>
                Finance Blog
            </Heading>
            <VStack spacing={4} alignItems="flex-start">
                {blogPosts.map((post, index) => (
                    <Box key={index}>
                        <Link href={`/interests/finance/${post.slug}`}>
                            <Heading size="md" as="a">
                                {post.title}
                            </Heading>
                        </Link>
                        <Text>{post.description}</Text>
                    </Box>
                ))}
            </VStack>
        </Box>
    );
};

export default Finance;


