import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "クワッス",
		ko: "꾸왁스"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	dexId: [912],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "昔 遠い 土地から やって来て 棲みついた。 羽から 分泌する ジェルは 水と 汚れを 弾く。",
		ko: "옛날에 머나먼 땅에서 찾아와 정착했다. 날개에서 분비되는 젤은 물과 먼지를 튕겨 낸다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "ジェルかけ",
			ko: "젤뿌리기"
		},

		damage: 20,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。",
			ko: "상대의 다음 차례에 이 기술을 받은 포켓몬이 기술을 사용할 때 상대는 동전을 1번 던진다. 뒷면이 나오면 그 기술은 실패한다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card