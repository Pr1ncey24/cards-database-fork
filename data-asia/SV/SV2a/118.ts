import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "トサキント",
		'zh-tw': "角金魚",
		th: "โทซาคินโตะ",
		ko: "콘치",
		id: "Goldeen"
	},

	illustrator: "SIE NANAHARA",
	rarity: "Common",
	category: "Pokemon",
	dexId: [118],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "背びれ 胸びれが 筋肉のように 発達しており 水中を ５ノットの 速さで 泳ぐ。",
		'zh-tw': "背鰭和尾鰭像肌肉那樣發達。能夠以 ５節的速度在水中游泳。",
		th: "ครีบหลังและครีบอกเจริญเติบโตราวกับกล้ามเนื้อ ว่ายน้ำด้วยความเร็ว 5 นอต",
		ko: "등지느러미와 가슴지느러미가 근육처럼 발달하여 물속을 5노트의 속도로 헤엄친다.",
		id: "Sirip punggung dan sirip dada Goldeen tumbuh bak otot, sehingga dia bisa berenang dengan kecepatan 5 knot di dalam air."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "さんれんづき",
			'zh-tw': "三連撞",
			th: "พุ่งชนสามครั้ง",
			ko: "삼연속찌르기",
			id: "Tusukan Tiga Kali"
		},

		damage: "10×",

		effect: {
			ja: "コインを3回投げ、オモテの数×10ダメージ。",
			'zh-tw': "擲3次硬幣，造成正面出現的次數×10點傷害。",
			th: "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10",
			ko: "동전을 3번 던져서 앞면이 나온 수 × 10데미지를 준다.",
			id: "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "うちみず",
			'zh-tw': "潑灑清水",
			th: "ราดน้ำ",
			ko: "물뿌려대기",
			id: "Percikan Air"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719571
	}
}

export default card