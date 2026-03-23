import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "デカグース",
		'zh-tw': "貓鼬探長",
		th: "เดคากูส",
		ko: "형사구스",
		id: "Gumshoos"
	},

	illustrator: "Eri Yamaki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [735],
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "獲物の 痕跡を 見つけると 日が 落ちるまで その場に 留まり 忍耐強く 張り込み続ける。",
		'zh-tw': "一旦發現獵物的蹤跡，就會發揮十足的耐心 蹲守在該處直到日落。",
		th: "เมื่อเจอร่องรอยของเหยื่อ จะเฝ้ารออยู่ตรงนั้นอย่างทรหดอดทนไม่ไปไหนจนกว่าตะวันจะตกดิน",
		ko: "먹잇감의 흔적을 발견하면 해가 떨어질 때까지 그 자리에 머물며 끈질기게 잠복한다.",
		id: "Jika menemukan jejak mangsanya, Gumshoos akan diam dan dengan sabar mengintai lokasi jejak tersebut ditemukan hingga matahari terbenam."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ヘッドバング",
			'zh-tw': "鐵頭碰",
			th: "เฮดแบงก์",
			ko: "헤드뱅",
			id: "Hantaman Kepala"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かみくだく",
			'zh-tw': "咬碎",
			th: "กัดขย้ำ",
			ko: "깨물어부수기",
			id: "Mengunyah"
		},

		damage: 60,

		effect: {
			ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			ko: "상대의 배틀 포켓몬에게 붙어 있는 에너지를 1개 선택해서 트래쉬한다.",
			id: "Pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 701117
	}
}

export default card