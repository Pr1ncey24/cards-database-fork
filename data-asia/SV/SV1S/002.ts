import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ノクタス",
		'zh-tw': "夢歌仙人掌",
		th: "น็อคทัส",
		ko: "밤선인",
		id: "Cacturne"
	},

	illustrator: "DOM",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [332],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "砂漠の 旅人の 後ろを 集団で つきまとい 疲れて 動けなくなるのを 待つのだ。",
		'zh-tw': "會成群跟在沙漠中的旅人後方，等待對方 因疲累而變得無法動彈。",
		th: "จะเดินกันเป็นกลุ่มติดตามนักเดินทางในทะเลทรายอยู่ไม่ห่างเพื่อรอให้เหนื่อยจนขยับตัวไม่ไหว",
		ko: "사막의 여행자 뒤를 집단으로 쫓아 지쳐 움직이지 못하기를 기다린다.",
		id: "Cacturne membuntuti pengembara padang pasir secara berkelompok, menunggu hingga pengembara tersebut kelelahan dan tidak bisa bergerak."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "はんげきばり",
			'zh-tw': "反擊針",
			th: "หนามโต้กลับ",
			ko: "반격가시",
			id: "Jarum Serangan Balasan"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを3個のせる。",
			'zh-tw': "這隻寶可夢在戰鬥場受到對手的寶可夢招式的傷害時，在使用招式的寶可夢身上放置3個傷害指示物。",
			th: "เมื่อโปเกมอนนี้ อยู่บนตำแหน่งต่อสู้และได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้าม วางตัวนับแดเมจ 3 ตัวบนโปเกมอนที่ใช้ท่าต่อสู้",
			ko: "이 포켓몬이 배틀필드에서 상대의 포켓몬으로부터 기술의 데미지를 받았을 때 기술을 사용한 포켓몬에게 데미지 카운터를 3개 올린다.",
			id: "Saat Pokémon ini ada di Arena Bertarung dan menerima kerusakan akibat serangan dari Pokémon lawan, letakkan 3 Token Kerusakan pada Pokémon yang telah menggunakan serangan."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "とげショット",
			'zh-tw': "尖刺射擊",
			th: "กระสุนหนาม",
			ko: "가시숏",
			id: "Tembakan Duri"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 692968
	}
}

export default card