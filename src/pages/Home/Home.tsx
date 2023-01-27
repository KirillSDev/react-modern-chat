import { FC } from 'react';
import styles from './Home.module.scss';
import { Menu } from '../../components/Menu/Menu';
import { AccountList } from '../../components/AccountList/AccountList';
import MainField from '../../components/MainField/MainField';

export const Home: FC = (): JSX.Element => {
	return (
		<div className={styles.container}>
			<div className={styles.header}></div>
			<Menu className={styles.menu} />

			<AccountList className={styles['account-list']}></AccountList>
			<MainField className={styles['main-field']} />
		</div>
	);
};
