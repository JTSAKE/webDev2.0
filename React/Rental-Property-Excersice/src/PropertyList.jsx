import Listing from "./Listing";
import './PropertyList.css'

export default function PropertyListing({properties}) {
    return (
        <div className="PropertyList">
            {properties.map((p) => (
                <Listing key={p.id} {...p}/>
            ))}
        </div>
    );
}