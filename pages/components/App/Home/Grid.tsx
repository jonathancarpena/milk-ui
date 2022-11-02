import { useState } from 'react';
import { sampleComponents } from '../../../../lib/utils';

type Props = {
	GridItem: { icon: string; name: string; components: number };
};

function GridItem({ icon, name, components }: Props['GridItem']) {
	const [hover, setHover] = useState(false);
	return (
		<li
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			className="select-none cursor-pointer flex flex-col space-y-3 bg-white shadow-md border-1 p-4  hover:-translate-y-4  transition-transform ease-linear duation-150"
		>
			<span className="text-lg">{icon}</span>
			<p className="capitalize text-lg font-semibold">{name}</p>
			<p className="text-sm text-stone-500">{components} Components</p>
		</li>
	);
}

function Grid() {
	return (
		<section className=" pb-32">
			<ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
				{sampleComponents.map((item) => (
					<GridItem
						key={item.name}
						icon={item.icon}
						name={item.name}
						components={item.components}
					/>
				))}
			</ul>
		</section>
	);
}

export default Grid;
