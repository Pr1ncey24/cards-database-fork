import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "デデンネex",
		ko: "데덴네 ex"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "テールスワップ",
			ko: "테라스탈"
		},

		effect: {
			ja: "自分のベンチポケモンを1匹選び、選んだポケモンにのっているダメカンをすべて、相手のバトルポケモンにのせ替える。",
			ko: "이 포켓몬은 벤치에 있는 한, 기술의 데미지를 받지 않는다."
		}
	}, {
		cost: ["Psychic", "Psychic", "Psychic"],

		name: {
			ja: "ワンダーショット",
			ko: "테일스왑"
		},

		damage: 170,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			ko: "자신의 벤치 포켓몬을 1마리 선택해서 선택한 포켓몬에게 올려져 있는 데미지 카운터를 모두 상대의 배틀 포켓몬에게 올린다."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,

	thirdParty: {
		cardmarket: 701092
	}
}

export default card