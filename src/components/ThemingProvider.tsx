import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import React, { createContext, useState, useMemo } from "react";

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

const ThemingProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [mode, setMode] = useState<"light" | "dark">("light");

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = useMemo(() => createTheme({
        palette: {
            primary: {
                main: "#00c853",
            },
            mode,
        },
    }), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default ThemingProvider;