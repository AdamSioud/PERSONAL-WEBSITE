// components/ImageSlideshow.js

import { Box, Image, Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';

const ImageSlideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const onNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const onPrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <Box>
            <Box position="relative" width="70%" height="50%" mx="auto">
                <Image
                    src={images[currentIndex]}
                    alt="Artwork"
                    objectFit="contain"
                    backgroundColor="gray.50"
                    width="100%"
                    height="100%"
                />
            </Box>
            <Flex justifyContent="center" mt={3}>
                <Button
                    onClick={onPrev}
                    variant="outline"
                    backgroundColor="transparent"
                    mr={2}
                >
                    Forrige
                </Button>
                <Button
                    onClick={onNext}
                    variant="outline"
                    backgroundColor="transparent"
                >
                    Neste
                </Button>
            </Flex>
        </Box>
    );
};

export default ImageSlideshow;
