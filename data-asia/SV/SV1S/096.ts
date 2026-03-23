import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "パフュートンex",
		ko: "퍼퓨돈 ex"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 260,
	types: ["Colorless"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "きょうらんのかおり",
			ko: "광란의향기"
		},

		damage: "10＋",

		effect: {
			ja: "相手のベンチポケモンの数×30ダメージ追加。",
			ko: "상대의 벤치 포켓몬의 수 × 30데미지를 추가한다."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ヘビースタンプ",
			ko: "헤비스탬프"
		},

		damage: 210,

		effect: {
			ja: "コインを1回投げウラなら、次の自分の番、このポケモンはワザが使えない。",
			ko: "동전을 1번 던져서 뒷면이 나오면 자신의 다음 차례에 이 포켓몬은 기술을 사용할 수 없다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card