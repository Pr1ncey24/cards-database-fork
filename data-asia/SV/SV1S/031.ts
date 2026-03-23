import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "デデンネ",
		'zh-tw': "咚咚鼠",
		th: "เดเด็นเนะ",
		ko: "데덴네",
		id: "Dedenne"
	},

	illustrator: "zig",
	rarity: "Common",
	category: "Pokemon",
	dexId: [702],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "体が 小さく 発電器官が 未熟なので 人家の 電気を 尻尾で 吸い取り 充電する。",
		'zh-tw': "由於體型嬌小，發電器官尚未發達，因此會用尾巴 吸取住家的電力來充電。",
		th: "อวัยวะผลิตกระแสไฟฟ้ามีขนาดเล็กและยังไม่พัฒนาเต็มที่ เลยชอบเอาหางไปดูดไฟฟ้าจากบ้านคนเพื่อชาร์จไฟฟ้า",
		ko: "몸집이 작고 발전 기관이 미숙하기 때문에 사람이 사는 집의 전기를 꼬리를 통해 흡수해서 충전한다.",
		id: "Dedenne mengecas dan menyerap listrik dari rumah manusia menggunakan ekornya karena tubuhnya kecil dan organ pembangkit listriknya masih belum sempurna."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "エネかじり",
			'zh-tw': "咬能量",
			th: "แทะพลังงาน",
			ko: "에너지 갉아먹기",
			id: "Menggerogoti Energi"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬에게 붙어 있는 에너지를 1개 선택해서 트래쉬한다.",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 692997
	}
}

export default card