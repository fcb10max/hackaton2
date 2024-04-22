import { Button, ButtonProps } from "@mui/material";
import React from "react";
import { LinkProps } from "react-router-dom";

interface LinkButtonProps extends ButtonProps {
    to?: LinkProps["to"]
}

const BtnWthLink: React.FC<LinkButtonProps> = (props) => {
    return (
        <Button {...props}>
            {props.children}
        </Button>
    )
}

export default BtnWthLink;