import './Input.css'

const Input = ({type, placeholder, name, className, value}) => {
    return(
        <input 
            type={type} 
            placeholder={placeholder}
            name={name}
            className={className}
            value={value} 
            required
            autoComplete="off" />
    )
}

export default Input;