import { useState } from "react";
import reactLogo from "./assets/react.svg";
import chakraLogo from "./assets/chakra.png";
import viteLogo from "/vite.svg";
import { Button, chakra, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      h={"90vh"}
      fontSize={{ sm: "md", md: "2xl" }}
    >
      <VStack m={4}>
        <chakra.a href="https://vitejs.dev" target="_blank" p={2}>
          <Image src={viteLogo} w={"4em"} alt="Vite logo" />
        </chakra.a>
        <chakra.a
          href="https://react.dev"
          target="_blank"
          p={2}
          animation={`${spin} infinite 4s linear`}
        >
          <Image src={reactLogo} w={"4em"} alt="React logo" />
        </chakra.a>
        <chakra.a
          href="https://v2.chakra-ui.com/"
          target="_blank"
          animation={`${spin} infinite 4s linear`}
          p={2}
        >
          <Image src={chakraLogo} w={"6em"} alt="chakra logo" />
        </chakra.a>
      </VStack>
      <chakra.h1 m={4}>Vite + React + Chakra UI</chakra.h1>
      <VStack m={4}>
        <Button
          colorScheme="teal"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </Button>
        <Text fontSize={"lg"}>
          Edit <chakra.code>src/App.tsx</chakra.code> and save to test HMR
        </Text>
      </VStack>
      <Text color={"gray.500"} fontSize={"md"}>
        Click on the Vite, React and Chakra UI logos to learn more
      </Text>
    </Flex>
  );
}

export default App;
