import { Box, Drawer, List } from "@mui/material";
import React, { useContext } from "react";
import menuItemList from "../config/sidebarItems";
import CustomListItem from "./CustomListItem";
import { LOCALES, LocaleContext } from "./LocalizationProvider";
import { ReactComponent as ColorModeIcon } from "../assets/icons/colorMode.svg";
import { ColorModeContext } from "./ThemingProvider";

interface ISidebarProps {
    open: boolean,
    onClose: () => void,
}

const Sidebar: React.FC<ISidebarProps> = ({ onClose, open }) => {
    const colorModeContext = useContext(ColorModeContext);
    const localeContext = useContext(LocaleContext);

    return (
        <Drawer open={open} onClose={onClose} classes={{ paper: "custom-scrollbar" }} sx={{ overflowX: "hidden" }}>
            <Box sx={{ width: 250 }} role="presentation">
                <List>
                    {menuItemList.map((item) =>
                        <CustomListItem key={item.id} divider item={item} />
                    )}
                    <CustomListItem
                        item={{
                            id: menuItemList.length + 1,
                            text: "Languages",
                            submenus: LOCALES.map((locale, idx) => ({
                                id: idx,
                                text: locale.label,
                                onClick: () => localeContext.setLocale(locale.code)
                            }))
                        }}
                        divider
                    />
                    <CustomListItem
                        item={{
                            id: "colorMode",
                            text: "Toggle theme",
                            onClick: () => colorModeContext.toggleColorMode(),
                            icon: ColorModeIcon
                        }}
                        divider
                    />
                </List>
            </Box>
        </Drawer>
    )
}

export default Sidebar;