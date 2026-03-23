import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "オリーニョ",
		ko: "올리뇨"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	dexId: [929],
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "フレッシュな 香りの 美味しい オイルを 分けてくれる。 古くから 人間と 共存してきた。",
		ko: "신선한 향기가 나는 맛있는 오일을 나눠 준다. 오래전부터 인간과 공존해 왔다."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ビンタ",
			ko: "뺨치기"
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "オイルかけ",
			ko: "오일뿌리기"
		},

		damage: 40,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。",
			ko: "상대의 다음 차례에 이 기술을 받은 포켓몬이 기술을 사용할 때 상대는 동전을 1번 던진다. 뒷면이 나오면 그 기술은 실패한다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card