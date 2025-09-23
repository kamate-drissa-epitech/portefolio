import {NavLink} from "react-router-dom";

export function CustomLink({path, name}){
    return (
        <div><NavLink style={({ isActive }) => ({
            color: isActive ? "#2563EB" : "",
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: "none",
        })} to={`/${path}`}>{name}</NavLink></div>
    )
}