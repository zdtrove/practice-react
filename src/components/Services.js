import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'free cocktails',
                info: 'test test test test test test test test test test'
            },
            {
                icon: <FaHiking />,
                title: 'free hiking',
                info: 'test test test test test test test test test test'
            },
            {
                icon: <FaShuttleVan />,
                title: 'free shuttlevan',
                info: 'test test test test test test test test test test'
            },
            {
                icon: <FaBeer />,
                title: 'free beer',
                info: 'test test test test test test test test test test'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services' />
                <div className="services-center">
                    {
                        this.state.services.map((item, index) => {
                            return <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        })
                    }
                </div>
            </section>
        )
    }
}
