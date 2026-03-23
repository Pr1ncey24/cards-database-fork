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

	illustrator: "sowsow",
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
			ja: "ふきあらす",
			'zh-tw': "揚風",
			th: "ลมทำลายล้าง",
			ko: "불어휩쓸기",
			id: "Angin Pengacau"
		},

		effect: {
			ja: "相手は相手自身の手札をすべて山札にもどして切る。その後、相手は山札を4枚引く。",
			'zh-tw': "對手將對手自己的手牌全部放回牌庫並重洗。然後，對手從牌庫抽出4張卡。",
			th: "ฝ่ายตรงข้ามนำการ์ดบนมือฝ่ายตรงข้ามเองทั้งหมดใส่กลับไปในสำรับการ์ดแล้วสับ หลังจากนั้น ฝ่ายตรงข้ามจั่วการ์ด 4 ใบจากสำรับการ์ด",
			ko: "상대는 상대 자신의 패를 모두 덱으로 되돌리고 섞는다. 그 뒤, 상대는 덱을 4장 뽑는다.",
			id: "Lawan mengocok kembali semua Kartu Pegangannya ke Deck. Setelah itu, lawan mengambil 4 kartu dari atas Deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "はばたく",
			'zh-tw': "羽擊",
			th: "ตีปีก",
			ko: "홰치기",
			id: "Mengepak"
		},

		damage: 40
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