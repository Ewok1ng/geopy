import React from 'react';

import { Header } from '@widgets/header';
import { Geopy } from '@widgets/geopy';
import { About } from '@widgets/about';
import { Products } from '@widgets/products';
import { Registery } from '@widgets/registery';
import { Partners } from '@widgets/partners';
import { Contacts } from '@widgets/contacts';

import styles from './main.module.scss';

export const Main = () => {
	return (
		<div className={styles.main}>
			<Header />
			<Geopy />
			<About />
			<Products />
			<Registery />
			<Partners />
			<Contacts />
		</div>
	);
};
