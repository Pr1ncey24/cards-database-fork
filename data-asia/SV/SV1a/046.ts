import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "パルデア ケンタロス",
		'zh-tw': "帕底亞 肯泰羅",
		th: "พัลเดีย เคนเทารอส",
		ko: "팔데아 켄타로스",
		id: "Paldean Tauros"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [128],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "ぶ厚く 力強い 筋肉と 気性の 荒さが 特徴。 コンバット種と 呼ばれる。",
		'zh-tw': "特徵是厚實有力的肌肉，以及粗魯暴躁的性格。 這種樣子被稱為鬥戰種。",
		th: "จุดเด่นคือกล้ามเนื้อหนาอันทรงพลังและอารมณ์ที่รุนแรง เรียกกันว่าพันธุ์ประจัญบาน",
		ko: "두껍고도 강한 근육과 사나운 성질이 특징이다. 컴뱃종이라고 불린다.",
		id: "Otot tebal bertenaga dan sifatnya yang kasar adalah karakteristiknya. Pokémon ini dikenal sebagai Tauros Varian Tempur."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "いかりのつの",
			'zh-tw': "憤怒之角",
			th: "เขาพิโรธ",
			ko: "분노의뿔",
			id: "Tanduk Kemarahan"
		},

		damage: "20+",

		effect: {
			ja: "このポケモンにのっているダメカンの数×10ダメージ追加。",
			'zh-tw': "增加這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x10",
			ko: "이 포켓몬에게 올려져 있는 데미지 카운터의 수 × 10데미지를 추가한다.",
			id: "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "コンバットタックル",
			'zh-tw': "鬥戰衝撞",
			th: "คอมแบตแท็กเกิล",
			ko: "컴뱃태클",
			id: "Combat Tackle"
		},

		damage: 130,

		effect: {
			ja: "このポケモンにも30ダメージ。",
			'zh-tw': "這隻寶可夢也受到30點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 30 ด้วย",
			ko: "이 포켓몬에게도 30데미지를 준다.",
			id: "Pokémon ini juga menerima kerusakan sejumlah 30."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card