import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import paths from '../../../data/paths';

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

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: paths,
		fallback: true
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/pokemon/${context.params?.slug}`
	);
	const pokemon = await res.json();
	return {
		props: { pokemon }
	};
};

type Props = {
	pokemon: Pokemon;
};

export default function OnePokemon({ pokemon }: Props) {
	return (
		<>
			{pokemon ? (
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
							height: {Math.floor(pokemon.height / 12)}&apos;{' '}
							{pokemon.height % 12}
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
			) : null}
		</>
	);
}
