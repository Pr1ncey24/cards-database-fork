import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "カイデン",
		'zh-tw': "電海燕",
		th: "ไคเด็น",
		ko: "찌리비",
		id: "Wattrel"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	dexId: [940],
	hp: 60,
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
			ja: "つつく",
			'zh-tw': "啄",
			th: "จิก",
			ko: "쪼기",
			id: "Mematuk"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "だんけつのつばさ",
			'zh-tw': "團結之翼",
			th: "ปีกสามัคคี",
			ko: "단결날개",
			id: "Sayap Bersatu Padu"
		},

		damage: "20×",

		effect: {
			ja: "自分のトラッシュにある、ワザ「だんけつのつばさ」を持つポケモンの枚数×20ダメージ。",
			'zh-tw': "造成自己的棄牌區的，持有「團結之翼」招式的寶可夢卡的張數×20點傷害。",
			th: "แดเมจจะเท่ากับจำนวนการ์ดโปเกมอนที่มีท่าต่อสู้ [ปีกสามัคคี] ที่อยู่บนตำแหน่งทิ้งการ์ดฝ่ายเรา x20",
			ko: "자신의 트래쉬에 있는 기술 「단결날개」를 가진 포켓몬의 장수 × 20데미지를 준다.",
			id: "Serangan ini memberikan kerusakan sejumlah 20 untuk tiap lembar Pokémon yang memiliki serangan Sayap Bersatu Padu yang ada di Trash sendiri."
		}
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