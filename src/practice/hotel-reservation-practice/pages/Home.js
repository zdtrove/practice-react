import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRoom from '../components/FeaturedRoom';

export default function Home() {
    return <>
        <Header>
            <Banner title="Home title" subtitle="Home Subtitle">
                <Link to="/rooms" className="btn-primary">our rooms</Link>
            </Banner>
        </Header>
        <Services />
        <FeaturedRoom />
    </>
}
