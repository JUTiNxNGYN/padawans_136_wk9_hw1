import React from 'react'
import Content from "./Content"

export const Contents = () => {

    const cars = [
        {
            'Year' : '2024',
            'Make' : 'Toyota',
            'Model' : 'Tundra',
            'Trim' : 'TRD Pro',
            'Color' : 'Terra',
            'user_id' : '1'
        },
        {
            'Year' : '2018',
            'Make' : 'Nissan',
            'Model' : 'GTR',
            'Trim' : 'Nismo',
            'Color' : 'Cloud White',
            'user_id' : '2'
        },
        {
            'Year' : '2023',
            'Make' : 'Porsche',
            'Model' : 'Taycan',
            'Trim' : 'GTS Sport Turismo',
            'Color' : 'Chalk',
            'user_id' : '1'        
        }
    ]

    return (
        <>
            {cars.length > 0 ? cars.map((car) => {
                return <Post key={car.id} car={car} />
            }) : <p>No Posts to Display</p>}
        </>
    )
}