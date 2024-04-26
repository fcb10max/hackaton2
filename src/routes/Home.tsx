import React from "react";
import { Container, Typography } from "@mui/material";
import Header from "../components/Header";
import ImgSlider from "../components/ImgSlider";
import images from "../config/images.json";
import { FormattedMessage } from "react-intl";

const imgsArr = images.map((image, idx) => ({ id: idx + 1, path: "/imgs/" + image.name, alt: image.name }));

const Home: React.FC = () => {
    return (
        <Container
            maxWidth={"xl"}
            sx={{ px: 0 }}
        >
            <Header />
            <Typography variant="h6" component="h6" color="white">
                <FormattedMessage id="text_1" />
            </Typography>
            <Typography variant="h6" component="h6" color="white">
                <FormattedMessage id="text_2" />
            </Typography>
            <Typography variant="h6" component="h6" color="white">
                <FormattedMessage id="text_3" />
            </Typography>

            <ImgSlider images={imgsArr} />
        </Container>
    )
}

export default Home;