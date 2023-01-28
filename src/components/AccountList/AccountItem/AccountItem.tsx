import { FC } from 'react';
import styles from './AccountItem.module.scss';
import img from '../../../assets/user.png';
import { IAccountItem } from './AccountItem.props';

export const AccountItem: FC<IAccountItem> = ({ name, message, image }) => {
	return (
		<div className={styles['list-item']}>
			<div className={styles['image-container']}>
				<div className={styles['image-circle-container']}>
					<img
						src={image}
						alt='avatar'
						height={50}
						className={styles.image}
					></img>
				</div>
			</div>
			<div className={styles['info-user']}>
				<h5>{name}</h5>
				<p>{message}</p>
			</div>
		</div>
	);
};
