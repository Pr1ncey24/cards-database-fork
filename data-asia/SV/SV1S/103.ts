import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "コライドンex",
		ko: "코라이돈 ex"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 230,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ディノクライ",
			ko: "디노크라이"
		},

		effect: {
			ja: "自分の番に1回使えて、使ったなら、番は終わる。自分のトラッシュから「基本エネルギー」を2枚まで選び、自分のタイプのたねポケモンに好きなようにつける。",
			ko: "자신의 차례에 1번 사용할 수 있으며, 사용하면 차례는 끝난다. 자신의 트래쉬에서 「기본(격투)에너지」를 2장까지 선택해서 자신의(격투)타입의기본포켓몬에게 원하는 대로 붙인다."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "ワイルドインパクト",
			ko: "와일드임팩트"
		},

		damage: 220,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			ko: "자신의 다음 차례에 이 포켓몬은 기술을 사용할 수 없다."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card