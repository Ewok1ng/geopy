import clsx from 'clsx';

import { SvgIcon, Text } from '@shared/ui';

import styles from './products-item.module.scss';

interface Props {
	title: string;
	icon: string;
	isExpanded: boolean;
	description?: string;
	result?: string;
	experience?: string;
	onClick: () => void;
}

export const ProductsItem = ({
	title,
	icon,
	isExpanded,
	description,
	experience,
	result,
	onClick
}: Props) => {
	if (isExpanded) {
		return (
			<div className={clsx(styles.product, styles['product--lg'])}>
				<SvgIcon
					className={clsx(styles.product__icon, styles['product__icon--lg'])}
					name={icon}
					width={200}
					height={200}
				/>
				<div>
					<div className={styles.header}>
						<h4
							className={clsx(
								styles.product__title,
								styles['product__title--lg']
							)}
						>
							{title}
						</h4>
						<button className={styles.button} onClick={onClick}>
							<SvgIcon
								className={styles.arrow}
								name="arrow"
								width={30}
								height={30}
							/>
						</button>
					</div>
					<div className={styles.content}>
						{description && <Text className={styles.info}>{description}</Text>}
						{result && (
							<>
								<div className={styles.subtitle}>Результат:</div>
								<Text className={styles.info}>{description}</Text>
							</>
						)}
						{experience && (
							<>
								<div className={styles.subtitle}>Опыт применения:</div>
								<Text className={styles.info}>{description}</Text>
							</>
						)}
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.product} onClick={onClick}>
			<SvgIcon
				className={styles.product__icon}
				name={icon}
				width={120}
				height={120}
			/>
			<div>
				<h4 className={styles.product__title}>{title}</h4>
			</div>
		</div>
	);
};
