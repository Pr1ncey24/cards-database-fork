import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ムウマージ",
		ko: "무우마직"
	},

	illustrator: "aoki",
	category: "Pokemon",
	dexId: [429],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "呪文のような 鳴き声だが まれに 相手を 幸せにする 効果も 秘めているという。",
		ko: "주문 같은 울음소리지만 가끔 상대를 행복하게 만드는 효과도 감춰져 있다고 한다."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "マジカルフリック",
			ko: "매지컬 플릭"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のバトルポケモンについているエネルギーを1個選び、相手のベンチポケモンにつけ替える。",
			ko: "자신의 차례에 이 카드를 패에서 꺼내서 진화시켰을 때 1번 사용할 수 있다. 상대의 배틀 포켓몬에게 붙어 있는 에너지를 1개 선택해서 상대의 벤치 포켓몬에게 붙인다."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ねんどうだん",
			ko: "염동탄"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,

	thirdParty: {
		cardmarket: 701089
	}
}

export default card