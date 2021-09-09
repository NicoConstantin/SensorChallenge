import { GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps"

function Map ({ long, lat }) {
    return (
        <GoogleMap defaultZoom={18} defaultCenter={{lat: lat, lng: long}}>
            <Marker key="marker_1" position={{lat: lat, lng: long}} />
        </GoogleMap>
    )
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)