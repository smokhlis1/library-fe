import { TextField, Checkbox, FormControlLabel } from '@mui/material';
import { forwardRef } from 'react';

interface InputProps {
  name: string;
  placeholder: string;
  type?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { type, ...rest } = props;

  if (type === 'checkbox') {
    return (
      <FormControlLabel
        control={<Checkbox inputRef={ref} {...rest} />}
        label={props.placeholder}
      />
    );
  }

  return (
    <TextField
      variant="outlined"
      margin="normal"
      inputRef={ref}
      fullWidth
      type={type || 'text'}
      {...rest}
    />
  );
});

export default Input;