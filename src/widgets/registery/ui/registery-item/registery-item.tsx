import { Text } from '@shared/ui';

import styles from './registery-item.module.scss';

interface Props {
	title: string;
	sertificate: string;
	description?: string;
	link?: string;
}

export const RegisteryItem = ({
	title,
	sertificate,
	description,
	link
}: Props) => {
	return (
		<div className={styles.item}>
			<Text className={styles.item__title} size="lg">
				{title}
			</Text>
			<Text size="lg">{sertificate}</Text>
			{description && <Text size="lg">{description} </Text>}
			{link && (
				<a className={styles.item__link} href="https://geopy-product.ru/">
					Сайт
				</a>
			)}
		</div>
	);
};
