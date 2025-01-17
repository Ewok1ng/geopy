import React from 'react';

import { Section, SvgIcon, Text } from '@shared/ui';

import styles from './contacts.module.scss';

const contacts = [
	{
		title: 'ИНН',
		value: '1658231619'
	},
	{
		title: 'КПП',
		value: '165801001'
	},
	{
		title: 'ОГРН',
		value: '1211600029090'
	},
	{
		title: 'Индекс',
		value: '420111'
	},
	{
		title: 'Адрес',
		value: 'г. Казань, Московскии р-н, ул Батыршина, д 27, офис 17'
	},
	{
		title: 'ЭДО',
		value: 'Контур Диадок'
	},
	{
		title: 'Телефон',
		value: <a href="tel:+79047653963">+7(904)765-39-63</a>
	},
	{
		title: 'E-mail',
		value: (
			<a
				href="mailto:Ilnurbagmanov@geopy.pro"
				style={{ textDecoration: 'underline' }}
			>
				Ilnurbagmanov@geopy.pro
			</a>
		)
	}
];

export const Contacts = () => {
	return (
		<Section sectionId="contacts" title="Контакты">
			<div className={styles.contacts}>
				<div className={styles.contacts__column}>
					<Text>Общество с ограниченной отвественностью «Геопай»</Text>
					<ul className={styles.contacts__list}>
						{contacts.map((item, index) => (
							<li key={index} className={styles.contacts__item}>
								<Text className={styles.title}>{item.title}:</Text>
								<Text className={styles.value}>{item.value}</Text>
							</li>
						))}
					</ul>
				</div>
				<div className={styles.contacts__column}>
					<SvgIcon className={styles.icon} name="icon" />
					<div className={styles.line}></div>
					<Text>
						Миссия компании - помощь компаниям нефтегазовой отрасли в
						формализации и повышении эффективности бизнес- процессов с
						использованием передовых цифровых технологий.
					</Text>
				</div>
			</div>
		</Section>
	);
};
