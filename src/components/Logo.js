import css from '../styles/Logo.module.scss';
import LogoSvg from '../images/logo.svg';

const Logo = props => {
    return (
        <h1 className={css.Logo}>
            <img src={LogoSvg} alt="Todo App logo" />
        </h1>
    )
}

export default Logo;