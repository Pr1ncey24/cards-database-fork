import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "デリバード",
		'zh-tw': "信使鳥",
		th: "เดลิเบิร์ด",
		ko: "딜리버드",
		id: "Delibird"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [225],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "１日 ずっと エサを運んでる。 遭難した 人が デリバードの エサで 助かった 話もある。",
		'zh-tw': "一整天都在搬運食物。據說曾經有遇難的人因為 信使鳥的食物而得救。",
		th: "ลำเลียงอาหารตลอดทั้งวัน ว่ากันว่ามีผู้ประสบภัยที่รอดตายเพราะได้อาหารจากเดลิเบิร์ดด้วย",
		ko: "온종일 먹이를 운반한다. 조난당한 사람이 딜리버드의 먹이로 살아났다는 이야기도 있다.",
		id: "Delibird terus mengangkut makanan sehari penuh. Ada kisah mengenai orang yang terdampar terselamatkan berkat makanan yang dibawa olehnya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ダブルドロー",
			'zh-tw': "雙重抽出",
			th: "ดับเบิลดรอว์",
			ko: "더블드로",
			id: "Double Draw"
		},

		effect: {
			ja: "自分の山札を2枚引く。",
			'zh-tw': "從自己的牌庫抽出2張卡。",
			th: "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา",
			ko: "자신의 덱을 2장 뽑는다.",
			id: "Ambil 2 kartu dari atas Deck sendiri."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "アイスウイング",
			'zh-tw': "冰之翼",
			th: "ไอซ์วิง",
			ko: "아이스윙",
			id: "Ice Wing"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 701078
	}
}

export default card