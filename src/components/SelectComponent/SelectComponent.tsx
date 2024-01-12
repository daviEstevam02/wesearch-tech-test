import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import Select from "react-select";
import { Options } from "@/@types/types";
import { Container, Label, customStyles } from "./styles";
import { SelectComponentsProps } from "react-select/src/Select";

interface SelectComponentProps extends SelectComponentsProps {
  label?: string;
  helperText?: string;
  name: string;
  isRequired?: boolean;
  isReadOnly?: boolean;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  marginTop?: string;
  hidden?: boolean;
  options: Array<Options>;
  borderNone?: boolean;
}
export function SelectComponent({
  label,
  name,
  options,
  isRequired,
  isReadOnly,
  error,
  helperText,
  marginTop,
  borderNone,
  components,
  hidden,
  ...rest
}: SelectComponentProps) {
  if (hidden) {
    return null;
  }

  return (
    <Container
      isDisabled={isReadOnly}
    >
      {label && <Label>{label}</Label>}
      <Select
        name={name}
        options={options}
        components={{ ...components }}
        menuIsOpen={isReadOnly ? false : undefined}
        isClearable={!isReadOnly}
        isSearchable={!isReadOnly}
        isDisabled={isReadOnly}
        required={isRequired}
        styles={customStyles()}
        {...rest} 
      />
      {helperText && <p>{helperText}</p>}
      <div>
        <>{error}</>
      </div>
    </Container>
  );
}

SelectComponent.defaultProps = {
  label: "",
  helperText: "",
  isRequired: false,
  isReadOnly: false,
  error: "",
  marginTop: "4",
  borderNone: "",
};
