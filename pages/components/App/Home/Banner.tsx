import { SiTailwindcss, SiReact } from 'react-icons/si';

function Banner() {
	return (
		<section className="text-center max-w-lg mx-auto flex flex-col    py-32">
			<h1 className="font-semibold text-8xl font-design ">MilkUI</h1>
			<p className=" text-stone-500">
				Free Application UI Tailwind CSS Components
			</p>
			<p className="mt-2 text-sm text-stone-500">
				MilkUI is a collection of free Tailwind CSS components that can be used
				in your next React project. With a range of components, you can build
				with ease.
			</p>

			<p className="text-sm mt-3 flex space-x-1 items-center mx-auto text-stone-500 bg-white p-3 rouned-sm shadow-md">
				<span>Powered by:</span>
				<span className="flex space-x-1 items-center ">
					<span>TailwindCSS</span>
					<SiTailwindcss className="mb-0.5 text-sky-500" />
				</span>
				<span>+</span>
				<span className="flex space-x-1 items-center ">
					<span>React.js</span>
					<SiReact className="mb-0.5 text-sky-500" />
				</span>
			</p>
		</section>
	);
}

export default Banner;
