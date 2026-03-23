import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "マスカーニャex",
		ko: "마스카나 ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ブーケマジック"
		},

		effect: {
			ja: "自分の番に、自分の手札から「基本エネルギー」を1枚トラッシュするなら、1回使える。相手のベンチポケモン1匹に、ダメカンを3個のせる。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "スクラッチネイル",
			ko: "부케 매직"
		},

		damage: "100＋",

		effect: {
			ja: "相手のバトルポケモンにダメカンがのっているなら、120ダメージ追加。",
			ko: "자신의 차례에 자신의 패에서 「기본(풀)에너지」를 1장 트래쉬한다면 1번 사용할 수 있다. 상대의 벤치 포켓몬 1마리에게 데미지 카운터를 3개 올린다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card