import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, IconButtonProps, useColorMode } from "@chakra-ui/react";
import { FC } from "react";

const ColorModeToggle: FC<IconButtonProps> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      position={"fixed"}
      bottom={10}
      right={10}
      rounded={"full"}
      onClick={toggleColorMode}
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      {...props}
    />
  );
};

export default ColorModeToggle;
