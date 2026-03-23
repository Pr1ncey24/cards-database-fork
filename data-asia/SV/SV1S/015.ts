import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ブイゼル",
		'zh-tw': "泳圈鼬",
		th: "บุยเซล",
		ko: "브이젤",
		id: "Buizel"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	dexId: [418],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "尻尾を スクリューのように まわし 水中を 泳ぐだけでなく まとわりつく 海草も 切れる。",
		'zh-tw': "像螺旋槳一樣旋轉的尾巴除了能夠讓牠在水裡游泳， 還能切斷纏住自己的海草。",
		th: "หมุนหางต่างใบพัด ไม่ได้ใช้แค่ว่ายในน้ำได้อย่างเดียว แต่ยังใช้ตัดพวกสาหร่ายที่มาพันตัวได้ด้วย",
		ko: "꼬리를 스크루처럼 돌려서 수중을 헤엄치는 것뿐만 아니라 엉겨 붙는 해초도 자를 수 있다.",
		id: "Tidak hanya untuk berenang, Buizel memutar ekornya seperti baling-baling untuk memotong rumput laut yang menempel padanya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "みずかけ",
			'zh-tw': "潑水",
			th: "สาดน้ำ",
			ko: "물뿌리기",
			id: "Guyuran Air"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ひれカッター",
			'zh-tw': "鰭快刀",
			th: "ครีบใบมีด",
			ko: "지느러미 커터",
			id: "Sirip Pemotong"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 692981
	}
}

export default card