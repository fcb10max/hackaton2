import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import { ReactComponent as LightDarkThemeIcon } from "../assets/icons/lightDarkTheme.svg";

export interface ISidebarItem {
    id: number,
    text: string,
    submenus?: ISidebarItem[],
    icon?: React.FC
}

const sidebarItems: ISidebarItem[] = [
    {
        id: 1,
        text: "Menu1",
        icon: MenuIcon,
    },
    {
        id: 2,
        text: "Menu2",
        icon: MenuIcon,
        submenus: [
            {
                id: 1,
                text: "submenu1",
                icon: LightDarkThemeIcon,
            },
            {
                id: 2,
                text: "submenu2",
                icon: MenuIcon,
            },
            {
                id: 3,
                text: "submenu3",
            },
            {
                id: 4,
                text: "submenu4",
                icon: LightDarkThemeIcon,
            },
            {
                id: 5,
                text: "submenu5",
            },
            {
                id: 6,
                text: "submenu6",
                icon: MenuIcon,
            },
        ]
    },
    {
        id: 3,
        text: "Menu3",
    },
    {
        id: 4,
        text: "Menu4",
        icon: LightDarkThemeIcon,
    },
    {
        id: 5,
        text: "Menu5",
        submenus: [
            {
                id: 1,
                text: "submenu1",
                icon: MenuIcon,
            },
            {
                id: 2,
                text: "submenu2",
                icon: LightDarkThemeIcon,
            },
            {
                id: 3,
                text: "submenu3",
            },
            {
                id: 4,
                text: "submenu4",
                icon: LightDarkThemeIcon,
                submenus: [
                    {
                        id: 1,
                        text: "submenu1",
                        icon: LightDarkThemeIcon,
                    },
                    {
                        id: 2,
                        text: "submenu2",
                        icon: MenuIcon,
                    },
                    {
                        id: 3,
                        text: "submenu3",
                        submenus: [
                            {
                                id: 1,
                                text: "submenu1",
                                icon: MenuIcon,
                            },
                            {
                                id: 2,
                                text: "submenu2",
                                icon: LightDarkThemeIcon,
                                submenus: [
                                    {
                                        id: 1,
                                        text: "submenu1",
                                        icon: MenuIcon,
                                    },
                                    {
                                        id: 2,
                                        text: "submenu2",
                                        icon: LightDarkThemeIcon,
                                    },
                                    {
                                        id: 3,
                                        text: "submenu3",
                                    },
                                    {
                                        id: 4,
                                        text: "submenu4",
                                        icon: MenuIcon,
                                    },
                                    {
                                        id: 5,
                                        text: "submenu5",
                                        submenus: [
                                            {
                                                id: 1,
                                                text: "submenu1",
                                                icon: MenuIcon,
                                            },
                                            {
                                                id: 2,
                                                text: "submenu2",
                                                icon: LightDarkThemeIcon,
                                            },
                                            {
                                                id: 3,
                                                text: "submenu3",
                                            },
                                            {
                                                id: 4,
                                                text: "submenu4",
                                                icon: MenuIcon,
                                                submenus: [
                                                    {
                                                        id: 1,
                                                        text: "submenu1",
                                                        icon: MenuIcon,
                                                    },
                                                    {
                                                        id: 2,
                                                        text: "submenu2",
                                                        icon: LightDarkThemeIcon,
                                                    },
                                                    {
                                                        id: 3,
                                                        text: "submenu3",
                                                    },
                                                    {
                                                        id: 4,
                                                        text: "submenu4",
                                                        icon: MenuIcon,
                                                    },
                                                    {
                                                        id: 5,
                                                        text: "submenu5",
                                                    },
                                                    {
                                                        id: 6,
                                                        text: "submenu6",
                                                        icon: LightDarkThemeIcon,
                                                    },
                                                ]
                                            },
                                            {
                                                id: 5,
                                                text: "submenu5",
                                            },
                                            {
                                                id: 6,
                                                text: "submenu6",
                                                icon: LightDarkThemeIcon,
                                            },
                                        ]
                                    },
                                    {
                                        id: 6,
                                        text: "submenu6",
                                        icon: LightDarkThemeIcon,
                                    },
                                ]
                            },
                            {
                                id: 3,
                                text: "submenu3",
                            },
                            {
                                id: 4,
                                text: "submenu4",
                                icon: MenuIcon,
                            },
                            {
                                id: 5,
                                text: "submenu5",
                            },
                            {
                                id: 6,
                                text: "submenu6",
                                icon: LightDarkThemeIcon,
                            },
                        ]
                    },
                    {
                        id: 4,
                        text: "submenu4",
                        icon: MenuIcon,
                    },
                    {
                        id: 5,
                        text: "submenu5",
                    },
                    {
                        id: 6,
                        text: "submenu6",
                        icon: LightDarkThemeIcon,
                    },
                ]
            },
            {
                id: 5,
                text: "submenu5",
            },
            {
                id: 6,
                text: "submenu6",
                icon: MenuIcon,
            },
        ]
    },
    {
        id: 6,
        text: "Menu6",
        icon: LightDarkThemeIcon,
    },
    // {
    //     id: 7,
    //     text: "Menu7",
    //     icon: MenuIcon,
    // },
    // {
    //     id: 8,
    //     text: "Menu8",
    //     icon: MenuIcon,
    // },
    // {
    //     id: 9,
    //     text: "Menu9",
    //     icon: MenuIcon,
    // },
    // {
    //     id: 10,
    //     text: "Menu10",
    //     icon: MenuIcon,
    // },
    // {
    //     id: 11,
    //     text: "Menu11",
    //     icon: MenuIcon,
    // },
    // {
    //     id: 12,
    //     text: "Menu12",
    //     icon: MenuIcon,
    // },
    // {
    //     id: 13,
    //     text: "Menu13",
    //     icon: MenuIcon,
    // },
    // {
    //     id: 14,
    //     text: "Menu14",
    //     icon: MenuIcon,
    // },
    // {
    //     id: 15,
    //     text: "Menu15",
    //     icon: MenuIcon,
    // },

]

export default sidebarItems;