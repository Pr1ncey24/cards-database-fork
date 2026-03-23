import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ラウドボーンex",
		ko: "라우드본 ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 340,
	types: ["Fire"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "かつりょくのうた",
			ko: "활력의노래"
		},

		damage: 50,

		effect: {
			ja: "自分のポケモン全員のHPを、それぞれ「30」回復する。",
			ko: "자신의 포켓몬 전원의 HP를 각각 「30」회복한다."
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			ja: "バーニングボイス",
			ko: "버닝보이스"
		},

		damage: "270－",

		effect: {
			ja: "このポケモンにのっているダメカンの数×10ダメージぶん、このワザのダメージは小さくなる。",
			ko: "이 포켓몬에게 올려져 있는 데미지 카운터의 수 × 10데미지만큼 이 기술의 데미지는 작아진다."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3
}

export default card