import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import button from '../../assets/UI/button/button.png';
import blackButton from '../../assets/UI/button/button-black.png';
import pinkButton from '../../assets/UI/button/button-pink-back.png';
import avatarButton from '../../assets/UI/button/button-avatar-blue2.png';

import styles from './Button.module.scss';

interface IButton
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	apperance?: 'common' | 'black' | 'pink' | 'avatar';
}

export const Button = ({ apperance = 'common' }: IButton): JSX.Element => {
	const chooseType = () => {
		switch (apperance) {
			case 'common':
				return (
					<a className={styles.link} href={'#'}>
						<img
							src={button}
							alt='button'
							height={60}
							className={styles.image}
						></img>
					</a>
				);
				break;
			case 'black':
				return (
					<a className={styles.link} href={'#'}>
						<img
							src={blackButton}
							alt='button'
							height={60}
							className={styles.image}
						></img>
					</a>
				);
				break;
			case 'pink':
				return (
					<a className={styles.link} href={'#'}>
						<img
							src={pinkButton}
							alt='button'
							height={60}
							className={styles.image}
						></img>
					</a>
				);
				break;
			case 'avatar':
				return (
					<a className={styles.link} href={'#'}>
						<img
							src={avatarButton}
							alt='button'
							height={60}
							className={styles['avatar-image']}
						></img>
					</a>
				);
				break;
		}
	};

	return <div>{chooseType()}</div>;
};

// return (
// 	<a className={styles.link} href={'#'}>
// 		<img
// 			src={button}
// 			alt='button'
// 			height={50}
// 			className={styles.image}
// 		></img>
// 	</a>
// );
// break;
// default:

// <a className={styles.link} href={'#'}>
// 	<img
// 		src={blackButton}
// 		alt='button'
// 		height={50}
// 		className={styles.image}
// 	></img>
// </a>;
// break;
