import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "メグロコ",
		'zh-tw': "黑眼鱷",
		th: "เมะกุโรโกะ",
		ko: "깜눈크",
		id: "Sandile"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	dexId: [551],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "砂の中に 潜り 泳ぐように 移動。 敵に みつからないためと 体温を 下げない 知恵 なのだ。",
		'zh-tw': "潛藏在沙中像游泳一樣移動。這是種兼具不被敵人發現和 保持體溫效果的生存智慧。",
		th: "ดำลงไปในทรายแล้วเคลื่อนที่เหมือนว่ายอยู่ข้างใน เป็นวิธีการอันชาญฉลาดที่ช่วยไม่ให้ศัตรูเจอตัวและไม่ให้ตัวเย็นลง",
		ko: "모래 속에 숨어서 헤엄치는 것처럼 이동한다. 적에게 들키지 않으면서 체온이 내려가지 않기 위한 지혜다.",
		id: "Sandile menyelam dan berpindah seperti sedang berenang di dalam pasir. Pengetahuan yang berguna untuk melindungi diri dari musuh dan agar suhu tubuhnya tidak menurun."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "かじる",
			'zh-tw': "咬",
			th: "แทะ",
			ko: "갉기",
			id: "Menggerogot"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "ぶつかる",
			'zh-tw': "衝撞",
			th: "กระแทก",
			ko: "부딪치기",
			id: "Menyeruduk"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 693009
	}
}

export default card