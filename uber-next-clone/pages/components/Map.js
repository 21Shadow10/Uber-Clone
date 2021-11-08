import {useEffect} from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from'!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiMjFzaGFkb3cxMCIsImEiOiJja3Zuczl1ZTI5dDk2Mm5zNzg3ZzM5YWdqIn0.DVBeamJaU1p6HNAei_vS-A';

const Map = (props) => {


    useEffect(() => {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [72.571365, 23.0222505],
          zoom: 8
        });
        
        if(props.pickupCoordinates)
          addToMap(map,props.pickupCoordinates) ;

        if(props.dropoffCoordinates)
          addToMap(map,props.dropoffCoordinates) ;

        if(props.pickupCoordinates && props.dropoffCoordinates) {
          map.fitBounds([
            props.dropoffCoordinates, props.pickupCoordinates
          ], {
            padding: 60
          })
        }

      },[props.pickupCoordinates, props.dropoffCoordinates]);

    const addToMap = (map,coordinate) => {
      const marker1 = new mapboxgl.Marker()
        .setLngLat(coordinate)
        .addTo(map);
    }


    return (
        <Wrapper id='map'></Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
  h-1/2  flex-1
`