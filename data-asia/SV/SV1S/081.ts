import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ウミディグダ",
		ko: "바다그다"
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	dexId: [960],
	hp: 50,
	types: ["Water"],

	description: {
		ja: "２０メートル先の ミガルーサが 放つ 匂いも 嗅ぎとって 砂の中に 身を 隠すのだ。",
		ko: "20m 떨어진 가비루사에게서 나는 냄새도 맡을 수 있어서 모래 속에 몸을 숨긴다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ひねりうち",
			ko: "비틀어치기"
		},

		damage: 10,

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 다음 차례에 이 포켓몬은 기술의 데미지나 효과를 받지 않는다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card