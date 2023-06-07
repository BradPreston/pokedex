import Image from 'next/image';

type Context = {
	query: {
		slug: string;
	};
};

export async function getServerSideProps(context: Context) {
	const { slug } = context.query;
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/pokemon/${slug}`
	);
	const pokemon = await res.json();
	return {
		props: {
			pokemon
		}
	};
}

type Props = {
	pokemon: Pokemon;
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

export default function OnePokemon({ pokemon }: Props) {
	return (
		<>
			<h1 style={{ color: pokemon.color }}>{pokemon.name}</h1>
			<Image
				src={pokemon.sprite}
				height={100}
				width={100}
				alt={`A picture of ${pokemon.name}`}
			/>
			<div style={{ display: 'flex', gap: '20px' }}>
				<p>
					height: {Math.floor(pokemon.height / 12)}&apos; {pokemon.height % 12}
					&quot;
				</p>
				<p>weight: {pokemon.weight} lbs</p>
			</div>
			<p>
				Types:{' '}
				{pokemon.types.map((type: string) => (
					<span style={{ paddingLeft: '20px' }} key={type}>
						{type}
					</span>
				))}
			</p>
			<p>Description: {pokemon.description}</p>
		</>
	);
}
