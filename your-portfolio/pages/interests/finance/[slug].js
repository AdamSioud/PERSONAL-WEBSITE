// pages/finance/[slug].js
import { useRouter } from "next/router";
import { Box, Heading, Text } from "@chakra-ui/react";

const blogPosts = [
    {
        title: "Understanding Cryptocurrencies",
        description: "An introduction to the world of cryptocurrencies and their impact on the global economy.",
        slug: "understanding-cryptocurrencies",
        content: "Your blog post content goes here...",
    },
    {
        title: "Understanding Biases",
        description: "An introduction to the world of cryptocurrencies and their impact on the global economy.",
        slug: "understanding-biases",
        content: "Your blog post content goes here...",
    },
    // Add more blog posts here
];

const BlogPost = () => {
    const router = useRouter();
    const { slug } = router.query;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <Box py={8} px={{ base: 4, md: 8 }} maxW="100%" mx="auto">
            <Heading as="h2" fontSize="2xl" mb={4}>
                {post.title}
            </Heading>
            <Text>{post.content}</Text>
        </Box>
    );
};

export default BlogPost;
