import style from './Partner.module.scss';

import berachain from '../../assets/images/partners/partner-berachain.png'
import coinlist from '../../assets/images/partners/partner-coinlist.png'
import binance from '../../assets/images/partners/partner-binance.png'
import quadro from '../../assets/images/partners/partner-quadro.png'
import manta from '../../assets/images/partners/partner-manta.png'
import monad from '../../assets/images/partners/partner-monad.png'
import okx from '../../assets/images/partners/partner-okx.png'

const Partner = () => {
	return (
		<section className={`${style.partner} container`}>
			<h2 className={style.partner__title}>Campaign Partners</h2>
			<div className={style.partner__items}>
				<a href="/"><img src={monad} alt="Partner monad logo" /></a>
				<a href="/"><img src={berachain} alt="Partner berachain logo" /></a>
				<a href="/"><img src={okx} alt="Partner okx logo" /></a>
				<a href="/"><img src={binance} alt="Partner binance logo" /></a>
				<a href="/"><img src={manta} alt="Partner manta logo" /></a>
				<a href="/"><img src={quadro} alt="Partner quadro logo" /></a>
				<a href="/"><img src={coinlist} alt="Partner coinlist logo" /></a>
			</div>
		</section>
	);
}
 
export default Partner;