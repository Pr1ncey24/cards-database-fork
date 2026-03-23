import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ムクバード",
		'zh-tw': "姆克鳥",
		th: "มุคูเบิร์ด",
		ko: "찌르버드",
		id: "Staravia"
	},

	illustrator: "kantaro",
	rarity: "Common",
	category: "Pokemon",
	dexId: [397],
	hp: 80,
	types: ["Colorless"],

	description: {
		ja: "自分の 弱さを わきまえており いつも 群れで 暮らしている。 １匹になると やかましく 鳴く。",
		'zh-tw': "心知肚明自己的弱小，所以平時都是群體生活。 單獨行動時會發出吵鬧的叫聲。",
		th: "เพราะรู้จุดอ่อนของตัวเองจึงอยู่เป็นฝูงเสมอ พออยู่ตัวเดียวจะส่งเสียงดังโหวกเหวก",
		ko: "자신의 약함을 잘 알고 있기에 항상 무리를 지어 살고 있다. 혼자가 되면 요란하게 운다.",
		id: "Karena sadar akan kelemahannya, Staravia selalu hidup bersama kelompoknya. Pokémon ini akan berciap kencang ketika sendirian."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "つばさでうつ",
			'zh-tw': "翅膀攻擊",
			th: "โจมตีด้วยปีก",
			ko: "날개치기",
			id: "Pukulan Sayap"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "スピードひこう",
			'zh-tw': "高速飛行",
			th: "บินเร็วจี๋",
			ko: "스피드비행",
			id: "Terbang Cepat"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 693031
	}
}

export default card