import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ホゲータ",
		ko: "뜨아거"
	},

	illustrator: "kantaro",
	category: "Pokemon",
	dexId: [909],
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "温かい 岩の上で 寝転び 四角い うろこから 取り込んだ 熱で 炎エネルギーを 作る。",
		ko: "따뜻한 바위 위에 드러누워서 네모난 비늘을 통해 흡수한 열로 불꽃 에너지를 만든다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ぼーっとする",
			ko: "멍때리기"
		},

		effect: {
			ja: "コインを1回投げオモテなら、このポケモンのHPを「30」回復する。",
			ko: "동전을 1번 던져서 앞면이 나오면 이 포켓몬의 HP를 「30」회복한다."
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			ja: "ほのお",
			ko: "불꽃"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3
}

export default card