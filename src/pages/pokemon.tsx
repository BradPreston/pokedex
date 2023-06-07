export async function getServerSideProps() {
	const res = await fetch('http://localhost:3000/api/pokemon');
	const data = await res.json();
	return {
		props: {
			data
		}
	};
}

export default function Pokemon(data: any[]) {
	console.log(data);
	return <h1>Pokemon</h1>;
}
