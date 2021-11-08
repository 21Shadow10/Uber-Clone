import React,{ useState } from 'react'
import tw from "tailwind-styled-components"

const RideSelector = () => {

    const [carList, setCarList] = useState([
        {
          imgUrl: 'https://i.ibb.co/cyvcpfF/uberx.png',
          service: 'UberX',
          multiplier: 1,
        },
        {
          imgUrl: 'https://i.ibb.co/YDYMKny/uberxl.png',
          service: 'UberXL',
          multiplier: 1.5,
        },
        {
          imgUrl: 'https://i.ibb.co/Xx4G91m/uberblack.png',
          service: 'Black',
          multiplier: 2,
        },
        {
          imgUrl: 'https://i.ibb.co/cyvcpfF/uberx.png',
          service: 'Comfort',
          multiplier: 1.2,
        },
        {
          imgUrl: ' https://i.ibb.co/1nStPWT/uberblacksuv.png',
          service: 'Black SUV',
          multiplier: 2.8,
        }
      ])

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

