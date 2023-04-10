import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Grid, Theme, Typography } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        height: "90vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
    },
    slide: {
        height: "90vh",
        width: "100%",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "transform 0.5s ease-out",
    },
    translate1: {
        transform: "translateY(0%)",
    },
    translate2: {
        transform: "translateY(-100%)",
    },
    translate3: {
        transform: "translateY(-200%)",
    },
    translate4: {
        transform: "translateY(-300%)",
    },
    hide: {
        display: "none",
    },
    image: {
        width: "100%",
        height: "auto",
        objectFit: "cover",
    },
}));

interface SlideProps {
    id: number;
    title: string;
    description: string;
    backgroundColor: string;
}

export const Landing = () => {
    const classes = useStyles();
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef<HTMLDivElement>();

    const slides: SlideProps[] = [
        {
            id: 1,
            title: "Simply Chocolate",
            description:
                "Discover the finest chocolates and chocolate gifts, including chocolate bars, truffles, and more.",
            backgroundColor: "#ffbb6a",
        },
        {
            id: 2,
            title: "Premium Quality",
            description:
                "We use only the finest ingredients and traditional techniques to create our exceptional chocolates.",
            backgroundColor: "#d3a075",
        },
        {
            id: 3,
            title: "Indulge Yourself",
            description:
                "Treat yourself to a delicious and luxurious chocolate experience that you won't forget.",
            backgroundColor: "#f0d1d1",
        },
        {
            id: 4,
            title: "Cum on your Face",
            description:
                "Not dsahkdahfhdsakghkalhdfklghks hfhdsakghkalhdfklgh hfhdsakghkalhdfklgh",
            backgroundColor: "#f0d1d4",
        },
    ];

    const handleScroll = (event: WheelEvent) => {
        const delta = Math.sign(event.deltaY);
        const isGoingUp = delta < 0;
        const isGoingDown = delta > 0;
        const isNotLastSlide = currentSlide < slides.length - 1;
        const isNotFirstSlide = currentSlide > 0;
        if (isGoingDown && isNotLastSlide) {
            setCurrentSlide(currentSlide + 1);
        } else if (isGoingUp && isNotFirstSlide) {
            setCurrentSlide(currentSlide - 1);
        }
    };
    useEffect(() => {
        window.addEventListener("wheel", handleScroll);
        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, [currentSlide]);

    const getSlideClassName = (slideId: number) => {
        const delta = slideId - currentSlide;
        if (delta === 0) {
            return `${classes.slide}`;
        } else if (delta > 0 && delta <= 3) {
            return `${classes.slide} ${classes["translate" + delta as keyof typeof classes]}`;
        } else if (delta < 0 && delta >= -3) {
            return `${classes.slide} ${classes["translate" + (-1 * delta) as keyof typeof classes]}`;
        } else {
            return `${classes.slide} ${classes.hide}`;
        }
    };
    console.log(slideRef)
    return (
        <Grid container className={classes.container}>
            {slides.map((slide) => (
                <Box
                    key={slide.id}
                    ref={slideRef}
                    className={getSlideClassName(slide.id)}
                    style={{
                        backgroundColor: slide.backgroundColor,
                        width: "100%"
                    }}
                >
                    <Grid item xs={12} sm={12}
                        sx={{
                            height: "90vh",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Typography variant="h1">
                            {slide.title}
                        </Typography>
                        <Typography>
                            {slide.description}
                        </Typography>
                    </Grid>
                </Box>
            ))}
        </Grid>
    );
};
