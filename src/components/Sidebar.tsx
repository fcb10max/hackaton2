import { Box, Drawer, List } from "@mui/material";
import React from "react";
import menuItemList from "../config/sidebarItems";
import CustomListItem from "./CustomListItem";

interface ISidebarProps {
    open: boolean,
    onClose: () => void,
}

const Sidebar: React.FC<ISidebarProps> = ({ onClose, open }) => {

    return (
        <Drawer open={open} onClose={onClose} classes={{ paper: "custom-scrollbar" }}>
            <Box sx={{ width: 250 }} role="presentation">
                <List>
                    {menuItemList.map((item, idx) =>
                        <CustomListItem key={item.id} divider={idx + 1 !== menuItemList.length} item={item} />
                    )}
                </List>
            </Box>
        </Drawer>
    )
}

export default Sidebar;