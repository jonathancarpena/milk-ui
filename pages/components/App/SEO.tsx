import React from 'react';
import Head from 'next/head';

type Props = {
	title?: string;
	description?: string;
	keywords?: string[];
};
function SEO({
	title = 'MilkUI - TailwindCSS + React Components',
	description = 'MilkUI is a collection of free Tailwind CSS components that can be used in your next React.js project.',
	keywords = ['TailwindCSS', 'UI', 'React'],
}: Props) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords.toString()} />

			{/* Default */}
			<meta name="author" content="Jonathan Carpena"></meta>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			></meta>
			<meta charSet="UTF-8"></meta>

			{/* Favicon */}
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
}

export default SEO;
