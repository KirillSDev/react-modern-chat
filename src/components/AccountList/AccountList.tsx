import { FC } from 'react';
import styles from './AccountList.module.scss';
import img from '../../assets/user.png';
import { IAccountList } from './AccountList.props';
import { AccountItem } from './AccountItem/AccountItem';
import { IFriends, listFriends } from '../../fakedata/listFriends';
export const AccountList: FC<IAccountList> = ({ ...props }): JSX.Element => {
	return (
		<div {...props}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles['header-title']} title={'Michael Browski'}>
						Michael Browski
					</h2>
					<div className={styles['header-img-container']}>
						<img
							className={styles['header-img']}
							src={img}
							alt='avatar'
							height={200}
						></img>
					</div>
				</div>
				<div className={styles['accounts-title']}>
					<h3>List Accounts</h3>
				</div>
				<div className={styles.list}>
					{listFriends.map((el: IFriends) => {
						return (
							<AccountItem
								key={el.name}
								name={el.name}
								message={el.message}
								image={el.image[0]}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
