import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "イワーク",
		'zh-tw': "大岩蛇",
		th: "อิวาร์ค",
		ko: "롱스톤",
		id: "Onix"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [95],
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "大きく 丈夫な 体を くねらせ よじらせ 時速８０キロで 地面を 勢いよく 掘り進む。",
		'zh-tw': "彎曲扭動巨大結實的身體，以時速８０公里的 猛烈勢頭挖掘前進。",
		th: "บิดร่างกายที่ใหญ่และแข็งแรงให้โค้งงอเป็นเกลียวขุดเจาะพื้นดินลงไปอย่างรวดเร็วด้วยความเร็ว 80 กิโลเมตรต่อชั่วโมง",
		ko: "크고 튼튼한 몸을 뒤틀고 꼬아서 시속 80km로 힘차게 땅을 파나간다.",
		id: "Onix menggali lubang secara bersemangat pada kecepatan 80 km/jam dengan menggoyang dan meliukkan tubuhnya yang besar dan kuat."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "どっすんなだれ",
			'zh-tw': "轟隆崩塌",
			th: "ทลายครืน",
			ko: "쿵쾅샤워",
			id: "Longsoran Dentum"
		},

		damage: "80×",

		effect: {
			ja: "自分の山札を上から5枚トラッシュし、その中にあるにげるためのエネルギーが4個のポケモンの枚数×80ダメージ。",
			'zh-tw': "將自己的牌庫上方5張卡丟棄，造成其中【撤退】所需的能量為4個的寶可夢卡的張數×80點傷害。",
			th: "ทิ้งการ์ด 5 ใบจากด้านบนของสำรับการ์ดฝ่ายเราที่ตำแหน่งทิ้งการ์ด แดเมจจะเท่ากับจำนวนการ์ดโปเกมอนที่มีพลังงานสำหรับ[หนี] 4 ลูกที่อยู่ในนั้น x80",
			ko: "자신의 덱을 위에서부터 5장 트래쉬하고 그 중에 있는후퇴에 필요한 에너지가 4개인 포켓몬의 장수 × 80데미지를 준다.",
			id: "Buang 5 kartu dari atas Deck sendiri ke Trash, serangan ini memberikan kerusakan sejumlah 80 untuk tiap lembar Pokémon yang membutuhkan 4 Energi untuk Mundur yang ada di antaranya."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"],

		name: {
			ja: "ヘビーインパクト",
			'zh-tw': "重磅衝擊",
			th: "เฮวี่อิมแพ็คท์",
			ko: "헤비임팩트",
			id: "Heavy Impact"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719548
	}
}

export default card