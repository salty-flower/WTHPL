import { Box, Card, CardBody, Stack, Text } from "@chakra-ui/react";
import "./App.css";
import { WTFPLFullNameHeading } from "./components/heading";

function App() {
  return (
    <>
      <Stack spacing={6}>
        <WTFPLFullNameHeading />
        <Box className="license-body-card">
          <Text>DO WHAT THE HECK YOU WANT TO PUBLIC LICENSE</Text>
          <Text>Version 0, July 2023</Text>
          <Text>Copyright (C) 2023 Zhan Jie</Text>
          <Text>
            Everyone is permitted to copy and distribute verbatim or modified
            copies of this license document, and changing it is allowed as long
            as the name is changed.
          </Text>
          <Text>
            DO WHAT THE HECK YOU WANT TO PUBLIC LICENSE <br /> TERMS AND
            CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
          </Text>
          <Text>0. You just DO WHAT THE HECK YOU WANT TO.</Text>
        </Box>
      </Stack>
    </>
  );
}

export default App;
