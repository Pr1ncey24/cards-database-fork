import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ギャラドスex",
		ko: "갸라도스 ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 300,
	types: ["Water"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			ja: "たきのぼり",
			ko: "테라스탈"
		},

		damage: 100
	}, {
		cost: ["Water", "Water", "Water", "Colorless", "Colorless"],

		name: {
			ja: "タイラントテール",
			ko: "폭포오르기"
		},

		damage: "180＋",

		effect: {
			ja: "相手のバトルポケモンにダメカンがのっているなら、180ダメージ追加。",
			ko: "이 포켓몬은 벤치에 있는 한, 기술의 데미지를 받지 않는다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,

	thirdParty: {
		cardmarket: 692980
	}
}

export default card