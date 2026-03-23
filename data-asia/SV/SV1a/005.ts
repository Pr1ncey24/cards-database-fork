import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニャオハ",
		'zh-tw': "新葉喵",
		th: "เนียวฮะ",
		ko: "나오하",
		id: "Sprigatito"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	dexId: [906],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "フワフワの 体毛は 植物に 近い 成分。 こまめに 顔を 洗って 乾燥を 防ぐ。",
		'zh-tw': "毛茸茸的體毛有著近似於植物的成分。 會勤快地洗臉以防止乾燥。",
		th: "ขนตามร่างกายที่นุ่มฟูมีส่วนประกอบที่คล้ายกับพืช ล้างหน้าบ่อยครั้งเพื่อป้องกันไม่ให้หน้าแห้ง",
		ko: "복슬복슬한 털은 식물에 가까운 성분으로 이루어져 있다. 수시로 세수를 하면서 건조해지는 것을 방지한다.",
		id: "Bulu Sprigatito yang halus mengandung komponen yang dekat dengan tumbuhan. Pokémon ini rajin mencuci mukanya agar tidak kering."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ツメをたてる",
			'zh-tw': "豎爪",
			th: "กางกรงเล็บ",
			ko: "발톱세우기",
			id: "Memasang Cakar"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card