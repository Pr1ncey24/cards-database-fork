import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ジュゴン",
		'zh-tw': "白海獅",
		th: "จูกอน",
		ko: "쥬레곤",
		id: "Dewgong"
	},

	illustrator: "aoki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [87],
	hp: 130,
	types: ["Water"],

	description: {
		ja: "食事の 後は 砂浜で 日光浴を している。 体温を あげて 消化を よく するのだ。",
		'zh-tw': "進食之後會在沙灘上 做日光浴，藉此提高體溫 來幫助消化。",
		th: "หลังกินอาหาร ก็จะไปนอนอาบแดดที่หาดทราย เพื่อเพิ่มอุณหภูมิร่างกายให้ย่อยอาหารได้ดีขึ้น",
		ko: "식사 후에는 모래 해변에서 일광욕을 하고 있다. 체온을 높여서 소화를 돕기 위함이다.",
		id: "Dewgong mandi sinar matahari di pantai setelah selesai makan. Peningkatan suhu tubuhnya membantu proses pencernaan."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "デュアルスプラッシュ",
			'zh-tw': "二重飛濺",
			th: "ดูอัลสแปลช",
			ko: "듀얼 스플래시",
			id: "Dual Splash"
		},

		effect: {
			ja: "相手のポケモン2匹に、それぞれ50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的2隻寶可夢各受到50點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนฝ่ายตรงข้าม 2 ตัว จะได้รับแดเมจตัวละ 50 {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			ko: "상대의 포켓몬 2마리에게 각각 50데미지를 준다. (벤치는 약점, 저항력 계산을 하지 않는다.)",
			id: "Serangan ini memberikan kerusakan masing-masing sejumlah 50 kepada 2 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "オーロラビーム",
			'zh-tw': "極光束",
			th: "ออโรร่าบีม",
			ko: "오로라빔",
			id: "Aurora Beam"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719529
	}
}

export default card