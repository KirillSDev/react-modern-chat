import { FC } from 'react';
import styles from './DynamicButton.module.scss';
import img from '../../assets/UI/button/dynamic/send-button.png';
export const DynamicButton: FC = () => {
	return (
		<div className={styles.gift}>
			<label className={styles['gift-label']}>
				<input type={'file'} />
				<img src={img} height={40}></img>
			</label>
		</div>
	);
};
