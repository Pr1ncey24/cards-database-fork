import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "シェルダー",
		'zh-tw': "大舌貝",
		th: "เชลเดอร์",
		ko: "셀러",
		id: "Shellder"
	},

	illustrator: "Nelnal",
	rarity: "Common",
	category: "Pokemon",
	dexId: [90],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "ダイヤモンドよりも 硬い殻に 覆われている。 しかし 中は 意外と 柔らかい。",
		'zh-tw': "包覆著身體的是比鑽石還硬的殼。不過殼裡面 卻比想像中的還要柔軟。",
		th: "ปกคลุมด้วยเปลือกที่แข็งยิ่งกว่าเพชร แต่ภายในนิ่มกว่าที่คิด",
		ko: "다이아몬드보다 단단한 껍데기에 싸여 있지만 속은 의외로 말랑하다.",
		id: "Meskipun dilapisi oleh cangkang yang lebih keras daripada berlian, tubuh Shellder di dalam cangkangnya ternyata lunak."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "シェルプレス",
			'zh-tw': "硬殼壓制",
			th: "เชลล์เพรส",
			ko: "셸프레스",
			id: "Shell Press"
		},

		damage: 30,

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-30]",
			ko: "상대의 다음 차례에 이 포켓몬이 받는 기술의 데미지는 「-30」이 된다.",
			id: "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719543
	}
}

export default card