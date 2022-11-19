import { categoryOptions } from "../../../models/category.options";
import "./style.css";

type Props = {
    register: any,
    name: string,
    errors: any,
    value: string
    onChange: any,
}

export const InputSelectBoxComponent = (props: Props) => {
    const { register, name, value, errors, onChange } = props

    return (
        <div className="box__form__container">

            <select 
            value={value}
            {...register(name, {
                required: {
                    value: true,
                    message: 'Campo obrigátorio'
                },
            })}
            onChange={onChange}
            >
                {categoryOptions.map((option) => (
                    <option key={option}  value={option}>{option}</option>
                ))}
            </select>

            {errors[name] && <span className="book__form__error">{errors[name].message}</span>}
        </div>
    )
}

