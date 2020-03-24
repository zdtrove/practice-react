import React from 'react'
import Title from '../../hotel-reservation/components/Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default function Services() {
    const services = [
        {
            icon: <FaCocktail />,
            title: "Service Cocktail",
            info: "Information of service Cocktail"
        },
        {
            icon: <FaHiking />,
            title: "Service Hiking",
            info: "Information of service Hiking"
        },
        {
            icon: <FaShuttleVan />,
            title: "Service ShuttleVan",
            info: "Information of service ShuttleVan"
        },
        {
            icon: <FaBeer />,
            title: "Service Beer",
            info: "Information of service Beer"
        }
    ]
    return (
        <section className="service">
            <Title title="services" />
            <div className="services-center">
                {services.map((service, index) => {
                    return <article key={index} className="service">
                        <span>{service.icon}</span>
                        <h6>{service.title}</h6>
                        <p>{service.info}</p>
                    </article>
                })}
            </div>
        </section>
    )
}
