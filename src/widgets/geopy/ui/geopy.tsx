import React from 'react';

import styles from './geopy.module.scss';

export const Geopy = () => {
	return (
		<div className={styles.geopy}>
			<div className={styles.container}>
				<div className={styles.geopy__inner}>
					<h1 className={styles.geopy__title}>ООО «Геопай»</h1>
					<p className={styles.geopy__info}>
						Комплексные работы по автоматизации и цифровизации нефтегазовой
						отрасли
					</p>
					<p className={styles.geopy__quote}>
						Вывести нефтегазовую индустрию на максимально эффективный и
						экологичный уровень
					</p>
				</div>
			</div>
		</div>
	);
};
