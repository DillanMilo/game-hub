import {
  HStack,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="purple"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        borderColor={useColorModeValue("black", "gray.800")}
        bg={useColorModeValue("blue.100", "switcher")}
        borderRadius={"full"}
        _hover={{
          borderColor: useColorModeValue("black", "gray.800"),
        }}
        _focus={{
          borderColor: useColorModeValue("black", "gray.800"),
        }}
      />
      <Text whiteSpace="nowrap" color={useColorModeValue("gray.800", "white")}>
        {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
