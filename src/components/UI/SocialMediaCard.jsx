import "./ui.css";

export function SocialMediaCard({ image, mediaName, followers, imageAlt, url }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-card"
        >
            <div className="media-card-container">
                <div className="media-icon">
                    <img src={image} alt={imageAlt} />
                </div>
                <div className="media-name">{mediaName}</div>
                {followers && <div className="followers">{followers}</div>}
            </div>
        </a>
    );
}
