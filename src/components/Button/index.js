import styled from 'styled-components';
import { darken } from 'polished';

const Button = styled.a`
    display: inline-block;
    padding: 0.7rem 1.5rem;
    text-decoration: none;
    color: #fff;
    background: #26a69a;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    transition: background-color 0.4s;
    &:hover,
    &:focus {
        background: ${darken(0.2, '#26a69a')};
    }
`;

export default Button;
