import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ラルトス",
		ko: "랄토스"
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	dexId: [280],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "人の 感情を 頭の 赤い ツノで 敏感に キャッチする 力を 持つ。",
		ko: "사람의 감정을 머리의 빨간 뿔로 민감하게 감지하는 힘을 가졌다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "サイコショット",
			ko: "사이코숏"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,

	thirdParty: {
		cardmarket: 692992
	}
}

export default card