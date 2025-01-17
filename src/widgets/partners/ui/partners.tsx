import React from 'react';

import Marquee from 'react-fast-marquee';

import { Section, SvgIcon } from '@shared/ui';

import styles from './partners.module.scss';

const partners = [
	{
		icon: 'tatneft',
		link: 'https://www.tatneft.ru/',
		width: 255,
		height: 70
	},
	{
		icon: 'gazprom-neft',
		link: 'https://www.gazprom-neft.ru/',
		width: 144,
		height: 70
	},
	{
		icon: 'gazprom-ntc',
		link: 'https://ntc.gazprom-neft.ru/',
		width: 375,
		height: 75
	},
	{
		icon: 'kpfu',
		link: 'https://geo.kpfu.ru/',
		width: 221,
		height: 72
	},
	{
		icon: 'innopolis',
		link: 'https://innopolis.university/',
		width: 300,
		height: 69
	},
	{
		icon: 'ncmu',
		link: 'https://ncmu.kpfu.ru/',
		width: 377,
		height: 64
	},
	{
		icon: 'kmge',
		link: 'https://www.kmge.kz/',
		width: 82,
		height: 102
	},
	{
		icon: 'geoindicator',
		link: 'https://www.geoindicator.com/',
		width: 376,
		height: 71
	}
];

export const Partners = () => {
	return (
		<Section sectionId="partners" title="Партнеры">
			<Marquee>
				<div className={styles.partners}>
					{partners.map((item, index) => (
						<a className={styles.partners__item} key={index} href={item.link}>
							<SvgIcon
								className={styles.partners__icon}
								name={item.icon}
								width={item.width}
								height={item.height}
							/>
						</a>
					))}
				</div>
			</Marquee>
		</Section>
	);
};
