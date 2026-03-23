import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "タイカイデン",
		'zh-tw': "大電海燕",
		th: "ไทไคเด็น",
		ko: "찌리비크",
		id: "Kilowattrel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [941],
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "のど袋を ふくらませて 電気を 増幅させる。 風に 乗って １日で ７００キロを 飛行する。",
		'zh-tw': "會膨脹喉囊來增強電力。可以乘著風在１天內 就飛上７００公里。",
		th: "พองถุงคอเพื่อเพิ่มกระแสไฟฟ้า โบยบินตามสายลมเป็นระยะทาง 700 กิโลเมตรในหนึ่งวัน",
		ko: "목의 주머니를 부풀려서 전기를 증폭시킨다. 바람을 타고 하루에 700km를 비행할 수 있다.",
		id: "Kilowattrel menggembungkan kantong tenggorokannya dan menambahkan daya listriknya. Pokémon ini menaiki angin dan terbang sejauh 700 km dalam sehari."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ちょくげきひこう",
			'zh-tw': "直擊飛行",
			th: "บินพุ่งชน",
			ko: "직격비행",
			id: "Terbang Linear"
		},

		effect: {
			ja: "相手のポケモン1匹に、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻寶可夢受到50點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "ทำแดเมจ 50 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด},
			ko: "이 포켓몬에게 붙어 있는(번개)에너지를 1개 선택해서 트래쉬한다.",
			ko: "상대의 포켓몬 1마리에게 50데미지를 준다. (벤치는 약점, 저항력 계산을 하지 않는다.)"",
			id: "Serangan ini memberikan kerusakan sejumlah 50 kepada 1 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "サンダーブラスト",
			'zh-tw': "雷電爆破",
			th: "ธันเดอร์บลาสท์",
			ko: "썬더블라스트",
			id: "Thunder Blast"
		},

		damage: 140,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的【雷】能量，將其丟棄。",
			th: "เลือกพลังงาน[สายฟ้า]ที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			id: "Pilih 1 Energi {Listrik} yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		}
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
	regulationMark: "G"
}

export default card