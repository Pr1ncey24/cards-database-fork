import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "カイデン",
		'zh-tw': "電海燕",
		th: "ไคเด็น",
		ko: "찌리비",
		id: "Wattrel"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	dexId: [940],
	hp: 50,
	types: ["Lightning"],

	description: {
		ja: "翼の 骨は 風を 受けると 電気を 作る。 海に 飛び込み 獲物を 感電させて 捕らえる。",
		'zh-tw': "當翅膀的骨頭受到風吹時，就能製造出電力。會衝進 海裡讓獵物觸電後將其捕獲。",
		th: "กระดูกที่ปีกจะผลิตกระแสไฟฟ้าเมื่อได้รับลม จะดำดิ่งลงสู่ทะเลเพื่อจับเหยื่อด้วยการช็อตด้วยไฟฟ้า",
		ko: "날개의 뼈는 바람을 받으면 전기를 만들어 낸다. 바다에 뛰어들어 먹이를 감전시켜서 잡는다.",
		id: "Kerangka sayap Wattrel menciptakan listrik jika menerima angin. Pokémon ini terjun ke laut, menyetrum mangsa, dan menangkapnya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "もってくる",
			'zh-tw': "呼喚",
			th: "รวบรวม",
			ko: "가져오기",
			id: "Mengumpulkan"
		},

		effect: {
			ja: "自分の山札を1枚引く。",
			'zh-tw': "從自己的牌庫抽出1張卡。",
			th: "จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา",
			ko: "자신의 덱을 1장 뽑는다.",
			id: "Ambil 1 kartu dari atas Deck sendiri."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "かっくう",
			'zh-tw': "滑翔",
			th: "ถลาลม",
			ko: "활공",
			id: "Melayang Rendah"
		},

		damage: 20
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
	regulationMark: "G"
}

export default card