import { sampleComponents } from '../../../../lib/utils';

type Props = {
	GridItem: { icon: string; name: string; components: number };
};

function GridItem({ icon, name, components }: Props['GridItem']) {
	return (
		<li className=" relative rounded-3xl select-none cursor-pointer  active:bg-red-500 lg:hover:bg-red-500 transition-all ease-out ">
			<div className="bg-white   active:bg-neutral-100 active:scale-75 lg:active:scale-100 lg:hover:-translate-y-5 lg:hover:translate-x-5 transition-transform ease-out duration-200 p-4 rounded-3xl border-2 ">
				<p className="text-lg mb-2">{icon}</p>
				<p className="capitalize text-lg font-semibold mb-2">{name}</p>
				<p className="text-sm text-stone-500">
					{components} Component{components > 1 ? 's' : ''}
				</p>
			</div>
		</li>
	);
}

function Grid() {
	return (
		<section className=" pb-32">
			<ul className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:grid-cols-4 lg:gap-6 ">
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
