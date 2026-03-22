import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒトカゲ",
		'zh-tw': "小火龍",
		th: "ฮิโตคาเงะ",
		ko: "파이리",
		id: "Charmander"
	},

	illustrator: "GIDORA",
	rarity: "Common",
	category: "Pokemon",
	dexId: [4],
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "生まれたときから しっぽに 炎が ともっている。 炎が 消えたとき その 命は 終わって しまう。",
		'zh-tw': "從出生時開始尾巴上就有火焰在燃燒。 火焰熄滅時，生命也會結束。",
		th: "มีหางที่ติดไฟตั้งแต่เกิด หากไฟดับนั่นหมายถึงการจบชีวิต",
		ko: "태어날 때부터 꼬리에 불꽃이 타오르고 있다. 불꽃이 꺼지면 생명도 다하고 만다.",
		id: "Sejak lahir, api menyala di ekor Charmander. Hidupnya berakhir saat api tersebut padam."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "まるやけ",
			'zh-tw': "全部燒光",
			th: "เผาเตียน",
			ko: "통째로태우기",
			id: "Bakar Bulat-bulat"
		},

		effect: {
			ja: "場に出ているスタジアムをトラッシュする。",
			'zh-tw': "將場上的競技場卡丟棄。",
			th: "ทิ้งการ์ดสเตเดียมที่วางอยู่บนกระดานที่ตำแหน่งทิ้งการ์ด",
			ko: "필드에 나와 있는 스타디움을 트래쉬한다.",
			id: "Buang Stadium yang ada di Arena ke Trash."
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			ja: "ひをはく",
			'zh-tw': "吐火",
			th: "พ่นอัคคี",
			ko: "불토하기",
			id: "Memuntahkan Api"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719446
	}
}

export default card