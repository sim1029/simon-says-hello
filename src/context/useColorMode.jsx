import React, { useContext } from "react";

const ColorModeContext = React.createContext("light");
export const ColorModeProvider = ColorModeContext.Provider;

export const useColorMode = () => {
	const colorMode = useContext(ColorModeContext);
	return colorMode;
};
