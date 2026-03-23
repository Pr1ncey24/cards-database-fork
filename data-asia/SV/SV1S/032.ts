import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "パピモッチ",
		'zh-tw': "狗仔包",
		th: "พาปิม็อตจิ",
		ko: "쫀도기",
		id: "Fidough"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	dexId: [926],
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "しっとり すべすべの 触り心地。 吐息に 含まれている 酵母で まわりのものを 発酵させる。",
		'zh-tw': "摸起來既濕潤又絲滑。吐出的氣息裡含有酵母， 可以使周圍的東西發酵。",
		th: "มีร่างกายที่ชุ่มชื้นและเรียบเนียนน่าสัมผัส หมักสิ่งที่อยู่รอบตัวด้วยยีสต์ซึ่งมาพร้อมกับลมหายใจ",
		ko: "만지면 촉촉하고 매끈매끈하다. 숨결에 포함되어 있는 효모로 주위의 것들을 발효시킨다.",
		id: "Tubuh Fidough empuk, halus, dan nyaman dipegang. Napasnya yang mengandung ragi dapat memfermentasikan benda-benda yang ada di sekitarnya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "うしろげり",
			'zh-tw': "後踢",
			th: "เตะกลับหลัง",
			ko: "뒤로 차기",
			id: "Tendangan Belakang"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card