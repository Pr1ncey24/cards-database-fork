import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニャオハ",
		ko: "나오하"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	dexId: [906],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "フワフワの 体毛は 植物に 近い 成分。 こまめに 顔を 洗って 乾燥を 防ぐ。",
		ko: "복슬복슬한 털은 식물에 가까운 성분으로 이루어져 있다. 수시로 세수를 하면서 건조해지는 것을 방지한다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "ひざしをあつめる",
			ko: "햇살모으기"
		},

		effect: {
			ja: "自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			ko: "자신의 덱에서 기본 에너지를 2장까지 선택해서 상대에게 보여주고 패로 가져온다. 그리고 덱을 섞는다."
		}
	}, {
		cost: ["Grass"],

		name: {
			ja: "タネばくだん",
			ko: "씨폭탄"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card