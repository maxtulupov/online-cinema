import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

import logoImage from '@/assets/images/logo.svg';

import { siteName, titleMerge } from '@/config/seo.config';

import { ISeo } from './meta.interface';
import { onlyText } from './string/clearText';

const Meta: FC<ISeo> = ({ title, description, image, children }) => {
	const { asPath } = useRouter();
	const currntUrl = `${process.env.APP_URL}${asPath}`;

	return (
		<>
			<Head>
				<title itemProp="headline">{titleMerge(title)}</title>
				{description ? (
					<>
						<meta name="description" content={onlyText(description, 152)} />
						<link rel="canonical" href={currntUrl} />
						<meta name="og:locale" content="en" />
						<meta name="og:title" content={titleMerge(title)} />
						<meta name="og:url" content={currntUrl} />
						<meta name="og:image" content={image || logoImage} />
						<meta name="og:site_name" content={siteName} />
						<meta name="og:description" content={onlyText(description, 197)} />
					</>
				) : (
					<meta name="robots" content="noindex, nofollow" />
				)}
			</Head>
			{children}
		</>
	);
};

export default Meta;
