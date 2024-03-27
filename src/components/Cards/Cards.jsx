import style from './Cards.module.scss';
import squid from '/icons/icon-squid.png'
import comet from '/icons/icon-comet.png'
import shake from '/icons/icon-shake.png'

import CardTag from './CardTag';
import Card from './Card';

const Cards = () => {
	return (
		<section className={`${style.cards} container`}>
			<Card
				title={<>Fill out this <span>DeForm</span> to get onboarded.</>}
				icon={squid}
			>
				<CardTag url='http://google.com' filled>Click here</CardTag>
				<p>Connect your wallet and provide some basic information</p>
			</Card>

			<Card
				title={<>Collect <span>Squid Wif Hat</span> NFTs by completing quests!</>}
				icon={comet}
			>
				<CardTag filled>Click here</CardTag>
			</Card>

			<Card
				title={<>Complete <span>on-chain actions with Subsquid ecosystem</span> partners.</>}
				icon={shake}
			>
				<CardTag>Register on Farcaster</CardTag>
				<CardTag>Mint $HONEY on Berachain </CardTag>
				<CardTag>Bridge $ETH to Base</CardTag>
				<CardTag>Bridge $ETH to Manta Pacific</CardTag>
				<CardTag>Carry out 3 swaps on ChainFlip</CardTag>
				<CardTag>Hold a Milady on April 15th</CardTag>
			</Card>

		</section>
	);
}
 
export default Cards;