import { ButtonProps, Menu, MenuItem } from "@mui/material";
import React, { useId } from "react";
import { Link } from "react-router-dom";
import BtnWthLink from "./BtnWthLink";


export interface IDropdownItem {
    title: string,
    id: number,
    children?: IDropdownItem[],
    link?: string,
    onClick?: (title: string) => void
}

interface ICustomDropdownProps extends ButtonProps {
    item: IDropdownItem,
}

interface ICustomMenuProps {
    open: boolean,
    onClose: () => void,
    anchorEl: HTMLElement,
    anchorId: string,
    menuId: string,
    items: IDropdownItem[],
    submenu?: boolean,
}

interface ICustomMenuItemProps {
    item: IDropdownItem,
}

const CustomMenuItem: React.FC<ICustomMenuItemProps> = ({ item }) => {
    const menuId = useId();
    const btnId = useId();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
        if (item.onClick) item.onClick(item.title);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return <>
        <MenuItem
            LinkComponent={item.link ? Link : undefined}
            id={btnId}
            onClick={handleClick}
            aria-haspopup={!!open ? "true" : undefined}
            aria-expanded={!!open ? "true" : undefined}
            aria-controls={!!open ? menuId : undefined}
        >
            {item.title}
        </MenuItem>
        {Array.isArray(item.children) && anchorEl &&
            <CustomMenu
                anchorEl={anchorEl}
                anchorId={btnId}
                items={item.children}
                menuId={menuId}
                onClose={handleClose}
                open={open}
                submenu
            />
        }
    </>
}

const CustomMenu: React.FC<ICustomMenuProps> = ({
    anchorId,
    items,
    menuId,
    onClose,
    open,
    anchorEl,
    submenu = false
}) => {
    return <Menu
        open={open}
        onClose={onClose}
        anchorEl={anchorEl}
        MenuListProps={{ "aria-labelledby": anchorId }}
        id={menuId}
        anchorOrigin={{
            vertical: submenu ? "center" : "bottom",
            horizontal: submenu ? "right" : "left",
        }}
    >
        {items.map(i => <CustomMenuItem item={i} key={i.id} />)}
    </Menu>
}

const CustomDropdown: React.FC<ICustomDropdownProps> = ({ item, ...props }) => {
    const btnId = useId();
    const menuId = useId();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <BtnWthLink
                LinkComponent={item.link ? Link : undefined}
                to={item.link}
                onClick={Array.isArray(item.children) ? handleClick : undefined}
                aria-haspopup={open ? "true" : undefined}
                aria-expanded={open ? "true" : undefined}
                id={btnId}
                aria-controls={open ? menuId : undefined}
                color="primary"
                {...props}
            >
                {item.title}
            </BtnWthLink>
            {Array.isArray(item.children) && anchorEl
                && <CustomMenu
                    anchorEl={anchorEl}
                    anchorId={btnId}
                    items={item.children}
                    menuId={menuId}
                    onClose={handleClose}
                    open={open}
                />}
        </>
    )
}

export default CustomDropdown;