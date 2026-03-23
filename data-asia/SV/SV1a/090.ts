import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ルガルガンex",
		ko: "루가루암 ex"
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "いわおとし",
			ko: "돌떨구기"
		},

		damage: 40
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "スケアリーファング",
			ko: "스케어리팽"
		},

		damage: 140,

		effect: {
			ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを10個のせる。",
			ko: "상대의 다음 차례에 이 포켓몬이 기술의 데미지를 받았을 때 기술을 사용한 포켓몬에게 데미지 카운터를 10개 올린다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,

	thirdParty: {
		cardmarket: 701104
	}
}

export default card