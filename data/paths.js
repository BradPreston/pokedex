const paths = [
	{
		params: {
			slug: 'bulbasaur'
		}
	},
	{
		params: {
			slug: 'ivysaur'
		}
	},
	{
		params: {
			slug: 'venusaur'
		}
	},
	{
		params: {
			slug: 'charmander'
		}
	},
	{
		params: {
			slug: 'charmeleon'
		}
	},
	{
		params: {
			slug: 'charizard'
		}
	},
	{
		params: {
			slug: 'squirtle'
		}
	},
	{
		params: {
			slug: 'wartortle'
		}
	},
	{
		params: {
			slug: 'blastoise'
		}
	},
	{
		params: {
			slug: 'caterpie'
		}
	},
	{
		params: {
			slug: 'metapod'
		}
	},
	{
		params: {
			slug: 'butterfree'
		}
	},
	{
		params: {
			slug: 'weedle'
		}
	},
	{
		params: {
			slug: 'kakuna'
		}
	},
	{
		params: {
			slug: 'beedrill'
		}
	},
	{
		params: {
			slug: 'pidgey'
		}
	},
	{
		params: {
			slug: 'pidgeotto'
		}
	},
	{
		params: {
			slug: 'pidgeot'
		}
	},
	{
		params: {
			slug: 'rattata'
		}
	},
	{
		params: {
			slug: 'raticate'
		}
	},
	{
		params: {
			slug: 'spearow'
		}
	},
	{
		params: {
			slug: 'fearow'
		}
	},
	{
		params: {
			slug: 'ekans'
		}
	},
	{
		params: {
			slug: 'arbok'
		}
	},
	{
		params: {
			slug: 'pikachu'
		}
	},
	{
		params: {
			slug: 'raichu'
		}
	},
	{
		params: {
			slug: 'sandshrew'
		}
	},
	{
		params: {
			slug: 'sandslash'
		}
	},
	{
		params: {
			slug: 'nidoran-f'
		}
	},
	{
		params: {
			slug: 'nidorina'
		}
	},
	{
		params: {
			slug: 'nidoqueen'
		}
	},
	{
		params: {
			slug: 'nidoran-m'
		}
	},
	{
		params: {
			slug: 'nidorino'
		}
	},
	{
		params: {
			slug: 'nidoking'
		}
	},
	{
		params: {
			slug: 'clefairy'
		}
	},
	{
		params: {
			slug: 'clefable'
		}
	},
	{
		params: {
			slug: 'vulpix'
		}
	},
	{
		params: {
			slug: 'ninetales'
		}
	},
	{
		params: {
			slug: 'jigglypuff'
		}
	},
	{
		params: {
			slug: 'wigglytuff'
		}
	},
	{
		params: {
			slug: 'zubat'
		}
	},
	{
		params: {
			slug: 'golbat'
		}
	},
	{
		params: {
			slug: 'oddish'
		}
	},
	{
		params: {
			slug: 'gloom'
		}
	},
	{
		params: {
			slug: 'vileplume'
		}
	},
	{
		params: {
			slug: 'paras'
		}
	},
	{
		params: {
			slug: 'parasect'
		}
	},
	{
		params: {
			slug: 'venonat'
		}
	},
	{
		params: {
			slug: 'venomoth'
		}
	},
	{
		params: {
			slug: 'diglett'
		}
	},
	{
		params: {
			slug: 'dugtrio'
		}
	},
	{
		params: {
			slug: 'meowth'
		}
	},
	{
		params: {
			slug: 'persian'
		}
	},
	{
		params: {
			slug: 'psyduck'
		}
	},
	{
		params: {
			slug: 'golduck'
		}
	},
	{
		params: {
			slug: 'mankey'
		}
	},
	{
		params: {
			slug: 'primeape'
		}
	},
	{
		params: {
			slug: 'growlithe'
		}
	},
	{
		params: {
			slug: 'arcanine'
		}
	},
	{
		params: {
			slug: 'poliwag'
		}
	},
	{
		params: {
			slug: 'poliwhirl'
		}
	},
	{
		params: {
			slug: 'poliwrath'
		}
	},
	{
		params: {
			slug: 'abra'
		}
	},
	{
		params: {
			slug: 'kadabra'
		}
	},
	{
		params: {
			slug: 'alakazam'
		}
	},
	{
		params: {
			slug: 'machop'
		}
	},
	{
		params: {
			slug: 'machoke'
		}
	},
	{
		params: {
			slug: 'machamp'
		}
	},
	{
		params: {
			slug: 'bellsprout'
		}
	},
	{
		params: {
			slug: 'weepinbell'
		}
	},
	{
		params: {
			slug: 'victreebel'
		}
	},
	{
		params: {
			slug: 'tentacool'
		}
	},
	{
		params: {
			slug: 'tentacruel'
		}
	},
	{
		params: {
			slug: 'geodude'
		}
	},
	{
		params: {
			slug: 'graveler'
		}
	},
	{
		params: {
			slug: 'golem'
		}
	},
	{
		params: {
			slug: 'ponyta'
		}
	},
	{
		params: {
			slug: 'rapidash'
		}
	},
	{
		params: {
			slug: 'slowpoke'
		}
	},
	{
		params: {
			slug: 'slowbro'
		}
	},
	{
		params: {
			slug: 'magnemite'
		}
	},
	{
		params: {
			slug: 'magneton'
		}
	},
	{
		params: {
			slug: 'farfetchd'
		}
	},
	{
		params: {
			slug: 'doduo'
		}
	},
	{
		params: {
			slug: 'dodrio'
		}
	},
	{
		params: {
			slug: 'seel'
		}
	},
	{
		params: {
			slug: 'dewgong'
		}
	},
	{
		params: {
			slug: 'grimer'
		}
	},
	{
		params: {
			slug: 'muk'
		}
	},
	{
		params: {
			slug: 'shellder'
		}
	},
	{
		params: {
			slug: 'cloyster'
		}
	},
	{
		params: {
			slug: 'gastly'
		}
	},
	{
		params: {
			slug: 'haunter'
		}
	},
	{
		params: {
			slug: 'gengar'
		}
	},
	{
		params: {
			slug: 'onix'
		}
	},
	{
		params: {
			slug: 'drowzee'
		}
	},
	{
		params: {
			slug: 'hypno'
		}
	},
	{
		params: {
			slug: 'krabby'
		}
	},
	{
		params: {
			slug: 'kingler'
		}
	},
	{
		params: {
			slug: 'voltorb'
		}
	},
	{
		params: {
			slug: 'electrode'
		}
	},
	{
		params: {
			slug: 'exeggcute'
		}
	},
	{
		params: {
			slug: 'exeggutor'
		}
	},
	{
		params: {
			slug: 'cubone'
		}
	},
	{
		params: {
			slug: 'marowak'
		}
	},
	{
		params: {
			slug: 'hitmonlee'
		}
	},
	{
		params: {
			slug: 'hitmonchan'
		}
	},
	{
		params: {
			slug: 'lickitung'
		}
	},
	{
		params: {
			slug: 'koffing'
		}
	},
	{
		params: {
			slug: 'weezing'
		}
	},
	{
		params: {
			slug: 'rhyhorn'
		}
	},
	{
		params: {
			slug: 'rhydon'
		}
	},
	{
		params: {
			slug: 'chansey'
		}
	},
	{
		params: {
			slug: 'tangela'
		}
	},
	{
		params: {
			slug: 'kangaskhan'
		}
	},
	{
		params: {
			slug: 'horsea'
		}
	},
	{
		params: {
			slug: 'seadra'
		}
	},
	{
		params: {
			slug: 'goldeen'
		}
	},
	{
		params: {
			slug: 'seaking'
		}
	},
	{
		params: {
			slug: 'staryu'
		}
	},
	{
		params: {
			slug: 'starmie'
		}
	},
	{
		params: {
			slug: 'mr-mime'
		}
	},
	{
		params: {
			slug: 'scyther'
		}
	},
	{
		params: {
			slug: 'jynx'
		}
	},
	{
		params: {
			slug: 'electabuzz'
		}
	},
	{
		params: {
			slug: 'magmar'
		}
	},
	{
		params: {
			slug: 'pinsir'
		}
	},
	{
		params: {
			slug: 'tauros'
		}
	},
	{
		params: {
			slug: 'magikarp'
		}
	},
	{
		params: {
			slug: 'gyarados'
		}
	},
	{
		params: {
			slug: 'lapras'
		}
	},
	{
		params: {
			slug: 'ditto'
		}
	},
	{
		params: {
			slug: 'eevee'
		}
	},
	{
		params: {
			slug: 'vaporeon'
		}
	},
	{
		params: {
			slug: 'jolteon'
		}
	},
	{
		params: {
			slug: 'flareon'
		}
	},
	{
		params: {
			slug: 'porygon'
		}
	},
	{
		params: {
			slug: 'omanyte'
		}
	},
	{
		params: {
			slug: 'omastar'
		}
	},
	{
		params: {
			slug: 'kabuto'
		}
	},
	{
		params: {
			slug: 'kabutops'
		}
	},
	{
		params: {
			slug: 'aerodactyl'
		}
	},
	{
		params: {
			slug: 'snorlax'
		}
	},
	{
		params: {
			slug: 'articuno'
		}
	},
	{
		params: {
			slug: 'zapdos'
		}
	},
	{
		params: {
			slug: 'moltres'
		}
	},
	{
		params: {
			slug: 'dratini'
		}
	},
	{
		params: {
			slug: 'dragonair'
		}
	},
	{
		params: {
			slug: 'dragonite'
		}
	},
	{
		params: {
			slug: 'mewtwo'
		}
	},
	{
		params: {
			slug: 'mew'
		}
	}
];

export default paths;
