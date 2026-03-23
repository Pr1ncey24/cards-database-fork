import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ベトベトン",
		'zh-tw': "臭臭泥",
		th: "เบโตเบตัน",
		ko: "질뻐기",
		id: "Muk"
	},

	illustrator: "Haru Akasaka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [89],
	hp: 140,
	types: ["Darkness"],

	description: {
		ja: "汚い ヘドロが 全身に まとわりつく。 足跡に 触っただけで 毒に 侵される。",
		'zh-tw': "全身上下沾滿污泥。光是碰到牠的足跡， 都會受到毒素的侵襲。",
		th: "โคลนสกปรกติดทั่วตัว แค่ไปโดนร่องรอยที่มันขยับตัวผ่านก็ติดพิษแล้ว",
		ko: "더러운 오물이 온몸에 달라붙었다. 지나간 자리를 건드리기만 해도 독이 퍼져 버린다.",
		id: "Limbah kotor menyelimuti tubuh Muk. Siapa pun akan keracunan walau hanya menyentuh jejak kakinya."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "どくぶくろ",
			'zh-tw': "毒袋",
			th: "ถุงพิษ",
			ko: "독주머니",
			id: "Kantong Racun"
		},

		effect: {
			ja: "このポケモンがいるかぎり、相手のどくのポケモンは、進化・退化してもどくが回復しない。",
			'zh-tw': "只要這隻寶可夢在場上，對手的【中毒】的寶可夢，就算進化・退化，【中毒】也不會恢復。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ โปเกมอนที่เป็นสภาวะ[พิษ]ของฝ่ายตรงข้าม แม้จะวิวัฒนาการหรือวิวัฒนาการย้อนกลับก็จะไม่หายจากสภาวะ[พิษ]",
			ko: "이 포켓몬이 있는 한, 상대의독포켓몬은 진화・퇴화해도독을 회복하지 않는다.",
			id: "Selama Pokémon ini ada di Arena, Pokémon lawan yang mengalami kondisi Racun tidak pulih kondisi Racunnya meskipun melakukan evolusi atau diturunkan tingkat evolusinya."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ポイズンアタック",
			'zh-tw': "猛毒攻擊",
			th: "พอยซันแอทแทก",
			ko: "포이즌어택",
			id: "Poison Attack"
		},

		damage: 100,

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]",
			ko: "상대의 배틀 포켓몬을독으로 만든다.",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 693019
	}
}

export default card