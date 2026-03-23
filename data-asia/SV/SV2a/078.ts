import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ギャロップ",
		'zh-tw': "烈焰馬",
		th: "แกลล็อป",
		ko: "날쌩마",
		id: "Rapidash"
	},

	illustrator: "Nurikabe",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [78],
	hp: 100,
	types: ["Fire"],

	description: {
		ja: "いちばん 脚が 速い ものが リーダー。 群れが 行く 場所や 走る 速度を 決めている。",
		'zh-tw': "奔跑速度最快的烈焰馬會成為首領，決定族群 前往的地點和奔跑速度。",
		th: "ตัวที่วิ่งเร็วที่สุดจะเป็นจ่าฝูง จ่าฝูงจะเป็นผู้กำหนดจุดหมายรวมถึงความเร็วในการวิ่งของฝูง",
		ko: "가장 발이 빠른 날쌩마가 리더가 되어 무리가 갈 장소나 달리는 속도를 정한다.",
		id: "Rapidash yang kakinya paling cepat menjadi pemimpin di kelompoknya. Pemimpin menentukan tempat yang dituju dan kecepatan lari kelompok."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "こがす",
			'zh-tw': "灼熱",
			th: "เผา",
			ko: "그을리기",
			id: "Menghanguskan"
		},

		effect: {
			ja: "相手のバトルポケモンをやけどにする。",
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]",
			ko: "상대의 배틀 포켓몬을 화상으로 만든다.",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar."
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			ja: "マッハターン",
			'zh-tw': "音速迴轉",
			th: "มัคเทิร์น",
			ko: "마하턴",
			id: "Mach Turn"
		},

		damage: 90,

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
			th: "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์",
			ko: "이 포켓몬을 벤치 포켓몬과 교체한다.",
			id: "Tukar Pokémon ini dengan Pokémon Cadangan."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719520
	}
}

export default card