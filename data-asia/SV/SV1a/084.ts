import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "パルデア ケンタロス",
		ko: "팔데아 켄타로스"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	dexId: [128],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "ぶ厚く 力強い 筋肉と 気性の 荒さが 特徴。 コンバット種と 呼ばれる。",
		ko: "두껍고도 강한 근육과 사나운 성질이 특징이다. 컴뱃종이라고 불린다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "いかりのつの",
			ko: "분노의뿔"
		},

		damage: "20＋",

		effect: {
			ja: "このポケモンにのっているダメカンの数×10ダメージ追加。",
			ko: "이 포켓몬에게 올려져 있는 데미지 카운터의 수 × 10데미지를 추가한다."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "コンバットタックル",
			ko: "컴뱃태클"
		},

		damage: 130,

		effect: {
			ja: "このポケモンにも30ダメージ。",
			ko: "이 포켓몬에게도 30데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card