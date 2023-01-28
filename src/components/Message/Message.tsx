import { FC } from 'react';
import img from '../../assets/user.png';
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
						<div className={styles['image-container']}>
							<div className={styles['image-circle-container']}>
								<img
									src={img}
									height={50}
									alt='img'
									className={styles.image}
								></img>
							</div>
						</div>
					</>
				) : (
					<>
						<div className={styles['image-container']}>
							<div className={styles['image-circle-container']}>
								<img
									src={img}
									height={50}
									alt='img'
									className={styles.image}
								></img>
							</div>
						</div>
						<p className={styles['user-message']}>{text}</p>
					</>
				)}
			</div>
		</div>
	);
};
