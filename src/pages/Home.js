import React, { Fragment } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import FeatureRooms from '../components/FeasureRoom'
import {Link} from 'react-router-dom'


export default function Home() {
    return (
    <Fragment>
    <Hero>
        <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299" >
        <Link to='/rooms' className="btn-primary">
            our rooms
        </Link>
        </Banner>
    </Hero>
        <Services />
        <FeatureRooms />

    </Fragment>
    )
}
