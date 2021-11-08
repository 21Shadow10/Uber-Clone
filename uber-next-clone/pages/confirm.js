import { useEffect, useState } from 'react'
import { useRouter } from 'next/router' 
import tw from "tailwind-styled-components"
import Map from './components/Map' 
import RideSelector from './components/RideSelector'
import Link from 'next/link'

const Confirm = () => {

    const router = useRouter() ;

    const { pickup, dropoff } = router.query ;


    const [ pickupCoordinates, setPickupCoordinates ] = useState()
    const [ dropoffCoordinates, setDropoffCoordinates ] = useState()

    const getPickupCoordinates = (pickup) => {
        
        //fetch
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiMjFzaGFkb3cxMCIsImEiOiJja3Zuczl1ZTI5dDk2Mm5zNzg3ZzM5YWdqIn0.DVBeamJaU1p6HNAei_vS-A",
                limit: 1
            })
        )
          .then(response => response.json())
          .then(data => {
            setPickupCoordinates(data.features[0].center);
          })
    
      }

      const getDropoffCoordinates = (dropoff) => {
        
        //fetch
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiMjFzaGFkb3cxMCIsImEiOiJja3Zuczl1ZTI5dDk2Mm5zNzg3ZzM5YWdqIn0.DVBeamJaU1p6HNAei_vS-A",
                limit: 1
            })
        )
          .then(response => response.json())
          .then(data => {
            setDropoffCoordinates(data.features[0].center);
          })
    
      }

      useEffect(() => {
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
      }, [pickup, dropoff])
    

    return (
        <Wrapper>
            <Map 
            pickupCoordinates={pickupCoordinates}
            dropoffCoordinates={dropoffCoordinates}
            />

            <ButtonContainer>
                <Link href='/search'>
                    <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
                </Link>
            </ButtonContainer>
            
            {/* Ride Container */}
            <RideContainer>
                {/* Ride selector */}
                <RideSelector />
                
                {/* Confirm Button */}
                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm UberX
                    </ConfirmButton>
                </ConfirmButtonContainer>

            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const ButtonContainer = tw.div`
fixed top-0 bg-white bg-opacity-75 rounded-full m-2
`

const BackButton = tw.img``

const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`

const ConfirmButtonContainer = tw.div`
border-t-2
`

const Wrapper = tw.div`
flex h-screen flex-col
`

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`