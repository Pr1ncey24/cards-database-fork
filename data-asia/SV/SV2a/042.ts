import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴルバット",
		'zh-tw': "大嘴蝠",
		th: "โกลแบท",
		ko: "골뱃",
		id: "Golbat"
	},

	illustrator: "Scav",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [42],
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "小さな 脚で 器用に 歩く。 寝ている 獲物に 忍びより キバを 突きたて 血を すするのだ。",
		'zh-tw': "能以小小的腳靈巧地步行。會無聲無息地靠近沉睡中的獵物， 用獠牙咬住對方並且吸食血液。",
		th: "เดินอย่างคล่องตัวด้วยขาขนาดเล็ก แอบฝังเขี้ยวเข้ากับเหยื่อที่กำลังหลับใหลและดูดเลือด",
		ko: "작은 다리로 능숙하게 걷는다. 자고 있는 먹이에게 살며시 다가가 이빨을 꽂아 피를 빨아먹는다.",
		id: "Golbat berjalan dengan cekatan menggunakan kakinya yang kecil. Pokémon ini mengendap mendekati mangsa yang sedang tidur, menusukkan taringnya, dan menyedot darah."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ちょくげきひこう",
			'zh-tw': "直擊飛行",
			th: "บินพุ่งชน",
			ko: "직격비행",
			id: "Terbang Linear"
		},

		effect: {
			ja: "相手のポケモン1匹に、40ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻寶可夢受到40點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "ทำแดเมจ 40 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			ko: "상대의 포켓몬 1마리에게 40데미지를 준다. (벤치는 약점, 저항력 계산을 하지 않는다.)",
			id: "Serangan ini memberikan kerusakan sejumlah 40 kepada 1 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
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
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719484
	}
}

export default card