import React from "react";
import { Container } from "@mui/material";
import Header from "../components/Header";

const Home: React.FC = () => {
    return (
        <Container
            maxWidth={"xl"}
            sx={{px: 0}}
        >
            <Header />
        </Container>
    )
}

export default Home;