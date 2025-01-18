import React from 'react';

import { Section } from '@shared/ui';

import { RegisteryItem } from '../registery-item';

const registery = [
	{
		title: `"Программный комплекс автоматизированного анализа и оптимизации
				разработки нефтегазовых месторождений"`,
		sertificate: 'Свидетельство ЭВМ № 2022619699',
		description: `Реестровая запись в РЕЕСТРЕ ОТЕЧЕСТВЕННОГО ПО №23805 от 29.08.2024,
				произведена на основании поручения Министерства цифрового развития,
				связи и массовых коммуникаций Российской Федерации от 29.08.2024 по
				протоколу заседания экспертного совета от 12.08.2024 №538пр`,
		link: 'https://geopy-product.ru/'
	},
	{
		title: `"Программа обнаружения подвижных остаточных запасов углеводородов
				с помощью нейросетевого анализа"`,
		sertificate: `СВИДЕТЕЛЬСТВО о государственной регистрации программы для ЭВМ №2022619715`
	}
];

export const Registery = () => {
	return (
		<Section
			sectionId="registry"
			title="Реестр отчественного ПО и свидетельства ЭВМ"
		>
			{registery.map((item, index) => (
				<RegisteryItem key={index} {...item} />
			))}
		</Section>
	);
};
