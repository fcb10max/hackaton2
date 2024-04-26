import React, { useCallback, useContext, useMemo, useState } from "react";
import { AppBar, Box, Icon, IconButton, Toolbar, Typography } from "@mui/material";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import { ReactComponent as ColorModeIcon } from "../assets/icons/colorMode.svg";
import Sidebar from "./Sidebar";
import menuItems, { ISidebarItem } from "../config/sidebarItems";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomDropdown, { IDropdownItem } from "./CustomDropdown";
import { ColorModeContext } from "./ThemingProvider";
import styles from "./index.module.css";
import { LocaleContext, LOCALES } from "./LocalizationProvider";

const Header: React.FC = () => {
    const colorModeContext = useContext(ColorModeContext);
    const localeContext = useContext(LocaleContext);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const recursionFunc = (items: ISidebarItem[]): IDropdownItem[] => items.map(item => ({
        id: item.id as number,
        title: item.text,
        children: Array.isArray(item.submenus) ? recursionFunc(item.submenus) : undefined,
    }));
    const changedMenuItems = recursionFunc(menuItems);

    const handleLocaleClick = useCallback((title: string) => {
        const locale = LOCALES.find(i => i.label === title);
        if (!locale) return alert("Locale not found");
        localeContext.setLocale(locale.code);
    }, [localeContext]);

    const localeBtnItem = useMemo<IDropdownItem>(() => ({
        id: 0,
        title: localeContext.locale,
        children: LOCALES.map(
            (locale, idx) => ({
                id: idx,
                title: locale.label,
                onClick: handleLocaleClick
            })
        )
    }),
        [localeContext, handleLocaleClick]
    );

    return (
        <Box sx={{ px: 0 }}>
            <Sidebar onClose={() => setDrawerOpen(false)} open={drawerOpen} />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h3" component="h1" color="white">LOGO</Typography>
                    <Box sx={{ ml: "auto" }}>
                        <Box sx={{ alignItems: "center", display: { xs: "none", sm: "inline-flex" } }}>
                            <CustomDropdown
                                item={localeBtnItem}
                                sx={{ color: "white", height: "fit-content", py: ".5rem" }}
                            />
                            <IconButton onClick={colorModeContext.toggleColorMode}>
                                <Icon fontSize="large" sx={{ color: "#fff" }}>
                                    <ColorModeIcon />
                                </Icon>
                            </IconButton>
                        </Box>
                        <IconButton onClick={() => setDrawerOpen(true)} sx={{display: { xs: "inline-flex", sm: "none" }}}>
                            <Icon sx={{ color: "#fff",  }}>
                                <MenuIcon />
                            </Icon>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Swiper
                spaceBetween={"2rem"}
                slidesPerView={"auto"}
                centerInsufficientSlides
                style={{ margin: ".4rem 0" }}
                tag="nav"
                wrapperTag="ul"
                className={styles.navmenuSwiper}
            >
                {changedMenuItems.map(item =>
                    <SwiperSlide key={item.id} style={{ width: "fit-content" }} tag="li">
                        <CustomDropdown item={item} />
                    </SwiperSlide>
                )}
            </Swiper>
        </Box>
    )
}

export default Header;