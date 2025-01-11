import {
    Box,
    Center,
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
    Highlight,
    Image,
    Input,
    Text,
    FormControl,
    Button,
    IconButton,
    AbsoluteCenter,
    Divider,
    position,
} from "@chakra-ui/react";
import React from "react";
import getStaticAsset from "../../../Utils/static_assets";
import { Link } from "react-router-dom";
import { px } from "framer-motion";
import { PiGoogleCardboardLogo } from "react-icons/pi";
import { BsApple, BsGoogle } from "react-icons/bs";
import { DiYahoo } from "react-icons/di";
import { FaYahoo } from "react-icons/fa";

export default function LoginPage() {
    return (
        <Box w="full" h="100vh">
            <Center w="full" h="full">
                <Container
                    maxW={{ base: "full", md: "7xl" }}
                    h={{ base: "max-content", md: "700px" }}
                    bg="white"
                    rounded="xl"
                    p={0}
                    overflow="hidden">
                    <Grid
                        w="full"
                        h="full"
                        templateColumns={{
                            base: "repeat(1, 1fr)",
                            md: "repeat(12, 1fr)",
                        }}>
                        <GridItem colSpan={{ base: 1, md: 7 }}>
                            <Box w="full" h="full" bg="primary" pr={0}>
                                <Flex
                                    w="full"
                                    h="full"
                                    flexDirection="column"
                                    alignItems="center"
                                    justifyContent="center">
                                    <Box>
                                        <Image
                                            src={getStaticAsset(
                                                "",
                                                "FLAT_DESIGN.png",
                                            )}
                                            w={{ base: "full", md: "75%" }}
                                            mx="auto"
                                        />
                                    </Box>
                                    <Box
                                        w={{ base: "full", md: "90%" }}
                                        mx="auto">
                                        <Heading
                                            fontSize="30px"
                                            fontWeight={400}
                                            textAlign="center">
                                            <Highlight
                                                query={["Our App"]}
                                                styles={{ fontWeight: 600 }}>
                                                Make your work easier and
                                                organized with Our App
                                            </Highlight>
                                        </Heading>
                                    </Box>
                                </Flex>
                            </Box>
                        </GridItem>
                        <GridItem
                            colSpan={{ base: 1, md: 5 }}
                            w="full"
                            h="full"
                            overflow="hidden"
                            p={{ base: 5, md: 8 }}>
                            <Flex
                                w={{ base: "full", md: "90%", lg: "85%" }}
                                mx="auto"
                                h="full"
                                alignItems="center"
                                justifyContent="center"
                                flexDirection="column">
                                <Box>
                                    <Heading textAlign="center">
                                        Welcome Back
                                    </Heading>
                                    <Text textAlign="center">
                                        <Highlight
                                            query={["Our App’s"]}
                                            styles={{ fontWeight: 600 }}>
                                            Simplify your work flow and boost
                                            your productivity with Our App’s Get
                                            start for free.
                                        </Highlight>
                                    </Text>
                                </Box>
                                <Box mt={20} w="full">
                                    <Input
                                        type="email"
                                        placeholder="Email/Username"
                                        rounded="full"
                                        border="2px"
                                        borderColor="gray.800"
                                        px={7}
                                        h="55px"
                                        my={3}
                                    />

                                    <Input
                                        type="password"
                                        placeholder="Password"
                                        rounded="full"
                                        border="2px"
                                        borderColor="gray.800"
                                        px={7}
                                        h="55px"
                                        my={3}
                                    />

                                    <Link
                                        href="/auth/forgot-password"
                                        fontWeight={600}
                                        textAlign="end"
                                        mr={0}
                                        display="block">
                                        Forgot Password?
                                    </Link>

                                    <Button
                                        mt={8}
                                        w="full"
                                        bg="primary"
                                        rounded="full"
                                        color="white"
                                        p={8}
                                        _hover={{ bg: "green.300" }}>
                                        Login
                                    </Button>
                                </Box>

                                <Box position="relative" w="full" mt={16}>
                                    <Divider borderColor="gray.800" />
                                    <AbsoluteCenter bg="white" px="4">
                                        or continue with
                                    </AbsoluteCenter>
                                </Box>
                                <Box
                                    w="full"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    gap={5}
                                    mt={8}>
                                    <IconButton
                                        icon={<BsGoogle size="25px" />}
                                        variant="solid"
                                        colorScheme="blackAlpha"
                                        rounded="full"
                                        size="lg"
                                    />
                                    <IconButton
                                        icon={<FaYahoo size="25px" />}
                                        variant="solid"
                                        colorScheme="blackAlpha"
                                        rounded="full"
                                        size="lg"
                                    />
                                    <IconButton
                                        icon={<BsApple size="25px" />}
                                        variant="solid"
                                        colorScheme="blackAlpha"
                                        rounded="full"
                                        size="lg"
                                    />
                                </Box>
                                <Box w='full' display='flex' alignItems='center' justifyContent='center' gap={2} mt={5}>
                                    <Text>Not a member?</Text>
                                    <Link href="/auth/register" fontWeight={600} color="green.400">Register now</Link>
                                </Box>
                            </Flex>
                        </GridItem>
                    </Grid>
                </Container>
            </Center>
        </Box>
    );
}
