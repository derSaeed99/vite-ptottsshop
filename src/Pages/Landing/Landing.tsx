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
        transform: "translateY(0%)",
    },
    slideTwo: {
        backgroundColor: "#d3a075",
        transform: "translateY(-100%)",
    },
    slideThree: {
        backgroundColor: "#f0d1d1",
        transform: "translateY(-200%)",
    },
    slideFour: {
        backgroundColor: "#f0d1d4",
        transform: "translateY(-300%)",
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
}

export const Landing = () => {
    const classes = useStyles();
    const [currentSlide, setCurrentSlide] = useState(0);
    // Creates a reference to our div element
    const slideRef = useRef<HTMLDivElement>();
    console.log("CurrentSlideRef", slideRef.current, "CurrentSlide", currentSlide)

    const slides: SlideProps[] = [
        {
            id: 1,
            title: "Simply Chocolate",
            description:
                "Discover the finest chocolates and chocolate gifts, including chocolate bars, truffles, and more.",
        },
        {
            id: 2,
            title: "Premium Quality",
            description:
                "We use only the finest ingredients and traditional techniques to create our exceptional chocolates.",
        },
        {
            id: 3,
            title: "Indulge Yourself",
            description:
                "Treat yourself to a delicious and luxurious chocolate experience that you won't forget.",
        },
        {
            id: 4,
            title: "Cum on your Face",
            description: " Not dsahkdahfhdsakghkalhdfklghks hfhdsakghkalhdfklgh hfhdsakghkalhdfklgh"
        }
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
        window.addEventListener("wheel", handleScroll, { passive: true });
    }, [currentSlide]);

    const getSlideClassName = (slideId: number) => {
        if (slideId === currentSlide) {
            return classes.slideOne;
        } else if (slideId === currentSlide + 1) {
            return classes.slideTwo;
        } else if (slideId === currentSlide + 2) {
            return classes.slideThree;
        } else if (slideId === currentSlide + 3) {
            return classes.slideFour;
        } else {
            return classes.image;
        }
    };
    return (
        <Grid container className={classes.container}>
            {slides.map((slide) => (
                <Box
                    key={slide.id}
                    ref={slideRef}
                    className={`${classes.slide} ${getSlideClassName(slide.id)}`}
                >
                    <Grid item xs={12} sm={12} sx={{
                        height: "100%",
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
