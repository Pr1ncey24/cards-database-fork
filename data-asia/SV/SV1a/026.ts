import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "フローゼル",
		'zh-tw': "浮潛鼬",
		th: "โฟลเซล",
		ko: "플로젤",
		id: "Floatzel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [419],
	hp: 110,
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
		cost: ["Water"],

		name: {
			ja: "うずまきテール",
			'zh-tw': "漩渦尾",
			th: "หางหมุนวน",
			ko: "소용돌이테일",
			id: "Ekor Berpusar"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンと、ついているすべてのカードを、相手の手札にもどす。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢與附加的卡，全部放回對手的手牌。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว นำโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม และการ์ดทั้งหมดที่ติดอยู่ กลับขึ้นมือฝ่ายตรงข้าม",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬과 붙어 있는 모든 카드를 상대의 패로 되돌린다.",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kembalikan Pokémon Bertarung lawan dan semua kartu yang dikenakannya ke Kartu Pegangan lawan."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "たきのぼり",
			'zh-tw': "攀瀑",
			th: "ปีนน้ำตก",
			ko: "폭포오르기",
			id: "Melawan Arus"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 701080
	}
}

export default card