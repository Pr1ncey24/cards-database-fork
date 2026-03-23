import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "パピモッチ",
		ko: "쫀도기"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	dexId: [926],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "しっとり すべすべの 触り心地。 吐息に 含まれている 酵母で まわりのものを 発酵させる。",
		ko: "만지면 촉촉하고 매끈매끈하다. 숨결에 포함되어 있는 효모로 주위의 것들을 발효시킨다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "もちもち",
			ko: "쫀득쫀득"
		},

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			ko: "상대의 다음 차례에 이 포켓몬이 받는 기술의 데미지는 「-30」이 된다."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "はねまわる",
			ko: "돌아다니며 뛰기"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card