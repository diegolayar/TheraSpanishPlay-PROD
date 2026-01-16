import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/navigation-assets/Logo.svg';
import { ReactComponent as BurguerMenu } from '../../assets/navigation-assets/BurgerMenu.svg';
import "./Navigation.css"
import "../../App.css"

const Navigation = (toggleMenu) => {
    return (
        <div id="navbar">
            <Link id="link-logo" to="/"  title="Home">
                <Logo id="logo"/>
            </Link>
           <div id="burger-and-contact">
                <BurguerMenu onClick={toggleMenu.toggleMenu} id="burger-menu"/>
                <a href="mailto:theraspanishplay@gmail.com" class="button gray">
                    <p id="contact-us-text">
                        contact us
                    </p>
                </a>
           </div>
        </div>
    );

}

export default Navigation;