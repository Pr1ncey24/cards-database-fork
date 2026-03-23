import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ワルビアル",
		'zh-tw': "流氓鱷",
		th: "วารุเวียล",
		ko: "악비아르",
		id: "Krookodile"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [553],
	hp: 170,
	types: ["Fighting"],

	description: {
		ja: "強力な あごで 噛みつくと そのまま 思い切り 体を ひねり 獲物を 切断する。",
		'zh-tw': "用強力的顎咬住後，狠狠地扭動身體， 將獵物切斷。",
		th: "ใช้ขากรรไกรอันทรงพลังกัดแล้วบิดตัวเต็มแรงเพื่อตัดเหยื่อให้ขาด",
		ko: "강력한 턱으로 물고 그대로 힘껏 몸을 비틀어 먹이를 절단한다.",
		id: "Begitu menggigit mangsanya dengan rahangnya yang kuat, Krookodile memutar tubuhnya untuk memutuskan tubuh mangsanya."
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ガブガブバイト",
			'zh-tw': "大口啃咬",
			th: "กัดเขมือบ",
			ko: "우걱우걱 바이트",
			id: "Gigitan Gluk Gluk"
		},

		damage: 50,

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数ぶん、相手のバトルポケモンについているエネルギーを選び、トラッシュする。",
			'zh-tw': "擲硬幣直到出現反面，選擇與正面出現的次數相同數量的對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			th: "ทอยเหรียญจนกว่าจะออกก้อย เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม ตามจำนวนครั้งที่ออกหัว ทิ้งที่ตำแหน่งทิ้งการ์ด",
			ko: "뒷면이 나올 때까지 동전을 던져서 앞면이 나온 수만큼 상대의 배틀 포켓몬에게 붙어 있는 에너지를 선택해서 트래쉬한다.",
			id: "Lempar koin hingga hasilnya sisi belakang. Pilih Energi yang dikenakan pada Pokémon Bertarung lawan untuk tiap lemparan dengan hasil sisi depan, lalu buang ke Trash."
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "じしん",
			'zh-tw': "地震",
			th: "แผ่นดินไหว",
			ko: "지진",
			id: "Gempa"
		},

		damage: 180,

		effect: {
			ja: "自分のベンチポケモン全員にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "自己的所有備戰寶可夢也各受到30點傷害。 [在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนบนเบนช์ฝ่ายเราทุกตัว ก็จะได้รับแดเมจตัวละ 30 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด},
			ko: "자신의 벤치 포켓몬 전원에게도 각각 30데미지를 준다. (벤치는 약점, 저항력 계산을 하지 않는다.)"",
			id: "Serangan ini juga memberikan kerusakan masing-masing sejumlah 30 kepada semua Pokémon Cadangan sendiri. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 693011
	}
}

export default card