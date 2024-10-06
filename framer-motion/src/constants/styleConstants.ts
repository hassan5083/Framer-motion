import { palette } from "../theme/palette";

const { black } = palette;

export const menuLinks = {
  display: "flex",
  gap: 2,
  height: "100%",
  alignItems: "center",

  "& a": {
    textDecoration: "none",
    fontSize: "16px",
    paddingX: 1,
    color: black,
    position: "relative",
    transition: "0.3s all ease-in-out",
    display: "flex",
    height: "100%",
    alignItems: "center",

    "&:after": {
      content: "''",
      position: "absolute",
      width: "0%",
      backgroundColor: "red",
      height: "2px",
      bottom: 0,
      left: 0,
      transition: "0.3s all ease-in-out",
    },

    "&:hover": {
      "&:after": {
        width: "100%",
      },
    },
  },

  "& .active": {
    color: "red",
    "&:after": {
      width: "100%",
    },
  },
};
