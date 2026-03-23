import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "パルデア ドオーex",
		ko: "팔데아 토오 ex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "どくのぬまち",
			ko: "독 늪지대"
		},

		effect: {
			ja: "場にスタジアムが出ているなら、自分の番に1回使える。相手のバトルポケモンをどくにする。",
			ko: "필드에 스타디움이 나와 있다면 자신의 차례에 1번 사용할 수 있다. 상대의 배틀 포켓몬을독으로 만든다."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "ニードルボーン",
			ko: "니들본"
		},

		damage: 200,

		effect: {
			ja: "コインを1回投げウラなら、次の自分の番、このポケモンはワザが使えない。",
			ko: "동전을 1번 던져서 뒷면이 나오면 자신의 다음 차례에 이 포켓몬은 기술을 사용할 수 없다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3
}

export default card