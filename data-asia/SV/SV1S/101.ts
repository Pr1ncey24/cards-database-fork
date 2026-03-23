import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "サーナイトex",
		ko: "가디안 ex"
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "サイコエンブレイス",
			ko: "사이코 임브레이스"
		},

		effect: {
			ja: "自分の番に何回でも使える。自分のトラッシュから「基本エネルギー」を1枚選び、自分のポケモンにつける。その後、つけたポケモンにダメカンを2個のせる。（きぜつするポケモンに、この特性は使えない。）",
			ko: "자신의 차례에 몇 번이라도 사용할 수 있다. 자신의 트래쉬에서 「기본(초)에너지」를 1장 선택해서 자신의(초)포켓몬에게 붙인다. 그 뒤, 붙인 포켓몬에게 데미지 카운터를 2개 올린다. (기절하는 포켓몬에게 이 특성은 사용할 수 없다.)"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			ja: "ミラクルフォース",
			ko: "미라클포스"
		},

		damage: 190,

		effect: {
			ja: "このポケモンの特殊状態を、すべて回復する。",
			ko: "이 포켓몬의 특수 상태를 모두 회복한다."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2,

	thirdParty: {
		cardmarket: 692994
	}
}

export default card