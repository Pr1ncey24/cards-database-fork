import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ウルガモス",
		'zh-tw': "火神蛾",
		th: "อุลกามอธ",
		ko: "불카모스",
		id: "Volcarona"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	dexId: [637],
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "暑い 土地では 燃える 体は 嫌がられるが 寒い 土地では 太陽の化身 と 崇められる。",
		'zh-tw': "燃燒的身體在炎熱之地備受嫌棄，但在寒冷之地 卻被信奉為太陽的化身。",
		th: "ผู้คนในพื้นที่ที่อากาศร้อนจะไม่ชอบร่างที่ลุกไหม้นี้ แต่ในพื้นที่ที่หนาวเย็นจะได้รับการเทิดทูนในฐานะร่างจำแลงของพระอาทิตย์",
		ko: "더운 곳에서는 타오르는 몸 때문에 미움을 받지만, 추운 곳에서는 태양의 화신이라며 받들어진다.",
		id: "Tubuh membara Volcarona dibenci di daerah panas, namun dipuja sebagai jelmaan matahari di daerah dingin."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ほのおをまとう",
			'zh-tw': "火焰纏身",
			th: "คลุมด้วยเพลิง",
			ko: "불꽃두르기",
			id: "Mengenakan Api"
		},

		damage: 30,

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を1枚選び、このポケモンにつける。",
			'zh-tw': "從自己的棄牌區選擇1張「基本【火】能量」卡，附於這隻寶可夢身上。",
			th: "เลือกการ์ด [พลังงานพื้นฐาน[ไฟ]] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนนี้",
			ko: "자신의 트래쉬에서 「기본(불꽃)에너지」를 1장 선택해서 이 포켓몬에게 붙인다.",
			id: "Pilih 1 lembar Energi Dasar {Api} dari Trash sendiri, lalu kenakan pada Pokémon ini."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "ヒートブラスト",
			'zh-tw': "高溫爆破",
			th: "ฮีทบลาสท์",
			ko: "히트블라스트",
			id: "Heat Blast"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 701062
	}
}

export default card