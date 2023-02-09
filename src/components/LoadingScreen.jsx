import React, { useEffect, useRef, useState } from "react";
import { Heading, Center, VStack, keyframes } from "@chakra-ui/react";
import { IoLogoAppleAr } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Fade from "./Fade";

const colors = [
  {
    id: 0,
    name: "red",
  },
  {
    id: 1,
    name: "blue",
  },
  {
    id: 2,
    name: "yellow",
  },
  { id: 3, name: "green" },
  { id: 4, name: "gray" },
  { id: 5, name: "purple" },
  { id: 6, name: "black" },
  { id: 7, name: "orange" },
];

const LoadingScreen = () => {
  /** State */
  const [showError, setShowError] = useState(false);
  const [color, setColor] = useState(colors[0]);

  /** Hooks */
  const containerref = useRef();

  /** Animation - FRAMER MOTION */
  const animationKeyframes = keyframes`
    0% { transform: rotate(90deg) scale(0.8) }
    33% { transform: rotate(-180deg) scale(1.1) }
    100% { transform: rotate(90deg) scale(0.8) }
  `;

  const animation = `${animationKeyframes} 2s ease-in-out infinite`;

  useEffect(() => {
    if (!showError) setTimeout(() => setShowError(true), 5000);
  }, [showError]);

  const retry = () => setShowError(false);

  const changeColor = () => {
    let number = color.id + 1;

    if (number < colors.length) {
      setColor(colors[number]);
    } else {
      setColor(colors[0]);
    }
  };

  /** Render */
  return (
    <AnimatePresence>
      <Center
        ref={containerref}
        //w="100vw"
        w="50vw"
        //h="100vh"
        //bg="gray.50"
        overflow="hidden"
        py="3rem"
        boxShadow="lg"
        //minH="31rem"
      >
        <VStack spacing={6}>
          <Heading
            as={motion.h1}
            animation={animation}
            size="lg"
            cursor="pointer"
            color="gray.600"
            transition=".15s ease-in-out"
          >
            <Fade delay={0.5} key="icon" duration={0.5}>
              <IoLogoAppleAr color={color.name} />
            </Fade>
          </Heading>

          <AnimatePresence>
            <Fade key="information" delay={0.75} duration={0.65}>
              <Heading size="sm" color={color.name}>
                Cargando...
              </Heading>
            </Fade>
          </AnimatePresence>

          <VStack
            align="center"
            spacing={1}
            pointerEvents={showError ? "all" : "none"}
          >
            <Heading
              fontSize="xs"
              fontWeight="medium"
              color="gray.500"
              opacity={showError ? 1 : 0}
              transform={showError ? "translateY(0px)" : "translateY(20px)"}
              transition=".35s ease-in-out"
            >
              Finalizando la carga... por favor espere
            </Heading>
            <Heading
              opacity={showError ? 1 : 0}
              transform={showError ? "translateY(0px)" : "translateY(20px)"}
              fontSize="xs"
              fontWeight="medium"
              color="twitter.500"
              cursor="pointer"
              _active={{ opacity: 0.8 }}
              onClick={retry}
              transition=".55s ease-in-out"
            >
              {" "}
              Volver a la página principal
            </Heading>

            <Heading
              opacity={showError ? 1 : 0}
              transform={showError ? "translateY(0px)" : "translateY(20px)"}
              fontSize="xs"
              fontWeight="medium"
              color="red.500"
              cursor="pointer"
              _active={{ opacity: 0.8 }}
              onClick={changeColor}
              transition=".55s ease-in-out"
              style={{ marginTop: "30px" }}
            >
              {" "}
              Cambiar color
            </Heading>
          </VStack>
        </VStack>
      </Center>
    </AnimatePresence>
  );
};

export default LoadingScreen;
