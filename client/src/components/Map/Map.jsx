import { GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps"

function Map ({ long, lat }) {
    return (
        <GoogleMap
        defaultZoom={19}
        defaultCenter={{lat: lat, lng: long}}
        />
    )
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)