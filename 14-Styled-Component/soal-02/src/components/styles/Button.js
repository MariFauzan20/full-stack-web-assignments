import Styled from "styled-components";

export const StyledButton = Styled.button`
    cursor: pointer;
    padding: 1.5em 0.5em;
    font-family: sans-serif;
    font-size: 1.25em;
    border: 1px solid ${(props) => (props.outline ? "lightblue" : "white")};
    color: ${(props) => (props.outline === false ? "white" : "lightblue")}
    width: ${(props) => (props.fullWidth === null ? "100%" : props.fullWidth)}
    hover: {
        border: ${(props) => (props.outline ? "lightblue" : "cornflowerblue")};
        background-color: ${(props) =>
          props.outline ? "lightblue" : "cornflowerblue"};
        color: white;
    }
`;
