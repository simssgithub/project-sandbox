import React, {useContext} from "react";
import Pamagat from "../../components/Pamagat";
import Button from "../../components/Button";
import { ThemeContext } from "./context/theme-context";
export default function Blog() {

  const {theme, changeTheme} = useContext(ThemeContext);
  return (
    <div className="container p-1">
      <Pamagat text={`My Blog with ${theme} Theme `} />
      <span style={{ position: "absolute", top: 10, right: 10 }}>
        <Button text={theme === "dark" ? "Light" : "Dark"} 
        btnClass={`${theme === "dark" && "btn-light"} 
        btn-sm`}
        onClick={changeTheme}/>
      </span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eius
        deserunt? Suscipit corporis nobis accusantium amet officiis?
        Perspiciatis iusto corporis dicta sequi assumenda in laboriosam id quod?
        Blanditiis, fugit impedit?
      </p>
    </div>
  );
}
