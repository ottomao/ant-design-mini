import { FormItemProps } from '../FormItem/props';
import { InputProps } from '../../Input/props';


export interface FormInputProps extends Omit<InputProps, 'value' | 'defaultValue'>, FormItemProps {
  inputClassName: string;
  inputClassStyle: string;
}

export const FormInputDefaultProps: Partial<FormInputProps> = {
};
