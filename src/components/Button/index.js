import styled from 'styled-components';
import { darken } from 'polished';

/**
 * Button component
 * @param props.textCol - Color of text in the button (optional)
 * @param props.bgCol - Color of the background in the button (optional)
 */
const Button = styled.a`
    display: inline-block;
    padding: 0.7rem 1.5rem;
    text-decoration: none;
    color: ${props => (props.textCol ? props.textCol : '#f8f8f8')};
    background: ${props => (props.bgCol ? props.bgCol : '#777')};
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    transition: background-color 0.4s;
    &:hover,
    &:focus {
        background: ${props =>
            props.bgCol ? darken(0.1, props.bgCol) : darken(0.1, '#777')};
    }
`;

export default Button;
