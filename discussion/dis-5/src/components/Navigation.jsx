import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <h3>Navigation Menu</h3>
      <nav>
        <ul>
          <li>
            <NavLink to={`/`}>Home</NavLink>
          </li>
          <li>
            <NavLink to={`/path1`}>ScreenA</NavLink>
          </li>
          <li>
            <NavLink to={`/path2`}>ScreenB</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
