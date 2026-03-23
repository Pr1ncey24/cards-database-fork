import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ホゲータ",
		'zh-tw': "呆火鱷",
		th: "โฮเกเตอร์",
		ko: "뜨아거",
		id: "Fuecoco"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [909],
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "温かい 岩の上で 寝転び 四角い うろこから 取り込んだ 熱で 炎エネルギーを 作る。",
		'zh-tw': "會躺在溫熱的岩石上，用四角形的鱗片所吸收的 熱能來製造火之能量。",
		th: "นอนเกลือกกลิ้งอยู่บนหินอุ่น สร้างพลังงานไฟด้วยความร้อนที่ดูดซับเข้ามาด้วยเกล็ดสี่เหลี่ยม",
		ko: "따뜻한 바위 위에 드러누워서 네모난 비늘을 통해 흡수한 열로 불꽃 에너지를 만든다.",
		id: "Fuecoco berbaring di atas batu hangat dan menciptakan energi api dengan menyerap energi panas tersebut menggunakan sisik perseginya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ぼーっとする",
			'zh-tw': "發呆",
			th: "เหม่อลอย",
			ko: "멍때리기",
			id: "Melamun"
		},

		effect: {
			ja: "コインを1回投げオモテなら、このポケモンのHPを「30」回復する。",
			'zh-tw': "擲1次硬幣若為正面，則將這隻寶可夢恢復「30」HP。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว ฟื้นฟู HP ของโปเกมอนนี้ [30]",
			ko: "동전을 1번 던져서 앞면이 나오면 이 포켓몬의 HP를 「30」회복한다.",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pulihkan HP Pokémon ini sejumlah 30."
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			ja: "ほのお",
			'zh-tw': "火焰",
			th: "ไฟ",
			ko: "불꽃",
			id: "Api"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card