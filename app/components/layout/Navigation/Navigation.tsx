import { FC } from 'react';

import Logo from './Logo';
import MenuContainer from './MenuContainer/MenuContainer';
import styles from './Navigation.module.scss';

interface IProps {}

const Navigation: FC<IProps> = () => {
	return (
		<div className={styles.navigation}>
			<Logo />
			<MenuContainer />
		</div>
	);
};

export default Navigation;
