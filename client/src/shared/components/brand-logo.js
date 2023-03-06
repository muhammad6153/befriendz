import { imageURL } from "../helper"

export default function BrandLogo  ({image})  {
    return (
        <div className="brand-logo">
            <img src={imageURL(image ? image : 'logo.png')} alt="Befriendz Logo" />
        </div>
    )
}