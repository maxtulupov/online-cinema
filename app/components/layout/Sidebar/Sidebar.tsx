import { FC } from 'react';

import Search from './Search/Search';
import styles from './Sidebar.module.scss';

interface IProps {}

const Sidebar: FC<IProps> = () => {
	return (
		<div className={styles.sidebar}>
			<Search />
		</div>
	);
};

export default Sidebar;
