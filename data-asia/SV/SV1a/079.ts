import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "アチゲータ",
		ko: "악뜨거"
	},

	illustrator: "kantaro",
	category: "Pokemon",
	dexId: [910],
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "炎エネルギーと 有り余る 生命力が 交じり 頭上に タマゴ型の 火玉が 現れた。",
		ko: "불꽃 에너지와 남아도는 생명력이 섞여서 머리 위에 알 모양의 불덩이가 생겨났다."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ひをはく",
			ko: "불토하기"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire"],

		name: {
			ja: "ハイパーボイス",
			ko: "하이퍼보이스"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3
}

export default card