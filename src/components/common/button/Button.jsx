import './Button.css'

const Button = ({type, text, name, className}) => {
    return(
        <button type={type} name={name} className={className}>{text}</button>
    )
}

export default Button;