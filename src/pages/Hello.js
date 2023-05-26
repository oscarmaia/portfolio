import { Link } from "react-router-dom";
import { useThemeUpdate } from "../context/ThemeContext";

export default function Hello(props) {
  const toggle = useThemeUpdate();
  console.log(props);
  return (
    <>
      <button onClick={toggle}>Toggle</button>
      <h1>MUDAR COR DO FUNDO</h1>
      <Link to={'/page2'}>go to page 2</Link>
    </>
  );
}
