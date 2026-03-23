import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "カモネギ",
		'zh-tw': "大蔥鴨",
		th: "คาโมเนกิ",
		ko: "파오리",
		id: "Farfetch'd"
	},

	illustrator: "KG-2000",
	rarity: "Common",
	category: "Pokemon",
	dexId: [83],
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "植物の 茎で 戦う。 茎の 振り方には いくつかの 流派の ようなものが ある。",
		'zh-tw': "用植物的莖來戰鬥。莖的揮舞方式存在著 好幾種不同的流派。",
		th: "ใช้ลำต้นของพืชในการต่อสู้ มีสไตล์การฟาดฟันด้วยลำต้นที่เหมือนกับวิชาต่อสู้หลายรูปแบบ",
		ko: "식물의 줄기로 싸운다. 줄기를 휘두르는 방식에 따라 몇 종류의 유파가 있는 듯하다.",
		id: "Farfetch'd bertarung menggunakan batang tumbuhan. Terdapat beberapa aliran terkait cara mengayunkan batang."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "しょってくる",
			'zh-tw': "背來",
			th: "แบกขึ้นหลัง",
			ko: "업고오기",
			id: "Memanggul"
		},

		effect: {
			ja: "自分の山札を2枚引く。",
			'zh-tw': "從自己的牌庫抽出2張卡。",
			th: "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา",
			ko: "자신의 덱을 2장 뽑는다.",
			id: "Ambil 2 kartu dari atas Deck sendiri."
		}
	}, {
		cost: ["Colorless"],

		name: {
			ja: "ネギでぶつ",
			'zh-tw': "用蔥毆打",
			th: "หวดด้วยต้นหอม",
			ko: "파로치기",
			id: "Daun Bawang Penghajar"
		},

		damage: 30
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
		cardmarket: 719525
	}
}

export default card