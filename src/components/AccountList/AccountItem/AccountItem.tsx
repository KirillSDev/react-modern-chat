import { FC } from 'react';
import styles from './AccountItem.module.scss';
import img from '../../../assets/user.png';
import { IAccountItem } from './AccountItem.props';
import { updateFriendInfo } from '../../../store/slices';
import { useSelector, useDispatch } from 'react-redux';
import { IFriends } from '../../../fakedata/listFriends';

export const AccountItem: FC<{ info: IFriends }> = ({ info }) => {
	const dispatch = useDispatch();

	return (
		<div
			className={styles['list-item']}
			onClick={() => {
				dispatch(updateFriendInfo(info));
			}}
		>
			<div className={styles['image-container']}>
				<div className={styles['image-circle-container']}>
					<img
						src={info.image[0]}
						alt='avatar'
						height={50}
						className={styles.image}
					></img>
				</div>
			</div>
			<div className={styles['info-user']}>
				<h5>{info.name}</h5>
				<p>{info.message}</p>
			</div>
		</div>
	);
};
