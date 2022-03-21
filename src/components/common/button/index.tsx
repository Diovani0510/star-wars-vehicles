import { ButtonProps } from "types/button"
import "./style.css"


export function Button(props: ButtonProps) {
    return (
        <button className="button" onClick={props.action}>{props.label}</button>
    )
}