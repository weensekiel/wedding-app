import "./Header.scss"

export function Header() {
    return (
        <header className="header">
            <ul className="header__nav">
                <li><a href="#home">home</a></li>
                <li><a href="#rsvp">rsvp</a></li>
                <li><a href="#bigDay">the big day</a></li>
                <li><a href="#rsvp">rsvp</a></li>
                <li><a href="#faqs">faqs</a></li>
            </ul>
        </header>
    )
}
