import styled, { css } from 'styled-components';
import { colors } from './global';

export const Buttons = styled.a`
    height: 48px;
    line-height: 48px;
    padding: 0 64px;
    font-weight: 600;
    border-radius: 100px;
    color: ${colors.black};
    background: ${colors.white};
    cursor: pointer;
    margin: 0 24px;
    font-size: 14px;
    text-decoration: none;
    ${props => props.outline && css`
        background: transparent;
        border: 1px solid ${colors.black};
    `}
    ${props => props.primary && css`
        background: ${colors.primary};
    `}
    ${props => props.secondary && css`
        background: ${colors.secondary};
    `}
`;

export const SearchBar = styled.div`
    height: 48px;
    width: 700px;
    position: relative;
    margin: 0 24px;
    input {
        height: 48px;
        width: 700px;
        padding: 0 64px;
        border-radius: ${props => props.squared ? "0px" : "100px"};
        border: none;
        font-size: 14px;
        outline: none;
        color: ${colors.black};
        &::placeholder {
            color: ${colors.gray};
        }
    }
    img {
        position: absolute;
        top: 50%;
        left: 24px;
        transform: translateY(-50%);
        z-index: 10;
        width: 16px;
        height: 16px;
    }
`;