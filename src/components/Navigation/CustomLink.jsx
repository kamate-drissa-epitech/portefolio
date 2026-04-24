import { NavLink } from "react-router-dom";

export function CustomLink({ path, name }) {
    return (
        <NavLink
            to={`/${path}`}
            end={path === ""}
            className={({ isActive }) => (isActive ? "active" : "")}
        >
            {name}
        </NavLink>
    );
}
