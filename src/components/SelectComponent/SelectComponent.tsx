import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import Select, {
  GroupTypeBase,
  components as customComponents,
} from "react-select";
import { SelectComponentsProps } from "react-select/src/Select";
import { NoticeProps } from "react-select/src/components/Menu";
import { Options } from "@/@types/types";
import { Container, Label, customStyles } from "./styles";

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

  const NoOptionsMessage = (
    props: NoticeProps<
      {
        label: string;
        value: string;
      },
      false,
      GroupTypeBase<{
        label: string;
        value: string;
      }>
    >,
  ) => (
    <customComponents.NoOptionsMessage {...props}>
      Sem opções
    </customComponents.NoOptionsMessage>
  );

  return (
    <Container
      isDisabled={isReadOnly}
    >
      {label && <Label>{label}</Label>}
      <Select
        name={name}
        options={options}
        components={{ NoOptionsMessage, ...components }}
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
