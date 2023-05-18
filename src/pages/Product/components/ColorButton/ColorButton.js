import "./ColorButton.scss"

const Colorbutton = (props) => {
    return(
        <button className={`colorButton ${props.color}`} onClick={() => {
            props.setColor(props.color)
        }} />
    )
}

export default Colorbutton;