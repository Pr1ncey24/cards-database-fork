import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニャローテ",
		ko: "나로테"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	dexId: [907],
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "長い 体毛の下に 隠した ツタを 器用に 操り 硬い つぼみを 敵に 叩きつける。",
		ko: "긴 털 아래 숨긴 덩굴을 능숙하게 다뤄서 단단한 꽃봉오리로 상대를 가격한다."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "タネばくだん",
			ko: "씨폭탄"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "マジックウィップ",
			ko: "매직휩"
		},

		damage: 50,

		effect: {
			ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			ko: "상대의 배틀 포켓몬을 벤치 포켓몬과 교체한다. (배틀필드로 내보낼 포켓몬은 상대가 선택한다.)"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card