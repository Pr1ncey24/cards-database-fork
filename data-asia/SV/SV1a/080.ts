import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "コイキング",
		ko: "잉어킹"
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	dexId: [129],
	hp: 30,
	types: ["Water"],

	description: {
		ja: "力のない 情けない ポケモン。 たまに 高く 飛び跳ねても ２メートルを 超すのが やっとだ。",
		ko: "힘없는 한심한 포켓몬이다. 가끔 높이 뛰어오르지만 2m를 겨우 넘기는 게 고작이다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "はねじょうず",
			ko: "튀어오르기 고수"
		},

		damage: "10＋",

		effect: {
			ja: "コインを2回投げ、すべてオモテなら、20ダメージ追加。",
			ko: "동전을 2번 던져서 모두 앞면이 나오면 20데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,

	thirdParty: {
		cardmarket: 701076
	}
}

export default card