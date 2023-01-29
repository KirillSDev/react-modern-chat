import { FC } from 'react';
import styles from './Menu.module.scss';
import { IMenu } from './Menu.props';
import image from '../../assets/logo-black.png';
import { Button } from '../Button/Button';

export const Menu: FC<IMenu> = ({ ...props }) => {
	return (
		<div {...props}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<button className={styles['exit-button']}>Exit</button>
				</div>
				<div className={styles.logo}>
					<img
						src={image}
						height='110'
						className={styles['logo-img']}
						alt='logo'
					></img>
				</div>
				<div className={styles.interface}>
					<Button apperance='common'></Button>

					<Button apperance='avatar'></Button>
					<Button apperance='pink'></Button>
				</div>
			</div>
		</div>
	);
};
