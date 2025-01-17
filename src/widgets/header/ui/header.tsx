import React from 'react';

import { SvgIcon } from '@shared/ui';

import { menu } from '../model';

import styles from './header.module.scss';

export const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.container}>
				<div className={styles.header__inner}>
					<a className={styles.logo} href="/">
						<SvgIcon
							className={styles.logo__icon}
							width={318}
							height={50}
							name="icon"
						/>
					</a>
					<nav className={styles.menu}>
						<ul className={styles.menu__list}>
							{menu.map((item, index) => (
								<li key={index} className={styles.menu__item}>
									<a className={styles.menu__link} href={`#${item.key}`}>
										{item.title}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};
