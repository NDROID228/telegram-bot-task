import Button from "../Button/Button"
import "./Header.css"

export default function Header () {
    return (
        <header>
            <Button>Close</Button>
            <span className="username"></span>
        </header>
    )
}