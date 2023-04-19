// pages/finance/[slug].js
import { useRouter } from "next/router";
import { Box, Heading, Text } from "@chakra-ui/react";

const blogPosts = [
    {
        title: "Understanding Correlation, Causality, and Biases",
        description: "When making investment decisions, understanding the relationship between different variables is crucial. However, it's important to distinguish between correlation and causality and to identify and account for potential biases in data analysis. This article will explore how correlation and causality play a role in investment analysis, and how biases can impact the interpretation of results. It will also provide practical tips for minimizing these biases and making more informed investment decisions. Whether you are a novice or experienced investor, this article will provide valuable insights into the nuances of financial data analysis.",
        slug: "understanding-correlation-causality-biases",
        content: "When making investment decisions, understanding the relationship between different variables is crucial. However, it's important to distinguish between correlation and causality and to identify and account for potential biases in data analysis. This article will explore how correlation and causality play a role in investment analysis, and how biases can impact the interpretation of results. It will also provide practical tips for minimizing these biases and making more informed investment decisions. Whether you are a novice or experienced investor, this article will provide valuable insights into the nuances of financial data analysis.",

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
