import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "トロピウス",
		ko: "트로피우스"
	},

	illustrator: "Jerky",
	category: "Pokemon",
	dexId: [357],
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "熱帯の ジャングルに 生息。 首の フサは 甘くて 美味しい。 １年に ２回 実を つける。",
		ko: "열대 정글에 서식한다. 목에 달린 송이는 달고 맛있다. 1년에 2번 열매를 맺는다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "リーフドレイン",
			ko: "리프드레인"
		},

		damage: 20,

		effect: {
			ja: "このポケモンのHPを「20」回復する。",
			ko: "이 포켓몬의 HP를 「20」회복한다."
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "なんごくのかぜ",
			ko: "트로피컬바람"
		},

		damage: 130,

		effect: {
			ja: "このポケモンについているエネルギーをすべて、ベンチポケモン1匹につけ替える。",
			ko: "이 포켓몬에게 붙어 있는 에너지를 모두 벤치 포켓몬 1마리에게 붙인다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,

	thirdParty: {
		cardmarket: 701036
	}
}

export default card