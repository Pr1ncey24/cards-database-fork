import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "リオル",
		ko: "리오르"
	},

	illustrator: "Nelnal",
	category: "Pokemon",
	dexId: [447],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "仲間同士で 波動を 出して コミュニケーションを とっている。 一晩中 走り続けられる。",
		ko: "파동을 내서 동료끼리 의사소통을 한다. 밤새도록 계속 달릴 수 있다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "パンチ",
			ko: "펀치"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "とつげき",
			ko: "돌격"
		},

		damage: 50,

		effect: {
			ja: "このポケモンにも20ダメージ。",
			ko: "이 포켓몬에게도 20데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,

	thirdParty: {
		cardmarket: 693006
	}
}

export default card