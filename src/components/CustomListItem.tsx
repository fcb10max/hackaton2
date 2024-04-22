import React, { useState } from "react";
import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    Icon,
    ListItemText,
    Divider,
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails
} from "@mui/material";
import { ISidebarItem } from "../config/sidebarItems";
import { ReactComponent as ArrowDownIcon } from "../assets/icons/arrowDown.svg";

interface ICustomListItemProps {
    item: ISidebarItem,
    divider: boolean,
}

const NonCollapsibleListItem: React.FC<Pick<ICustomListItemProps, "item">> = ({ item }) => {
    return <>
        <ListItemButton>
            <ListItemIcon>
                {item.icon &&
                    <Icon color="primary" fontSize="large"><item.icon /></Icon>
                }
            </ListItemIcon>
            <ListItemText primary={item.text} />
        </ListItemButton>

    </>
}

const CollapsibleListItem: React.FC<Pick<ICustomListItemProps, "item">> = ({ item }) => {
    const [expanded, setExpanded] = useState(false);

    return <Accordion
        onChange={() => setExpanded(p => !p)}
        expanded={expanded}
        sx={{ width: "100%" }}
    >
        <AccordionSummary
            expandIcon={<Icon fontSize="large" color="action"><ArrowDownIcon /></Icon>}
        >
            <ListItemIcon>
                {item.icon &&
                    <Icon color="primary" fontSize="large"><item.icon /></Icon>
                }
            </ListItemIcon>
            <Typography margin={"auto 0"}>{item.text}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {item.submenus?.map(submenu => Array.isArray(submenu.submenus)
                ? <CollapsibleListItem item={submenu} key={submenu.id} />
                : <NonCollapsibleListItem item={submenu} key={submenu.id} />
            )}
        </AccordionDetails>
    </Accordion>
}

const CustomListItem: React.FC<ICustomListItemProps> = ({ divider, item }) => {
    return <>
        <ListItem key={item.id} disablePadding>
            {Array.isArray(item.submenus)
                ? <CollapsibleListItem item={item} />
                : <NonCollapsibleListItem item={item} />
            }
        </ListItem>
        {divider && <Divider />}
    </>
}

export default CustomListItem;