import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ナゾノクサ",
		'zh-tw': "走路草",
		th: "นาโซโนะคุสะ",
		ko: "뚜벅쵸",
		id: "Oddish"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	dexId: [43],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "昼間は 太陽を 避けるため 冷たい 地面に もぐっている。 月の光を 浴びて 育つ。",
		'zh-tw': "白天為了躲避太陽，會鑽進涼爽的地下。 藉由沐浴月光來成長。",
		th: "ช่วงกลางวันจะมุดอยู่ใต้ดินเย็น ๆ เพื่อหลบดวงอาทิตย์ เติบโตด้วยการอาบแสงจันทร์",
		ko: "낮에는 태양을 피하기 위해 차가운 땅속에 들어가 있다. 달빛을 쬐어 성장한다.",
		id: "Pada siang hari, Oddish membenamkan diri ke dalam tanah yang dingin untuk menghindari matahari. Pokémon ini tumbuh dengan bermandikan cahaya bulan."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "はっぱカッター",
			'zh-tw': "飛葉快刀",
			th: "คัตเตอร์ใบไม้",
			ko: "잎날가르기",
			id: "Daun Pemotong"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719485
	}
}

export default card