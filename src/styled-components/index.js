import React, { Component } from 'react';
import './index.css';
import styled from 'styled-components';
import { Buttons, SearchBar } from './styles/elements';
import searchIcon from './svg/search.svg';

const Container = styled.div`
    width: 1280px;
    min-width: 1280px;
    margin: 0 auto;
    .row {
        width: 100%;
        display: flex;
        align-center: center;
    }
`;

const Subhead = styled.h3`
    font-size: 24px;
    font-weight: 600;
    margin: 160px 0 48px;
`;

export default class Main extends Component {
    render() {
        return (
            <Container>
                <Subhead>Buttons</Subhead>
                <div className="row">
                    <Buttons>Playlist</Buttons>
                    <Buttons outline>Playlist</Buttons>
                    <Buttons primary>Playlist</Buttons>
                    <Buttons secondary>Playlist</Buttons>
                </div>
                <Subhead>Search Bar</Subhead>
                <div className="row">
                    <SearchBar squared>
                        <img src={searchIcon} alt="search icon" />
                        <input type="text" placeholder="Search for podcats..." />
                    </SearchBar>
                </div>
            </Container>
        )
    }
}
