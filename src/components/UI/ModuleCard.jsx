import {ModuleCircle} from "./ModuleCircle.jsx";

export function ModuleCard({moduleName, description, bgColor}) {
    return (
        <div className="module-card">
            <div className="module-img-name">
                <ModuleCircle bgColor={bgColor}  />
                <span className="module-name">{moduleName}</span>
            </div>
            <div className="module-description">
                {description}
            </div>
        </div>
    )
}

