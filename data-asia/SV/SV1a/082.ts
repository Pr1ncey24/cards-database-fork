import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ウェルカモ",
		ko: "아꾸왁"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	dexId: [913],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "ひたすらに 浅瀬を 走り込んで 足腰を 鍛え 仲間同士で 足技の 華麗さを 競いあう。",
		ko: "열심히 얕은 여울을 달리며 하반신을 단련하고, 동료들끼리 발 기술의 화려함을 겨룬다."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "みずでっぽう",
			ko: "물대포"
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "スプラッシュ",
			ko: "스플래시"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card