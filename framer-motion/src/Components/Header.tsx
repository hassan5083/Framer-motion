import { Box, Container } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { MENU_LINKS } from "../constants";
import { menuLinks } from "../constants/styleConstants";
import { motion } from "framer-motion";

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <Box
      boxShadow={1}
      sx={{ backgroundColor: "#FFFDF2" }}
      position="sticky"
      overflow="hidden"
    >
      <Container
        sx={{ maxWidth: "1400px !important", padding: "0 !important" }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          height={70}
          alignItems="center"
          px={{ xs: 1, md: 2 }}
        >
          <Box>Hassan</Box>

          <Box sx={menuLinks}>
            <motion.div
              style={{
                position: "relative",
                display: "flex",
                height: "100%",
                alignItems: "center",
                gap: 10,
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{
                duration: 1,
                origin: 1,
                type: "spring",
                stiffness: 50,
              }}
            >
              {MENU_LINKS.map((currentLink, index) => {
                const { path, title } = currentLink;
                return (
                  <Link
                    key={index}
                    className={`${pathname === path ? "active" : ""}`}
                    to={path}
                  >
                    {title}
                  </Link>
                );
              })}
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
