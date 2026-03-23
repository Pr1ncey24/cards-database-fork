import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "リオル",
		'zh-tw': "利歐路",
		th: "ริโอลุ",
		ko: "리오르",
		id: "Riolu"
	},

	illustrator: "chibi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [447],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "仲間同士で 波動を 出して コミュニケーションを とっている。 一晩中 走り続けられる。",
		'zh-tw': "夥伴們之間會透過發出波導來與彼此溝通。 跑步可以跑上一整晚。",
		th: "ใช้คลื่นพลังในการสื่อสารกับพวกเดียวกัน สามารถวิ่งติดต่อกันได้ทั้งคืน",
		ko: "파동을 내서 동료끼리 의사소통을 한다. 밤새도록 계속 달릴 수 있다.",
		id: "Riolu mengeluarkan gelombang aura untuk berkomunikasi dengan kawannya. Pokémon ini dapat terus berlari sepanjang malam."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "パンチ",
			'zh-tw': "出拳",
			th: "หมัด",
			ko: "펀치",
			id: "Pukulan"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "とつげき",
			'zh-tw': "突擊",
			th: "ประจัญบาน",
			ko: "돌격",
			id: "Menyerang"
		},

		damage: 50,

		effect: {
			ja: "このポケモンにも20ダメージ。",
			'zh-tw': "這隻寶可夢也受到20點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย",
			ko: "이 포켓몬에게도 20데미지를 준다.",
			id: "Pokémon ini juga menerima kerusakan sejumlah 20."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 693006
	}
}

export default card