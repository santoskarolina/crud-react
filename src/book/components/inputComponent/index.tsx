import "./style.css";

type Props = {
    register: any,
    name: string,
    errors: any,
    value: string
    onChange: Function,
    placeholder: string,
    nome: string
}

export const InputBoxComponent = (props: Props) => {
    const { register, name, value, errors, placeholder, onChange, nome } = props

    return (
        <div className="box__form__container">

            <input
                placeholder={placeholder}
                type="text"
                value={value}
                {...register(name, {
                    required: {
                        value: true,
                        message: 'Campo obrigátorio'
                    },
                    maxLength: {
                        value: 250,
                        message: `${nome} deve ter entre 5 e 255 caracteres`,
                    },
                    minLength: {
                        value: 5,
                        message: `${nome} deve ter entre 5 e 255 caracteres`,
                    },
                })}
                onChange={onChange}
            />
            {errors[name] && <span className="book__form__error">{errors[name].message}</span>}
        </div>
    )
}

