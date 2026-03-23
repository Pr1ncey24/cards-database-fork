import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "イダイナキバex",
		ko: "위대한엄니 ex"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 250,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "がんばんくずし",
			ko: "암반허물기"
		},

		damage: 40,

		effect: {
			ja: "場に出ているスタジアムをトラッシュする。",
			ko: "필드에 나와 있는 스타디움을 트래쉬한다."
		}
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			ja: "ギガントタスク",
			ko: "기간트터스크"
		},

		damage: 250,

		effect: {
			ja: "このポケモンにも50ダメージ。",
			ko: "이 포켓몬에게도 50데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 4
}

export default card