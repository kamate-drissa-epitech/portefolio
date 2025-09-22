import './ui.css'
import {NavLink} from "react-router-dom";

export function SocialMediaCard({image, mediaName, followers, imageAlt, url}) {
    return (
        <NavLink to={url} className="social-media-card">
            <div className="media-card-container">
                <img src={image} alt={imageAlt}/>
                <div className="media-name">
                    {mediaName}
                </div>
                <div className="followers">
                    {followers}
                </div>
            </div>

        </NavLink>
    )
}