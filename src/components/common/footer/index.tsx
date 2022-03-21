import { Button } from "../button"
import "./style.css"

export function Footer(props: {buttonAction: () => void}) {
    return (
        <footer className="footer">
            <Button label="Carregar mais" action={props.buttonAction}/>
        </footer>
    )
}