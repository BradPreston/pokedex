import clientPromise from '@/lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getPokemon(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const client = await clientPromise;
		const db = client.db('pokedex');
		const { getOnePokemon } = req.query;
		const pokemon = await db
			.collection('pokemon')
			.findOne({ name: getOnePokemon });
		res.json(pokemon);
	} catch (e) {
		console.error(e);
	}
}
