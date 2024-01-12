import styled, { css } from "../../../node_modules/styled-components";

interface ContainerProps {
  isDisabled: boolean
}
import { Options } from "@/@types/types";
import { StylesConfig } from "react-select";

type CustomStyles = (
  error?: boolean,
  borderNone?: boolean,
) => StylesConfig<Options, false>;

export const customStyles: CustomStyles = (
) => ({
  control: (styles) => ({
    ...styles,
    padding: "3px",
    border:  "none",
    boxShadow: 'none',
    cursor:"pointer"
  }),
  option: (styles, data) => ({
    ...styles,
    padding: 5,
    ":hover": {
      ...styles[":hover"],
      cursor: "pointer",
    },
  }),
  menu: (styles) => ({
    ...styles,
    zIndex: 9999,
  }),
  menuPortal: (base) => ({ ...base, zIndex: 99999 }),
});

export const Container = styled.div<ContainerProps>`
  width: 100%;
  margin-top: 25px;
  border: 1px solid #e4e4e4;
  border-radius: 5px;

  ${props =>
    props.isDisabled &&
    css`
      background-color: #F2F2F2;
    `}
`;

export const Label = styled.label`
    color: #888;
    font-size: 15px;
    position: relative;
    bottom: -6px;
    left: 10px;
    z-index: 99;
`