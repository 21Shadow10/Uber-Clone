import React from 'react'
import tw from "tailwind-styled-components"
import { carList } from '../../data/carList'

const RideSelector = () => {
    return (
        <Wrapper>
            <Title>
                Choose a ride, or swipe up for more
            </Title>

            <CarList>
                { carList.map((car, index) => (
                    <Car key={index}>
                        <CarImage src={car.imgUrl} />
                        <CarDetails>
                            <Service>{car.service}</Service>
                            <Time>5 mins away...</Time>
                        </CarDetails>
                        <Price>₹{250.00*car.multiplier}</Price>
                    </Car>
                )) }
                


            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const CarDetails = tw.div`
flex-1
`

const Service = tw.div`
font-medium
`

const Time = tw.div`
text-xs text-blue-500
`

const Price = tw.div`
text-sm
`

const CarImage = tw.img`
h-14 mr-2
`

const Car = tw.div`
flex p-4 items-center
`

const Title = tw.div`
text-gray text-center text-xs py-2 border-b
`

const CarList = tw.div`
overflow-y-scroll
`

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`

