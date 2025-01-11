import {
    Box,
    Button,
    Container,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    IconButton,
    Input,
    Link,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { MdMenu } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";

export default function Homepage() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const menus = [
        {
            id: "",
            title: "Home",
            icon: null,
            route: "/home",
        },

        {
            id: "",
            title: "About",
            icon: null,
            route: "/about",
        },

        {
            id: "",
            title: "Skills",
            icon: null,
            route: "/skills",
        },

        {
            id: "",
            title: "Projects",
            icon: null,
            route: "/projects",
        },

        {
            id: "",
            title: "My Blog",
            icon: null,
            route: "/my-blog",
        },
    ];

    return (
        <>
            <Box w="full" h="auto" bg="white" p={5}>
                <Container maxW="8xl" centerContent>
                    <Flex
                        w="full"
                        alignItems="center"
                        justifyContent="space-between">
                        <Box flexGrow={1}>
                            <Text fontWeight="bold" fontSize="2xl">
                                PORTOFOLIO
                            </Text>
                        </Box>
                        <Box flexGrow={1}>
                            <Flex
                                w="full"
                                alignItems="center"
                                justifyContent="end"
                                gap={5}>
                                {menus.map((menu) => {
                                    return (
                                        <Link
                                            as={RouterLink}
                                            to={menu.route}
                                            fontWeight={500}
                                            color="gray.500"
                                            fontSize="lg"
                                            display={{
                                                base: "none",
                                                md: "flex",
                                            }}
                                            transition="all 0.35s ease-in-out"
                                            _hover={{
                                                color: "black",
                                                textDecoration: "none",
                                            }}>
                                            {menu.title}
                                        </Link>
                                    );
                                })}

                                <IconButton
                                    icon={<MdMenu size="23px" />}
                                    size="lg"
                                    variant="ghost"
                                    display={{ base: "flex", md: "none" }}
                                    onClick={onOpen}
                                />
                            </Flex>
                        </Box>
                    </Flex>
                </Container>
            </Box>

            <Box w="full" h="auto">
                <Container maxW="8xl" centerContent>
                    <Flex
                        w="full"
                        alignItems="center"
                        justifyContent="space-between">
                        <Box flexGrow={1}>
                            <Text fontWeight="bold" fontSize="2xl">
                                I'm Naufal Ilham
                            </Text>
                        </Box>
                        <Box flexGrow={1}></Box>
                    </Flex>
                </Container>
            </Box>

            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>PORTOFOLIO</DrawerHeader>

                    <DrawerBody>
                        <Flex
                            w="full"
                            h="full"
                            alignItems="start"
                            justifyContent="start"
                            flexDirection="column"
                            gap={5}>
                            {menus.map((menu) => {
                                return (
                                    <Link
                                        as={RouterLink}
                                        to={menu.route}
                                        fontWeight={500}
                                        color="gray.500"
                                        fontSize="lg"
                                        transition="all 0.35s ease-in-out"
                                        _hover={{
                                            color: "black",
                                            textDecoration: "none",
                                        }}>
                                        {menu.title}
                                    </Link>
                                );
                            })}
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}
