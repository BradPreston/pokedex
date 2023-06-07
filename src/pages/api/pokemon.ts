import clientPromise from '@/lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getPokemon(
	_req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const client = await clientPromise;
		const db = client.db('pokedex');

		const pokemon = await db.collection('pokemon').find({}).toArray();

		res.json(pokemon);
	} catch (e) {
		console.error(e);
	}
}
