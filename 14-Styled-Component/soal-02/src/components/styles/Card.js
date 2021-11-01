import Styled from "styled-components";

export const CardContainer = Styled.div`
    border: 1px solid rgba(192, 192, 192, 0.5);
    border-radius: 0.5em;
    width: ${(props) => (props.width ? props.width : "100%")};

    -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);

`;

export const CardImage = Styled.img`
    width: 100%;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;

`;

export const CardBody = Styled.div`
    padding: 1em;
`;

export const CardPrice = Styled.h5`
    font-family: sans-serif;
    font-size: 1.25em;
    font-weight: 600;
    margin: 0;
    margin-bottom: 0.5em;
`;

export const CardProductName = Styled.h6`
    font-family: sans-serif;
    font-size: 1.25em;
    font-weight: 600;
    margin: 0;
    margin-bottom: 0.5em;
    color: gray;
`;
