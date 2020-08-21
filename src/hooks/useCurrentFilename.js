import { useLocation } from "react-router-dom";

export function useCurrentFilename() {
  const location = useLocation();
  return location.pathname.split("/").slice(-1)[0] || "README.md";
}
