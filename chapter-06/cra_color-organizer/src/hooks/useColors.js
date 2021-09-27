import { useContext } from "react";
import { ColorContext } from "../components/ColorProvider";

export const useColors = () => useContext(ColorContext);
