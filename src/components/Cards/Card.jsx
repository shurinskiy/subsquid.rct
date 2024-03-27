import style from './Cards.module.scss';

const Card = ({title, icon, children}) => {
	return (
		<div className={style.cards__item}>
			<div className={style.cards__icon}><img src={icon} alt="" /></div>
			<h2 className={style.cards__subtitle}>{title}</h2>
			<div className={style.cards__links}>
				{children}
			</div>
		</div>
	);
}
 
export default Card;