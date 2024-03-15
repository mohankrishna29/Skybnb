import { useState } from 'react'
import SubApp from './App.jsx'
import AppCard from './AppCard.jsx'
import data from "./data.js"

function App(){
    const elements = data.map(e => {
        return <AppCard img={e.coverImg}
        rating={e.stats.rating}
        reviewCount={e.stats.reviewCount}
        location={e.location}
        title={e.title}
        price={e.price}
        spots={e.openSpots} />
    })
    return(
        <>
        <SubApp />
        <section className='cards-list'>
            {elements}
        </section>
        </>
    )
}

export default App
