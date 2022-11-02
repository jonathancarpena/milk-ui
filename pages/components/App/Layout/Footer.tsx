import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

function Footer() {
	return (
		<footer>
			<nav className="border-t-2">
				<div className=" max-w-5xl mx-auto  px-3 py-12 flex flex-col lg:flex-row lg:justify-between lg:items-end">
					<div className="max-w-sm flex flex-col space-y-5 mb-5 lg:mb-0">
						<div className=" font-semibold">
							<span className=" text-2xl font-design mr-1">MilkUI</span>
							<span className="text-xl">🥛</span>
						</div>

						<p className="">
							Free Tailwind CSS components that can be used in your next React
							project.
						</p>

						<Link
							href="https://github.com/jonathancarpena/milk-ui"
							target={'_blank'}
						>
							<FaGithub className="text-2xl" />
						</Link>
					</div>

					<p className="text-stone-500 text-sm">Created by Jonathan Carpena</p>
				</div>
			</nav>
		</footer>
	);
}

export default Footer;
