import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "フローゼル",
		'zh-tw': "浮潛鼬",
		th: "โฟลเซล",
		ko: "플로젤",
		id: "Floatzel"
	},

	illustrator: "Gemi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [419],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "浮き袋を ふくらませると 人を 背中に 乗せることが できる。 浮き袋を しぼませて 潜る。",
		'zh-tw': "膨脹起浮囊後就能讓人坐在自己背上。 排出浮囊的氣來潛水。",
		th: "พอพองถุงลมแล้วสามารถให้คนขึ้นบนหลังได้ จะทำให้ถุงลมแฟบลงก่อนดำลงไป",
		ko: "부낭을 부풀리면 사람을 등에 태울 수 있다. 부낭을 오그라들게 하여 잠수한다.",
		id: "Floatzel dapat mengangkut manusia di atas punggungnya dengan menggembungkan kantong apungnya. Pokémon ini menyusutkan kantong apungnya lalu menyelam."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ハイドロポンプ",
			'zh-tw': "水炮",
			th: "ไฮโดรปั๊มพ์",
			ko: "하이드로펌프",
			id: "Pompa Air"
		},

		damage: "50+",

		effect: {
			ja: "このポケモンについているエネルギーの数×20ダメージ追加。",
			'zh-tw': "增加這隻寶可夢身上附加的【水】能量的數量×20點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงาน[น้ำ]ที่ติดอยู่กับโปเกมอนนี้ x20",
			ko: "이 포켓몬에게 붙어 있는(물)에너지의 개수 × 20데미지를 추가한다.",
			id: "Kerusakan yang diberikan bertambah sejumlah 20 untuk tiap Energi {Air} yang dikenakan pada Pokémon ini."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 692982
	}
}

export default card