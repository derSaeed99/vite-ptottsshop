import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Grid, Theme, Typography } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
    },
    slide: {
        height: "100vh",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "transform 0.5s ease-out",
    },
    slideOne: {
        backgroundColor: "#ffbb6a",
        transform: "translateX(0%)",
    },
    slideTwo: {
        backgroundColor: "#d3a075",
        transform: "translateX(-100%)",
    },
    slideThree: {
        backgroundColor: "#f0d1d1",
        transform: "translateX(-200%)",
    },
    image: {
        width: "100%",
        height: "auto",
        objectFit: "cover",
    },
}));

interface SlideProps {
    title: string;
    description: string;
}

export const Landing = () => {
    const classes = useStyles();
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef<HTMLDivElement>(null);
    console.log(slideRef, currentSlide)
    const slides: SlideProps[] = [
        {
            title: "Simply Chocolate",
            description:
                "Discover the finest chocolates and chocolate gifts, including chocolate bars, truffles, and more.",
        },
        {
            title: "Premium Quality",
            description:
                "We use only the finest ingredients and traditional techniques to create our exceptional chocolates.",
        },
        {
            title: "Indulge Yourself",
            description:
                "Treat yourself to a delicious and luxurious chocolate experience that you won't forget.",
        },
    ];

    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            const delta = Math.sign(event.deltaY);
            if (delta > 0 && currentSlide < slides.length - 1) {
                setCurrentSlide(currentSlide + 1);
            } else if (delta < 0 && currentSlide > 0) {
                setCurrentSlide(currentSlide - 1);
            }
        };
        window.addEventListener("wheel", handleScroll);
        return () => window.removeEventListener("wheel", handleScroll);
    }, [currentSlide, slides.length]);



    return (
        <Box className={classes.container}>
            {slides.map((slide, index) => (
                <Box
                    key={index}
                    className={`${classes.slide}${index === currentSlide
                        ? `${classes[`slide-${index + 1}` as keyof typeof classes]}`
                        : ""
                        }`}
                    ref={slideRef}
                >
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} sm={6}>
                            <Box
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography variant="h1">
                                    {slide.title}
                                </Typography>
                                <Typography>
                                    {slide.description}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            ))}
        </Box>
    );
};
