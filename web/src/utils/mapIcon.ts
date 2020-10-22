import Leaflet from 'leaflet'
import Markerimg from '../images/markermap.svg'


const mapIcon = Leaflet.icon({
    iconUrl: Markerimg,
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
  
  })


  export default mapIcon;