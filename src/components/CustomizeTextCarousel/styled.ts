import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { Box, Button, Typography } from "@mui/material";

interface Props {
  height?: string;
  width?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  textAlign?: "center" | "left" | "right";
}

export const Wrapper = styled(Box)<Props>((prop) => ({
  position: "relative",
  height: prop.height || "100%",
  width: prop.width || "550px",
  borderRadius: "25px",
  border: "1px solid #000",
  padding: "20px",
  backgroundColor: prop.backgroundColor || "black",
}));

export const Container = styled(Carousel)((prop) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: "10px 20px",
}));

export const TextWrapper = styled(Box)((prop) => ({
  width: "500px",
  height: "500%",
}));

export const Text = styled(Typography)<Props>((prop) => ({
  fontSize: prop.fontSize || "18px",
  textAlign: prop.textAlign || "center",
  paddingTop: "25px",
  color: prop.color || "white",
}));

export const IndicatorWrapper = styled(Box)((prop) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
}));

export const NavWrapper = styled(Box)((prop) => ({}));

export const IconWrapper = styled(Box)((prop) => ({
  display: "flex",
  justifyContent: "center",
  gap: "10px",
}));

export const BottomSection = styled(Box)((prop) => ({
  display: "flex",
  justifyContent: " space-between",
  alignItems: "center",
  marginTop: "20px",
  paddingInline: "20px",
}));

export const ButtonThumb = styled(Box)<{
  right: string;
  backgroundColor?: string;
}>((prop) => ({
  position: "absolute",
  bottom: "15px",
  right: prop.right,
  zIndex: 2,
  backgroundColor: prop.backgroundColor || "white",
  borderRadius: "100px",
  cursor: "pointer",
  height: "35px",
  width: "35px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const IconButton = styled(Box)<{ isSelected: boolean }>((prop) => ({
  background: "none",
  border: "none",
  color: prop.isSelected ? "white" : "grey",
  fontSize: "32px",
  fontWeight: "900",
  cursor: "pointer",
  margin: 0,
  padding: 0,
}));
