import React from 'react';

import clsx from 'clsx';

import { Section } from '@shared/ui';
import { Text } from '@shared/ui';

import styles from './about.module.scss';

const stack = [
	{
		key: 'backend',
		title: 'Backend-разработка',
		tech: ['Python (Django, Flask)', 'C#', '.NET']
	},
	{
		key: 'frontend',
		title: 'Frontend-разработка',
		tech: ['JavaScript (React.js, Node.js)']
	},
	{
		key: 'math',
		title: 'Математическое моделирование и анализ данных',
		tech: ['R', 'MATLAB', 'Python (TensorFlow, PyTorch и Keras)']
	},
	{
		key: 'db',
		title: 'Базы данных',
		tech: ['SQL', 'СУБД - PostgreSQL', 'MongoDB']
	}
];

export const About = () => {
	return (
		<Section className={styles.about} sectionId="about" title="О компании">
			<Text>
				<span className={styles.accent}>
					<b>ООО «Геопай» </b>
				</span>
				специализируется на разработке и внедрении информационных технологий в
				нефтегазовой отрасли. Деятельность компании включает создание
				программного обеспечения для автоматизации производственных процессов,
				анализа данных и управления технологическими циклами. Организация
				разрабатывает решения для мониторинга, моделирования и прогнозирования
				эксплуатации нефтегазовых месторождений, а также системы управления
				инфраструктурой предприятий.
			</Text>
			<Text>
				ООО «Геопай» использует высокоуровневые технологии и популярные языки
				программирования:
			</Text>
			<ul className={styles.about__list}>
				{stack.map(item => (
					<li key={item.key} className={styles.about__item}>
						<span className={clsx(styles.about__title, styles.accent)}>
							{item.title}:
						</span>
						<span className={styles.about__stack}>{item.tech.join(', ')}</span>
					</li>
				))}
			</ul>
			<Text>
				Опыт работы в нефтяной отрасли позволяет компании разрабатывать надежные
				и эффективные программные продукты, которые учитывают специфику и
				уникальные потребности каждого клиента.
			</Text>
		</Section>
	);
};
