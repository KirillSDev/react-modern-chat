import { FC } from 'react';
import img from '../../assets/UI/button/button-avatar.png';
import styles from './Message.module.scss';
import cn from 'classnames';

type TypeMessage = {
	user: 'user' | 'friend';
	text: string;
};
export const Message: FC<TypeMessage> = ({ user, text }) => {
	return (
		<div
			className={cn(styles['user-field'], {
				[styles.user]: user === 'user',
				[styles.friend]: user === 'friend'
			})}
		>
			<div className={styles.container}>
				{user === 'user' ? (
					<>
						<p className={styles['user-message']}>{text}</p>
						<img src={img} height={50} alt='img' className={styles.image}></img>
					</>
				) : (
					<>
						<img src={img} height={50} alt='img' className={styles.image}></img>
						<p className={styles['user-message']}>{text}</p>
					</>
				)}
			</div>
		</div>
	);
};
