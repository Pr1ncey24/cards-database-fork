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

	illustrator: "AKIRA EGAWA",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [128],
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "高温の 鼻息を 吹きだすので ブレイズ種と 名づけられた。 ３本の 尻尾を 束ねている。",
		'zh-tw': "噴出的鼻息溫度很高，因此被命名為火熾種。 ３根尾巴總是束在一起。",
		th: "เพราะพ่นลมหายใจที่มีอุณหภูมิสูงจึงถูกตั้งชื่อว่าพันธุ์อัคคี หางทั้งสามพันกันเป็นเกลียว",
		ko: "고온의 콧김을 불어 대는 까닭에 블레이즈종이라는 이름이 붙었다. 세 개의 꼬리를 한데 묶고 있다.",
		id: "Tauros ini diberi nama Varian Api karena mengembuskan napas bersuhu tinggi dari hidungnya. Pokémon ini mengikat 3 ekornya."
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
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "ブレイズダッシュ",
			'zh-tw': "火焰衝刺",
			th: "เบลซแดช",
			ko: "블레이즈대시",
			id: "Blaze Dash"
		},

		damage: 120,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			ko: "이 포켓몬에게 붙어 있는 에너지를 1개 선택해서 트래쉬한다.",
			id: "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card