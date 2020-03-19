import React from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default function Services() {
    const services = [
        {
            icon: <FaCocktail />,
            title: "free cocktails",
            info: "In-Depth React Tutorial: Build a Hotel Reservation Site (with Contentful and Netlify)",
        },
        {
            icon: <FaHiking />,
            title: "endless hiking",
            info: "In-Depth React Tutorial: Build a Hotel Reservation Site (with Contentful and Netlify)",
        },
        {
            icon: <FaShuttleVan />,
            title: "free shuttle",
            info: "In-Depth React Tutorial: Build a Hotel Reservation Site (with Contentful and Netlify)",
        },
        {
            icon: <FaBeer />,
            title: "strongest beer",
            info: "In-Depth React Tutorial: Build a Hotel Reservation Site (with Contentful and Netlify)",
        },
    ]
    return (
        <section className="services">
            <Title title="services" />
            <div className="services-center">
                {services.map((item, index) => {
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
            </div>
        </section>
    )
}
