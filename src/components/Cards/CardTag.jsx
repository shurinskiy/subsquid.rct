import style from './Cards.module.scss';

const CardTag = ({url = '/', filled, children}) => {
	const mod = filled ? style.cards__link_filled : '';
	return <a href={url} className={`${style.cards__link} ${mod}`}>{children}</a>;
}
 
export default CardTag;