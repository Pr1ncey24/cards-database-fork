import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "メグロコ",
		ko: "깜눈크"
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	dexId: [551],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "砂の中に 潜り 泳ぐように 移動。 敵に みつからないためと 体温を 下げない 知恵 なのだ。",
		ko: "모래 속에 숨어서 헤엄치는 것처럼 이동한다. 적에게 들키지 않으면서 체온이 내려가지 않기 위한 지혜다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "かじる",
			ko: "갉기"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "ぶつかる",
			ko: "부딪치기"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,

	thirdParty: {
		cardmarket: 693009
	}
}

export default card