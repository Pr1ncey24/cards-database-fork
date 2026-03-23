import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ムックル",
		ko: "찌르꼬"
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	dexId: [396],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "虫ポケモンを 狙って 野山を 大勢の 群れで 飛びまわる。 鳴き声が とても やかましい。",
		ko: "벌레포켓몬을 노리고 산과 들을 많은 무리로 날아다닌다. 울음소리가 무척 시끄럽다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "はばたく",
			ko: "홰치기"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,

	thirdParty: {
		cardmarket: 693030
	}
}

export default card