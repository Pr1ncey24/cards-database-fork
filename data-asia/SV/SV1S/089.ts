import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ドドゲザン",
		ko: "대도각참"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	dexId: [983],
	hp: 170,
	types: ["Darkness"],

	description: {
		ja: "ドドゲザンに 進化できるのは 大軍勢の 頂点に 立った １匹の キリキザンだけなのだ。",
		ko: "큰 군세의 정점에 올라선 단 한 마리의 절각참만이 대도각참으로 진화할 수 있다."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "とうそつりょく",
			ko: "통솔력"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分のたねポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。",
			ko: "이 포켓몬이 있는 한, 자신의기본포켓몬이 사용하는 기술이 상대의 배틀 포켓몬에게 주는 데미지는 「+30」이 된다."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "ぶったぎり",
			ko: "반토막내기"
		},

		damage: 160
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card