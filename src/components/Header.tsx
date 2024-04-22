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
import { FormattedMessage } from "react-intl";
import { LocaleContext, LOCALES } from "./LocalizationProvider";

const Header: React.FC = () => {
    const colorModeContext = useContext(ColorModeContext);
    const localeContext = useContext(LocaleContext);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const recursionFunc = (items: ISidebarItem[]): IDropdownItem[] => items.map(item => ({
        id: item.id,
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
        <Box>
            <Sidebar onClose={() => setDrawerOpen(false)} open={drawerOpen} />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h3" component="h1" color="white">LOGO</Typography>
                    <Typography variant="h6" component="h6" color="white">
                        <FormattedMessage id="text_1" />
                    </Typography>
                    <Typography variant="h6" component="h6" color="white">
                        <FormattedMessage id="text_2" />
                    </Typography>
                    <Typography variant="h6" component="h6" color="white">
                        <FormattedMessage id="text_3" />
                    </Typography>
                    <Box sx={{ ml: "auto" }}>
                        <CustomDropdown item={localeBtnItem} sx={{ color: "white" }} />
                        <IconButton onClick={colorModeContext.toggleColorMode}>
                            <Icon fontSize="large" sx={{ color: "#fff" }}>
                                <ColorModeIcon />
                            </Icon>
                        </IconButton>
                        <IconButton onClick={() => setDrawerOpen(true)}>
                            <Icon fontSize="large" sx={{ color: "#fff" }}>
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
                className={styles.customSwiper}
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