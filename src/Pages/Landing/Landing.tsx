import React, { useState, useEffect, useRef } from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import tnt from "../../Assets/tnt.jpg";
import { AvatarSpring } from "../../Components/AvatarSpring";
import { VideoSpring } from "../../Components/VideoCardSpring";
import { ArrowButtonSpring } from "../../Components/ArrowButtonSpring";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { SlideProps } from "../../model";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import KeyboardDoubleArrowUpOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { animated, useSpring, easings } from "@react-spring/web";

export const Landing = () => {
  const [slideDeepContent, setSlideDeepContent] = useState<boolean>(false);
  const [slides, setSlides] = useState<SlideProps[]>([]);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideRef = useRef<IParallax>(null!);

  useEffect(() => {
    const getProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const getProductsArray = querySnapshot.docs.map(
        (doc) => doc.data() as SlideProps
      );
      setSlides(getProductsArray);
      // const storage = await getStorage();
      // const getUrl = await getDownloadURL(ref(storage, 'bck4.svg'))
      // console.log(getUrl)
    };
    getProducts();
  }, []);
  const scrollOnClick = (event: React.BaseSyntheticEvent) => {
    currentSlide === slides.length - 1
      ? (slideRef.current.scrollTo(0),
        setCurrentSlide(0),
        setSlideDeepContent(false))
      : (slideRef.current.scrollTo(currentSlide + 1),
        setCurrentSlide(currentSlide + 1),
        setSlideDeepContent(false));
  };

  const handleScroll = (offset: number) => {
    const delta = Math.sign(offset);
    const isGoingUp = delta < 0;
    const isGoingDown = delta > 0;
    const isNotLastSlide = currentSlide < slides.length - 1;
    const isNotFirstSlide = currentSlide > 0;
    if (isGoingDown && isNotLastSlide) {
      setSlideDeepContent(false);
      setCurrentSlide(currentSlide + 1);
      console.log(currentSlide, slideRef.current.scrollTo(currentSlide + 1));
    } else if (isGoingUp && isNotFirstSlide) {
      setSlideDeepContent(false);
      setCurrentSlide(currentSlide - 1);
      slideRef.current.scrollTo(currentSlide - 1);
    }
  };
  const props = useSpring({
    from: {
      y: "0%",
      opacity: 0.2,
    },
    to: {
      y: "10%",
      opacity: 0.5,
    },
    config: { duration: 2000, easing: easings.easeOutBounce },
    loop: true,
  });
  const DownArrowAnimated = animated(KeyboardArrowDownOutlinedIcon);
  const UpArrowAnimated = animated(KeyboardDoubleArrowUpOutlinedIcon);
  return (
    <>
      <Grid
        container
        sx={{
          height: "90vh",
          overflow: "auto",
          position: "relative",
        }}
        spacing={2}
      >
        {slides.length && (
          <Parallax
            pages={slides.length}
            ref={slideRef}
            style={{ overflow: "hidden" }}
            onWheelCapture={(event) => {
              handleScroll(event.deltaY);
            }}
          >
            {slides?.map((slide) => (
              <ParallaxLayer
                offset={slide.productId - 1}
                speed={0.02}
                key={slide.productId}
                style={{
                  backgroundImage: slide.backgroundImg
                    ? `url(${slide.backgroundImg})`
                    : "",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  top: 0,
                  left: 0,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundAttachment: "fixed",
                  backgroundSize: "cover",
                }}
              >
                <ParallaxLayer
                  style={{
                    width: "100%",
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  speed={0.04}
                  onClick={scrollOnClick}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      width: "80%",
                    }}
                  >
                    <Grid item sm={4}>
                      <AvatarSpring
                        condition={slideDeepContent}
                        alt={slide.title ? slide.title : ""}
                        src={slide.imgUrl ? slide.imgUrl : ""}
                      />
                    </Grid>
                    {slideDeepContent ? (
                      <Grid item sm={8}>
                        <VideoSpring
                          condition={slideDeepContent}
                          src={slide.videoUrl ? slide.videoUrl : ""}
                          poster={tnt}
                        />
                      </Grid>
                    ) : (
                      <Grid
                        item
                        sm={4}
                        sx={{ textShadow: `5px 5px 5px rgba(0, 0, 0, 0.2)` }}
                      >
                        <Typography align="center" variant="h1" color="white">
                          {slide.title}
                        </Typography>
                      </Grid>
                    )}
                    <Grid item sm={2}>
                      <IconButton
                        onClick={(e) => {
                          e.stopPropagation(),
                            setSlideDeepContent(!slideDeepContent);
                        }}
                      >
                        <ArrowButtonSpring condition={slideDeepContent} />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      {slideDeepContent && (
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
                </ParallaxLayer>
                <Grid
                  item
                  md={12}
                  sm={12}
                  onClick={scrollOnClick}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                  }}
                >
                  {slide.productId === slides.length ? (
                    <UpArrowAnimated
                      style={{
                        height: 200,
                        width: 50,
                        color: "white",
                        ...props,
                      }}
                    />
                  ) : (
                    <DownArrowAnimated
                      style={{
                        height: 200,
                        width: 50,
                        color: "white",
                        ...props,
                      }}
                    />
                  )}
                </Grid>
              </ParallaxLayer>
            ))}
          </Parallax>
        )}
      </Grid>
    </>
  );
};
