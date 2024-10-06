import React, { FC } from "react";
import { LayoutProps } from "../interfaceTypes";
import { Header } from "./Header";
import { Box, Container } from "@mui/material";
import { motion } from "framer-motion";

export const Layout: FC<LayoutProps> = ({ children }) => (
  <div>
    <Header />

    <Container sx={{ maxWidth: "1400px !important", padding: "0 !important" }}>
      <Box p={{ xs: 1, md: 2 }}>
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            origin: 1,
            type: "spring",
            stiffness: 50,
          }}
        >
          {children}
        </motion.div>
      </Box>
    </Container>
  </div>
);
