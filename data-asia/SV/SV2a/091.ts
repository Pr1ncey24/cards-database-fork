import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "パルシェン",
		'zh-tw': "刺甲貝",
		th: "พาร์เชน",
		ko: "파르셀",
		id: "Cloyster"
	},

	illustrator: "Nelnal",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [91],
	hp: 130,
	types: ["Water"],

	description: {
		ja: "潮の 流れが 激しい 海に 生息している パルシェンの 殻の トゲは 大きく 鋭い。",
		'zh-tw': "刺甲貝棲息在潮流湍急的海裡， 殼上的刺又大又尖銳。",
		th: "เปลือกของพาร์เชนที่อาศัยอยู่ในทะเลที่น้ำไหลเชี่ยวจะมีหนามที่ใหญ่และแหลมคม",
		ko: "조수의 흐름이 격한 바다에 서식하는 파르셀의 껍데기에 붙은 가시는 크고 날카롭다.",
		id: "Cangkang Cloyster yang hidup di laut bergelombang pasang deras berduri besar dan tajam."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "プロテクトチャージ",
			'zh-tw': "防護充能",
			th: "โพรเทกชาร์จ",
			ko: "프로텍트차지",
			id: "Protect Charge"
		},

		damage: 80,

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-80」される。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-80」點。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-80]",
			ko: "상대의 다음 차례에 이 포켓몬이 받는 기술의 데미지는 「-80」이 된다.",
			id: "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 80."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719544
	}
}

export default card