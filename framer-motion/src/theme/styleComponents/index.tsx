import { Box, styled } from "@mui/material";
import { palette } from "../palette";

const {
  primary: { main: primayMain },
} = palette;

export const Wrapper = styled(Box)(({ theme }) => ({
  border: `1px solid ${primayMain}`,
  padding: 2,
}));
