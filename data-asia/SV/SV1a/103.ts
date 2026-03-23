import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ウェーニバルex",
		ko: "웨이니발 ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "エキサイトサンバ",
			ko: "익사이팅삼바"
		},

		damage: 60,

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。その後、相手は相手自身のバトルポケモンをベンチポケモンと入れ替える。",
			ko: "이 포켓몬을 벤치 포켓몬과 교체한다. 그 뒤, 상대는 상대 자신의 배틀 포켓몬을 벤치 포켓몬과 교체한다."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "スクリューシュート",
			ko: "스크루슛"
		},

		damage: 230,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、手札にもどす。",
			ko: "이 포켓몬에게 붙어 있는 에너지를 2개 선택해서 패로 되돌린다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card