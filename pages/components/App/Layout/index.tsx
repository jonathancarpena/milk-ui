import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
type Props = {
	children?: React.ReactNode;
};

function AppLayout({ children }: Props) {
	return (
		<div className=" bg-neutral-50 font-body">
			<Navbar />
			<main className="max-w-5xl mx-auto min-h-[92vh]  px-3">{children}</main>
			<Footer />
		</div>
	);
}

export default AppLayout;
