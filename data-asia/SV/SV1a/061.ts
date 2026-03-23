import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "エンニュート",
		'zh-tw': "焰后蜥",
		th: "เอ็นนิวท์",
		ko: "염뉴트",
		id: "Salazzle"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [758],
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "毒ガスで クラクラにした 相手を 妖艶な 身のこなしで 誘惑し 忠実な しもべに してしまう。",
		'zh-tw': "會用妖豔的身姿誘惑被牠的毒瓦斯弄得頭昏眼花的對手， 使其變成自己忠實的僕人。",
		th: "ยั่วยวนคู่ต่อสู้ที่มึนงงเพราะแก๊สพิษด้วยท่าทีเย้ายวน ทำให้อีกฝ่ายกลายเป็นผู้รับใช้ที่ซื่อสัตย์",
		ko: "독가스에 어질어질해진 상대를 요염한 몸놀림으로 유혹해서 충실한 부하로 만들어 버린다.",
		id: "Salazzle menggunakan sosoknya yang memesona untuk memikat lawan yang terhuyung-huyung akibat gas beracun dan menjadikan mereka bawahan yang setia."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "ガスでつつむ",
			'zh-tw': "瓦斯包圍",
			th: "ห่อหุ้มด้วยแก๊ส",
			ko: "가스로감싸기",
			id: "Gas yang Menyelimuti"
		},

		damage: 40
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "ひっぱたく",
			'zh-tw': "重摑",
			th: "ตบแรง",
			ko: "세게때리기",
			id: "Menepuk"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 701115
	}
}

export default card