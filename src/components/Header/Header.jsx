import { useEffect, useState } from 'react';
import scrollLock from 'scroll-lock';
import {useOutsideClick} from '../../hooks/useOutsideClick';

import style from './Header.module.scss';
import twitter from '/social/twitter.svg'
import discord from '/social/discord.svg'
import telegram from '/social/telegram.svg'
import menu from '/icons/icon-menu.svg'
import close from '/icons/icon-close.svg'

import HeaderLogo from './HeaderLogo';

const Header = () => {
	const [open, setOpen] = useState(false);
	const openedClass = open ? style.opened : '';

	const menuRef = useOutsideClick(() => setOpen(false));

	useEffect(() => {
		open ? scrollLock.disablePageScroll() : scrollLock.enablePageScroll();
	}, [open]);


	return (
		<div ref={menuRef} className={`${style.header} container`}>
			<HeaderLogo/>
			<div className={`${style.header__menu} ${openedClass}`}>
				<button className={style.header__close} onClick={() => setOpen(false)}>
					<img src={close} alt="Menu close" />
				</button>
				<HeaderLogo mobile />
				<div className={style.header__social}>
					<a href="/"><img src={twitter} alt="Social twitter"/><span>Twitter</span></a>
					<a href="/"><img src={discord} alt="Social discord"/><span>Discord</span></a>
					<a href="/"><img src={telegram} alt="Social telegram"/><span>Telegram</span></a>
				</div>
				<a href="/" className={style.header__button}>Launch app</a>
			</div>
			<button className={style.header__open} onClick={() => setOpen(true)}>
				<img src={menu} alt="Menu open"/>
			</button>
		</div>
	);
}
 
export default Header;