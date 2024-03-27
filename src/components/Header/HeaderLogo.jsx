import style from './Header.module.scss';
import logo from '/logo.png'

const HeaderLogo = ({mobile, ...props}) => {
	const mod = mobile ? style.header__logo_mobile : '';

	return (
		<a className={`${style.header__logo} ${mod}`} {...props} href='/'>
			<img src={logo} alt="Logo" />
			<span>Subsquid</span>
			<span>Points</span>
		</a>
	);
}
 
export default HeaderLogo;