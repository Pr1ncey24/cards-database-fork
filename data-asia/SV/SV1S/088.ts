import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ガケガニ",
		ko: "절벼게"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	dexId: [950],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "逆さまになって 崖の 上から 獲物を 狙うが 頭に 血が上るので 長くは 待てない。",
		ko: "거꾸로 매달린 채 절벽 위에서 먹이를 노리지만, 머리에 피가 몰리기 때문에 오랫동안은 버틸 수 없다고 한다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "はさむ",
			ko: "찝기"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			ja: "アドレナハンマー",
			ko: "아드레나해머"
		},

		damage: 130,

		effect: {
			ja: "このポケモンをこんらんにする。",
			ko: "이 포켓몬을혼란으로 만든다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card