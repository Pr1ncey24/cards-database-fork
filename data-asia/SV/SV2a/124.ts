import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ルージュラex",
		'zh-tw': "迷唇姐ex",
		th: "รูจูลาex",
		ko: "루주라 ex",
		id: "Jynx ex"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 200,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "ズッキュンキッス",
			'zh-tw': "動心之吻",
			th: "จุ๊บโดนใจ",
			ko: "심쿵키스",
			id: "Ciuman Meluluhkan"
		},

		effect: {
			ja: "相手のバトルポケモンがねむりなら、そのポケモンをきぜつさせる。",
			'zh-tw': "若對手的戰鬥寶可夢【睡眠】，則將那隻寶可夢【昏厥】。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ] จะทำให้โปเกมอนนั้น[หมดสภาพ]",
			ko: "상대의 배틀 포켓몬이잠듦이라면 그 포켓몬을기절시킨다.",
			id: "Jika Pokémon Bertarung lawan mengalami kondisi Tidur, Pokémon tersebut KO."
		}
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			ja: "こごえるかぜ",
			'zh-tw': "冰凍之風",
			th: "สายลมเยือกแข็ง",
			ko: "얼어붙은바람",
			id: "Angin Dingin"
		},

		damage: 120,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]",
			ko: "상대의 배틀 포켓몬을잠듦으로 만든다.",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719577
	}
}

export default card