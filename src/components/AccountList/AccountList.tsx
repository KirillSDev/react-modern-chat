import { FC } from 'react';
import styles from './AccountList.module.scss';
import img from '../../assets/UI/button/button-avatar-blue2.png';
import { IAccountList } from './AccountList.props';

export const AccountList: FC<IAccountList> = ({ ...props }) => {
	return (
		<div {...props}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles['header-title']} title={'Michael Browski'}>
						Michael Browski
					</h2>
					<img
						className={styles['header-img']}
						src={img}
						alt='avatar'
						height={200}
					></img>
				</div>
				<div className={styles['accounts-title']}>
					<h3>List Accounts</h3>
				</div>
				<div className={styles.list}>
					<div className={styles['list-item']}>
						<img src={img} alt='avatar' height={50}></img>
						<p>Tae</p>
					</div>
					<div className={styles['list-item']}>
						<img src={img} alt='avatar' height={50}></img>
						<p>Tae</p>
					</div>
					<div className={styles['list-item']}>
						<img src={img} alt='avatar' height={50}></img>
						<p>Tae</p>
					</div>
					<div className={styles['list-item']}>
						<img src={img} alt='avatar' height={50}></img>
						<p>Tae</p>
					</div>
					<div className={styles['list-item']}>
						<img src={img} alt='avatar' height={50}></img>
						<p>Tae</p>
					</div>
					<div className={styles['list-item']}>
						<img src={img} alt='avatar' height={50}></img>
						<p>Tae</p>
					</div>
					<div className={styles['list-item']}>
						<img src={img} alt='avatar' height={50}></img>
						<p>Tae</p>
					</div>
					<div className={styles['list-item']}>
						<img src={img} alt='avatar' height={50}></img>
						<p>Tae</p>
					</div>
					<div className={styles['list-item']}>
						<img src={img} alt='avatar' height={50}></img>
						<p>Tae</p>
					</div>
				</div>
			</div>
		</div>
	);
};
