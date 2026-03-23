import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "パラス",
		'zh-tw': "派拉斯",
		th: "พารัส",
		ko: "파라스",
		id: "Paras"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "Common",
	category: "Pokemon",
	dexId: [46],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "冬虫夏草と いう キノコが 虫を 操っているのだ。 虫の 意思は 無視される。",
		'zh-tw': "控制蟲子的是一種 叫做冬蟲夏草的蕈類。 蟲子的意志會被忽視。",
		th: "เห็ดที่ชื่อโทจูคะโซจะคอยบงการแมลง โดยไม่สนใจความต้องการของแมลง",
		ko: "동충하초라고 불리는 버섯이 벌레를 조종하고 있다. 벌레의 의사는 무시된다.",
		id: "Jamur ulat Yarsagumba mengendalikan bagian tubuh serangga dari Paras. Kemauan serangga tidak dipedulikan."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "ふむ",
			'zh-tw': "踩",
			th: "เหยียบ",
			ko: "밟기",
			id: "Menginjak"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "ほうしだま",
			'zh-tw': "孢子彈",
			th: "ลูกสปอร์",
			ko: "포자구슬",
			id: "Bola Spora"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]",
			ko: "상대의 배틀 포켓몬을 잠듦으로 만든다.",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719488
	}
}

export default card