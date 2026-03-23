import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ドクロッグex",
		ko: "독개굴 ex"
	},

	illustrator: "PLANETA Hiiragi",
	category: "Pokemon",
	hp: 250,
	types: ["Darkness"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "わるだくみ",
			ko: "나쁜음모"
		},

		effect: {
			ja: "自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。",
			ko: "자신의 덱에서 원하는 카드를 2장까지 선택해서 패로 가져온다. 그리고 덱을 섞는다."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "どくどくリッパー",
			ko: "맹독리퍼"
		},

		damage: 120,

		effect: {
			ja: "相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は6個になる。",
			ko: "상대의 배틀 포켓몬을독으로 만든다. 이독으로 올리는 데미지 카운터의 수는 6개가 된다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	thirdParty: {
		cardmarket: 693022
	}
}

export default card