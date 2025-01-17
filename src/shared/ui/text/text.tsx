import React, { PropsWithChildren } from 'react';

import clsx from 'clsx';

import styles from './text.module.scss';

interface Props extends PropsWithChildren {
	size?: 'sm' | 'md' | 'lg';
	className?: string;
}

export const Text = ({ size = 'md', className, children }: Props) => {
	return (
		<p
			className={clsx(
				styles.text,
				{
					[styles['text--sm']]: size === 'sm',
					[styles['text--md']]: size === 'md',
					[styles['text--lg']]: size === 'lg'
				},
				className
			)}
		>
			{children}
		</p>
	);
};
