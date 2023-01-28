import { FC } from 'react';
import styles from './AccountList.module.scss';
import img from '../../assets/user.png';
import { IAccountList } from './AccountList.props';
import { AccountItem } from './AccountItem/AccountItem';

export const AccountList: FC<IAccountList> = ({ ...props }) => {
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
					<AccountItem name={'Elvira Stray'} message={'Hello'} />
					<AccountItem name={'Elvira Stray'} message={'Male'} />
					<AccountItem name={'Elvira Stray'} message={'Hey'} />
					<AccountItem name={'Elvira Stray'} message={'Hoa are you'} />
					<AccountItem name={'Elvira Stray'} message={'Hello'} />
					<AccountItem name={'Elvira Stray'} message={'Hello'} />
					<AccountItem name={'Elvira Stray'} message={'Hello'} />
				</div>
			</div>
		</div>
	);
};
