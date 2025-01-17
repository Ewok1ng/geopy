import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './section.module.scss';

interface Props extends PropsWithChildren {
	title: string;
	sectionId: string;
	className?: string;
}

export const Section = ({ title, sectionId, className, children }: Props) => {
	return (
		<section id={sectionId} className={clsx(styles.section, className)}>
			<div className={styles.container}>
				<div className={styles.section__inner}>
					<div className={styles.section__wrapper}>
						<h3 className={styles.section__title}>{title}</h3>
						<div className={styles.line}></div>
					</div>
					<div className={styles.section__content}>{children}</div>
				</div>
			</div>
		</section>
	);
};
