import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ミュウex",
		ko: "뮤 ex"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	rarity: "Ultra Rare",
	hp: 180,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "リスタート",
			ko: "리스타트"
		},

		effect: {
			ja: "自分の番に1回使える。自分の手札が3枚になるように、山札を引く。",
			ko: "자신의 차례에 1번 사용할 수 있다. 자신의 패가 3장이 되도록 덱을 뽑는다."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ゲノムハック",
			ko: "게놈핵"
		},

		effect: {
			ja: "相手のバトルポケモンが持っているワザを1つ選び、このワザとして使う。",
			ko: "상대의 배틀 포켓몬이 가지고 있는 기술을 1개 선택해서 이 기술로써 사용한다."
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

	retreat: 0,

	thirdParty: {
		cardmarket: 719604
	}
}

export default card