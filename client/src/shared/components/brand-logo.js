import { imageURL } from "./helper"

export default function BrandLogo  ()  {
    return (
        <div className="brand-logo">
            <img src={imageURL('logo.png')} alt="Befriendz Logo" />
        </div>
    )
}