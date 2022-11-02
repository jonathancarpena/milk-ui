import { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { sampleComponents } from '../../../../lib/utils';
import Link from 'next/link';

type SampleComponent = { name: string; components: number; icon: string };
type IState = {
	search: string;
	searchResults: SampleComponent[] | [];
};
function Navbar() {
	const [focus, setFocus] = useState(false);
	const [search, setSearch] = useState<IState['search']>('');
	const [searchResults, setSearchResults] = useState<IState['searchResults']>(
		[]
	);

	const onFocus = () => setFocus(true);
	const onBlur = () => setFocus(false);

	useEffect(() => {
		if (focus) {
			if (search) {
				const filteredResults = sampleComponents.filter(({ name }) =>
					name.includes(search)
				);
				setSearchResults(filteredResults);
			} else {
				setSearchResults(sampleComponents);
			}
		}
	}, [focus, search]);
	return (
		<nav className="z-50 border-b-2 sticky top-0 bg-neutral-50">
			<div className=" max-w-5xl mx-auto  p-3 flex justify-between items-center">
				<div className=" font-semibold">
					<span className=" font-design mr-1">MilkUI</span>
					<span className="text-sm">🥛</span>
				</div>

				<div className="flex items-center space-x-3">
					<form className="relative">
						<label htmlFor="search" className="hidden">
							Search
						</label>
						<input
							id="search"
							type="text"
							onFocus={onFocus}
							onBlur={onBlur}
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							placeholder="Search..."
							className="text-sm outline-none border-2 focus:border-sky-500  px-3 py-2 rounded-md font-normal"
						/>

						{focus && (
							<ul
								className="absolute top-full right-0 z-30 p-2 border-2 rounded-lg  bg-neutral-50 mt-2 w-60 max-h-64 overflow-y-auto shadow-md
							"
							>
								{searchResults.length > 0 ? (
									searchResults.map((item) => (
										<li
											key={item.name}
											className="cursor-pointer text-sm capitalize flex justify-between rounded-lg py-2 px-3 hover:bg-neutral-200"
										>
											<span>{item.name}</span>
											<span className="bg-red-500 px-2 rounded-full text-white">
												{item.components}
											</span>
										</li>
									))
								) : (
									<li className=" text-sm capitalize flex justify-between rounded-lg py-2 px-3 hover:bg-neutral-200">
										<p>Nothing To See Here. 😥</p>
									</li>
								)}
							</ul>
						)}
					</form>
					<Link
						href="https://github.com/jonathancarpena/milk-ui"
						target="_blank"
					>
						<FaGithub className="text-xl" />
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
