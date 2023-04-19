import {
    Box,
    Heading,
    VStack,
    Text,
} from "@chakra-ui/react";

import Link from 'next/link'; // Import the Link component from Next.js

const blogPosts = [
    {
        title: "Understanding Correlation, Causality, and Biases",
        description: "When making investment decisions, understanding the relationship between different variables is crucial. However, it's important to distinguish between correlation and causality and to identify and account for potential biases in data analysis. This article will explore how correlation and causality play a role in investment analysis, and how biases can impact the interpretation of results. It will also provide practical tips for minimizing these biases and making more informed investment decisions. Whether you are a novice or experienced investor, this article will provide valuable insights into the nuances of financial data analysis.",
        slug: "understanding-correlation-causality-biases",
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


