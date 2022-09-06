import { Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import UserAuth from "./UserAuth";

const Header = () => {
  return (
    <Flex
      w="full"
      h="10vh"
      alignItems={"center"}
      justifyContent="space-between"
      px="2em"
      borderBottom="1px solid #e2e8f0"
    >
      <Text fontWeight={"semibold"} fontSize="1.1em" cursor={"pointer"}>
        Streamy
      </Text>
      <HStack gap="1em" alignItems={"center"}>
        <Text fontWeight={"semibold"} fontSize="1.1em" cursor={"pointer"}>
          All Streams
        </Text>
        <UserAuth />
      </HStack>
    </Flex>
  );
};

export default Header;
