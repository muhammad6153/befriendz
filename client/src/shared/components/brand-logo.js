import { Link } from "react-router-dom"
import { imageURL } from "../helper"

export default function BrandLogo  ({image})  {
    return (
        <div className="brand-logo">
            <Link to="/">
                <img src={imageURL(image ? image : 'logo.png')} alt="Befriendz Logo" />
            </Link>
        </div>
    )
}