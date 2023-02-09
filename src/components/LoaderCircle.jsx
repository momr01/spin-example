import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { Box, Grid } from "@chakra-ui/react";
// import { styled } from '@material-ui/core/styles'
// import Typography from '@material-ui/core/Typography'
// import Grid from '@material-ui/core/Grid'
// import Box from '@material-ui/core/Box'

const LoaderCircle = () => {
//   const MainTypography = styled(Typography)({
//     color: "#FFFFFF",
//   });

  const CircleItem = styled(Box)({
    width: 12,
    height: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: "50%",
  });

  const CircleContainer = styled(motion.div)({
    width: 75,
    height: 75,
  });

  const CirclePathContainer = styled(motion.div)({
    width: 75,
    height: 75,
    position: "absolute",
  });

  const circlePathVariants = {
    initial: (i) => ({
      rotate: i,
    }),
    animate: (i) => ({
      rotate: i + 360,
      transition: {
        ease: "linear",
        loop: Infinity,
        duration: 2.1,
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1.5 }}
    >
      <Grid
        //container
        spacing={6}
        alignItems="center"
        justify="center"
        alignContent="center"
      >
        <Grid>
          <CircleContainer animate="animate">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <CirclePathContainer
                initial="initial"
                variants={circlePathVariants}
                custom={i * 40}
              >
                <CircleItem />
              </CirclePathContainer>
            ))}
          </CircleContainer>
        </Grid>
        {/* <Grid > */}
          {/* <MainTypography variant="h5" align="center">
            Loading
          </MainTypography> */}
        {/* </Grid> */}
      </Grid>
    </motion.div>
  );
};

export default LoaderCircle;
