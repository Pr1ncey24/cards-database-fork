import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "シャリタツ",
		'zh-tw': "米立龍",
		th: "ชาริทัตสึ",
		ko: "싸리용",
		id: "Tatsugiri"
	},

	illustrator: "OKACHEKE",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [978],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "小型の ドラゴンポケモン。 ヘイラッシャの 口の中に 棲み 外敵から 身を 守っている。",
		'zh-tw': "小型的龍寶可夢。會住在吃吼霸嘴裡， 保護自己免於外敵襲擊。",
		th: "โปเกมอนมังกรที่มีขนาดเล็ก อาศัยอยู่ในปากของเฮรัชเชอร์เพื่อปกป้องตัวเองจากศัตรูภายนอก",
		ko: "작은 몸집의 드래곤포켓몬. 어써러셔의 입안에 살며 외부의 적으로부터 몸을 지킨다.",
		id: "Pokémon naga kecil. Tatsugiri tinggal di dalam mulut Dondozo agar terlindung dari serangan luar."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "したじゅんび",
			'zh-tw': "預先準備",
			th: "ปูทาง",
			ko: "사전준비",
			id: "Persiapan Awal"
		},

		effect: {
			ja: "自分の山札から「基本エネルギー」を2枚まで選び、自分のたねポケモン1匹につける。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多2張「基本【水】能量」卡，附於自己的1隻【基礎】寶可夢身上。並且重洗牌庫。",
			th: "เลือกการ์ด [พลังงานพื้นฐาน[น้ำ]] ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอน[พื้นฐาน]ฝ่ายเรา 1 ตัว แล้วสับสำรับการ์ด",
			ko: "자신의 덱에서 「기본(물)에너지」를 2장까지 선택해서 자신의기본포켓몬 1마리에게 붙인다. 그리고 덱을 섞는다.",
			id: "Pilih paling banyak 2 lembar Energi Dasar {Air} dari Deck sendiri, lalu kenakan pada 1 Pokémon Basic sendiri. Kemudian, kocok Deck."
		}
	}, {
		cost: ["Water"],

		name: {
			ja: "そりかえる",
			'zh-tw': "彎曲",
			th: "หักกลับ",
			ko: "젖히기",
			id: "Menekuk Balik"
		},

		damage: 30,

		effect: {
			ja: "このポケモンと、ついているすべてのカードを、手札にもどす。",
			'zh-tw': "將這隻寶可夢與附加的卡，全部放回手牌。",
			th: "นำโปเกมอนนี้ และการ์ดทั้งหมดที่ติดอยู่ กลับขึ้นมือ",
			ko: "이 포켓몬과 붙어 있는 모든 카드를 패로 되돌린다.",
			id: "Kembalikan Pokémon ini dan semua kartu yang dikenakannya ke Kartu Pegangan."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card