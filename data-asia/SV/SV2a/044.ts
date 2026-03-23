import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "クサイハナ",
		'zh-tw': "臭臭花",
		th: "คุไซฮานะ",
		ko: "냄새꼬",
		id: "Gloom"
	},

	illustrator: "Sekio",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [44],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "よだれのように 見える 甘い蜜。 とても ねばねば しており 触れると いつまでも まとわりつく。",
		'zh-tw': "看似口水的東西其實是甜甜的蜜。非常黏稠， 只要碰到就會一直黏住。",
		th: "น้ำหวาน ๆ ของดอกไม้ที่ดูเหมือนน้ำลายหยดนั้น เหนียวหนืดมาก ถ้าไปโดนเข้าล่ะก็จะติดไปตลอดเลย",
		ko: "침처럼 보이는 달콤한 꿀은 매우 끈적거려서 묻으면 좀처럼 떨어지지 않는다.",
		id: "Gloom mengeluarkan madu manis yang terlihat seperti air liur. Sangat lengket dan menempel dengan lekat jika disentuh."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "さんぶざきエナジー",
			'zh-tw': "三成能量",
			th: "พลังงานแรกแย้ม",
			ko: "못다 핀 에너지",
			id: "Energi Mekar Sepertiga"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札を上から3枚見て、その中から基本エネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。残りのカードは山札にもどして切る。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。查看自己的牌庫上方3張卡，從其中選擇任意數量的基本能量卡，以任意方式附於自己的寶可夢身上。將剩餘卡放回牌庫並重洗。",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง ดูการ์ด 3 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ดพลังงานพื้นฐานจากในนั้นตามจำนวนที่ชอบ ติดที่โปเกมอนฝ่ายเราตามชอบ การ์ดที่เหลือใส่กลับไปในสำรับการ์ดแล้วสับ",
			ko: "자신의 차례에 이 카드를 패에서 꺼내서 진화시켰을 때 1번 사용할 수 있다. 자신의 덱을 위에서부터 3장 보고 그 중에서 기본 에너지를 원하는 만큼 선택해서 자신의 포켓몬에게 원하는 대로 붙인다. 남은 카드는 덱으로 되돌리고 섞는다.",
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Lihat 3 kartu dari atas Deck sendiri, pilih sesukanya Energi Dasar di antaranya, lalu kenakan sesukanya pada Pokémon sendiri. Kocok kembali sisa kartu ke Deck."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "よだれ",
			'zh-tw': "口水",
			th: "น้ำลายยืด",
			ko: "",
			id: "Liur"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719486
	}
}

export default card