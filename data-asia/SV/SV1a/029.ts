import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ウェルカモ",
		'zh-tw': "湧躍鴨",
		th: "เวลคาโมะ",
		ko: "아꾸왁",
		id: "Quaxwell"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	dexId: [913],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "ひたすらに 浅瀬を 走り込んで 足腰を 鍛え 仲間同士で 足技の 華麗さを 競いあう。",
		'zh-tw': "會在淺灘不斷跑步來鍛鍊下盤的筋骨，好跟夥伴們 競爭誰的腿技最為華麗。",
		th: "ขยันวิ่งไปมาบริเวณน้ำตื้นเพื่อให้ขาและสะโพกแข็งแรง แข่งความงดงามของเทคนิคการใช้ขากับพวกพ้อง",
		ko: "열심히 얕은 여울을 달리며 하반신을 단련하고, 동료들끼리 발 기술의 화려함을 겨룬다.",
		id: "Quaxwell melatih kaki dan pinggangnya dengan terus berlari di perairan dangkal. Pokémon ini saling mengadu keindahan teknik serangan kaki dengan sesamanya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "みずでっぽう",
			'zh-tw': "水槍",
			th: "ปืนฉีดน้ำ",
			ko: "물대포",
			id: "Pistol Air"
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "スプラッシュ",
			'zh-tw': "飛濺",
			th: "สแปลช",
			ko: "스플래시",
			id: "Splash"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card