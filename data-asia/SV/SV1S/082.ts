import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ヘイラッシャ",
		ko: "어써러셔"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	dexId: [977],
	hp: 160,
	types: ["Water"],

	description: {
		ja: "大食らいだが エサを 取るのは 苦手。 シャリタツと コンビを 組んで 獲物を 捕らえるのだ。",
		ko: "대식가지만 먹이를 잡는 것이 서툴다. 싸리용과 콤비를 이뤄 먹이를 사냥한다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "いかりちらす",
			ko: "분노흩뜨리기"
		},

		damage: "50×",

		effect: {
			ja: "自分のトラッシュにある「シャリタツ」の枚数×50ダメージ。",
			ko: "자신의 트래쉬에 있는 「싸리용」의 장수 × 50데미지를 준다."
		}
	}, {
		cost: ["Water", "Water", "Colorless", "Colorless"],

		name: {
			ja: "ヘビースプラッシュ",
			ko: "헤비스플래시"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4
}

export default card