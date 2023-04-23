import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Grid, Theme, Typography, IconButton } from "@mui/material";
import bck1 from "../../Assets/bck1.svg";
import bck2 from "../../Assets/bck2.svg";
import bck3 from "../../Assets/bck3.svg";
import bck4 from "../../Assets/bck4.svg";
import Leroy from "../../Assets/leroy-jetson.png";
import KenDog from "../../Assets/ken-dog.png";
import tnt from "../../Assets/tnt.jpg";
import LeroyVid from "../../Assets/ptotts.webm";
import KenDogVideo from "../../Assets/ptotts_1.webm";
import { AvatarSpring } from "../../Components/AvatarSpring";
import { VideoSpring } from "../../Components/VideoCardSpring";
import { ArrowButtonSpring } from "../../Components/ArrowButtonSpring";
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import { SlideProps } from "../../model";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        height: "90vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#253237',
    },
    slide: {
        height: "100%",
        width: "100%",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        left: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        transition: "transform 0.5s ease-out",
    },
    deepContentButton: {
        opacity: "90%",
        borderRadius: "50%",
        width: 80,
        height: 80,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.50)',
        '&:hover': {
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 1)',
        },
    },

}));

export const Landing = () => {
    const classes = useStyles();
    const [slideDeepContent, setSlideDeepContent] = useState<boolean>(false);
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const slideRef = useRef<IParallax>(null!);
    const slides: SlideProps[] = [
        {
            id: 1,
            productImg: Leroy,
            title: "Leroy Jetson",
            description:
                "The Time Chuck made-up a new Jetsons character.",
            backgroundImage: bck1,
            videoUrl: LeroyVid,
        },
        {
            id: 2,
            productImg: KenDog,
            title: "Kenny Dog",
            description:
                "When Kenny was wearing real tight skinny jeans.",
            backgroundImage: bck3,
            videoUrl: KenDogVideo
        },
        {
            id: 3,
            productImg: KenDog,
            title: "Kenny Dog",
            description:
                "When Kenny was wearing real tight skinny jeans.",
            backgroundImage: bck3,
            videoUrl: KenDogVideo
        },
    ];

    const scrollOnClick = (event: React.BaseSyntheticEvent) => {
        currentSlide === (slides.length - 1) ?
            (
                slideRef.current.scrollTo(0),
                setCurrentSlide(0)
            ) : (
                slideRef.current.scrollTo(currentSlide + 1),
                setCurrentSlide(currentSlide + 1)
            )
    }

    const handleScroll = (offset: number) => {
        const delta = Math.sign(offset);
        const isGoingUp = delta < 0;
        const isGoingDown = delta > 0;
        const isNotLastSlide = currentSlide < slides.length - 1;
        const isNotFirstSlide = currentSlide > 0;
        if (isGoingDown && isNotLastSlide) {
            setSlideDeepContent(false)
            setCurrentSlide(currentSlide + 1);
        } else if (isGoingUp && isNotFirstSlide) {
            setSlideDeepContent(false)
            setCurrentSlide(currentSlide - 1);
        }
    };

    useEffect(() => {
        slideRef.current.scrollTo(currentSlide);
    }, [currentSlide]);


    return (
        <>
            <Grid container className={classes.container} spacing={2}>
                <Parallax pages={slides.length} ref={slideRef} onWheelCapture={(event) => {
                    handleScroll(event.deltaY)
                }}>
                    {slides.map((slide) => (
                        <ParallaxLayer
                            offset={slide.id - 1}
                            speed={0.01}
                            key={slide.id}
                            className={classes.slide}
                            style={{ backgroundImage: `url(${slide.backgroundImage})` }}>
                            <ParallaxLayer speed={-0.05} className={classes.slide}
                                onClick={scrollOnClick}  >
                                <Grid item xs={12} sm={12} sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-evenly',
                                    width: "80%"
                                }}>
                                    <Grid item sm={4}>
                                        <AvatarSpring
                                            condition={slideDeepContent}
                                            alt={slide.title}
                                            src={slide.productImg}
                                        />
                                    </Grid>
                                    {slideDeepContent ? (
                                        <Grid item sm={8} >
                                            <VideoSpring
                                                condition={slideDeepContent}
                                                src={slide.videoUrl}
                                                poster={tnt}
                                            />
                                        </Grid>
                                    ) : (
                                        <Grid item sm={4} >
                                            <Typography align="center" variant="h1" color="white">
                                                {slide.title}
                                            </Typography>
                                        </Grid>
                                    )}
                                    <Grid item sm={2}>
                                        <IconButton onClick={(e) => {
                                            e.stopPropagation(),
                                                setSlideDeepContent(!slideDeepContent)
                                        }}>
                                            <ArrowButtonSpring condition={slideDeepContent} />
                                        </IconButton>
                                    </Grid>
                                    <Grid item>
                                        {slideDeepContent &&
                                            (
                                                <>
                                                    <Typography variant="h2" color="white">
                                                        {slide.title}
                                                    </Typography>
                                                    <Typography color="white">
                                                        {slide.description}
                                                    </Typography>
                                                </>
                                            )}
                                    </Grid>
                                </Grid>
                            </ParallaxLayer >
                        </ParallaxLayer >
                    ))}
                </Parallax >
            </Grid >
        </>
    );
};
