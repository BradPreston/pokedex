import Link from 'next/link';

export async function getStaticProps() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pokemon`);
	const data = await res.json();
	return {
		props: {
			data
		}
	};
}

type Props = {
	data: Pokemon[];
};

type Pokemon = {
	_id: string;
	color: string;
	description: string;
	height: number;
	name: string;
	pokedex_number: number;
	shape: string;
	sprite: string;
	types: string[];
	weight: number;
};

export default function Pokemon({ data }: Props) {
	return (
		<>
			<h1>Pokemon</h1>

			<ul>
				{data.map((pkmn: Pokemon) => (
					<li key={pkmn.pokedex_number}>
						<Link href={`/pokemon/${pkmn.name}`}>{pkmn.name}</Link>
					</li>
				))}
			</ul>
		</>
	);
}
