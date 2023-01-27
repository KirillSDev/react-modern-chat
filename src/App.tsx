import { FC } from 'react';
import { Home } from './pages/Home/Home';
import styles from './App.module.scss';
export const App: FC = (): JSX.Element => {
	return (
		<div className={styles.container}>
			<Home />
		</div>
	);
};
