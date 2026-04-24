import "./ui.css";
import { ModuleCircle } from "./ModuleCircle.jsx";

export function ModuleCard({ moduleName, description, bgColor, url, tag }) {
    const content = (
        <>
            <div className="module-img-name">
                <ModuleCircle bgColor={bgColor} />
                <span className="module-name">{moduleName}</span>
                {tag && <span className="module-tag">{tag}</span>}
            </div>
            <div className="module-description">{description}</div>
        </>
    );

    if (url) {
        return (
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="module-card"
            >
                {content}
            </a>
        );
    }

    return <div className="module-card">{content}</div>;
}
