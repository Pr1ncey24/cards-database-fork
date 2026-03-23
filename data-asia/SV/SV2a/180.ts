import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "オムナイト",
		'zh-tw': "菊石獸",
		th: "ออมไนต์",
		ko: "암나이트",
		id: "Omanyte"
	},

	illustrator: "Yano Keiji",
	category: "Pokemon",
	dexId: [138],
	hp: 100,
	types: ["Water"],

	description: {
		ja: "絶滅した 古代のポケモン。 １０本の脚で 水を かき 漂うように 泳ぐ。",
		'zh-tw': "一度滅絕的古代寶可夢。會使用１０隻腳划水，在水中一漂一浮地游動。",
		th: "เป็นโปเกมอนดึกดำบรรพ์ที่สูญพันธุ์ไปแล้ว ว่ายน้ำโดยการตวัดขาทั้งสิบบนน้ำราวกับลอยตัวอยู่",
		ko: "멸종한 고대의 포켓몬이다. 10개의 다리로 물을 가르며 떠다니듯 헤엄친다.",
		id: "Pokémon purba yang telah punah. Omanyte mengayuh air menggunakan sepuluh kakinya dan berenang bagai mengambang."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "しょくしゅでもどす",
			'zh-tw': "觸手復元",
			th: "ใส่กลับด้วยหนวด",
			ko: "촉수로 돌려놓기",
			id: "Tentakel Pengembali"
		},

		damage: 50,

		effect: {
			ja: "相手のバトルポケモンについているエネルギーを1個選び、相手の手札にもどす。",
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，放回對手的手牌。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก นำกลับขึ้นมือฝ่ายตรงข้าม",
			ko: "상대의 배틀 포켓몬에게 붙어 있는 에너지를 1개 선택해서 상대의 패로 되돌린다.",
			id: "Pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu kembalikan ke Kartu Pegangan lawan."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719591
	}
}

export default card