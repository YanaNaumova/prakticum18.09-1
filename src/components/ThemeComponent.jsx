import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function ThemeComponent() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <div
      style={{ backgroundColor: theme ? "white" : "black", height: "100px" }}
    >
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
}
export default ThemeComponent;
