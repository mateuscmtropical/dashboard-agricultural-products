import { TextField } from "@mui/material";
import { Field } from "react-final-form";

const Input = ({ name, label }) => {
    const renderInput = (props) => {
        const inputProps = {
            placeholder: label,
            value: props.input.value,
            onBlur: props.input.onBlur,
            onFocus: props.input.onFocus,
            onChange: props.input.onChange,
        }

        return (
            <TextField 
                {...props}
                {...inputProps}
                variant="outlined" 
            />
        )
    }

    return (
        <Field 
            name={name}
            render={props => renderInput(props)}
        />
    )
}

export default Input;