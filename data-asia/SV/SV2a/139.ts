import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "オムスター",
		'zh-tw': "多刺菊石獸",
		th: "ออมสตาร์",
		ko: "암스타",
		id: "Omastar"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [139],
	hp: 150,
	types: ["Water"],

	description: {
		ja: "鋭いキバは 岩も 砕くが 触手の とどく 範囲の 獲物しか 襲えないのだ。",
		'zh-tw': "尖銳的牙齒足以咬碎岩石，但能夠襲擊的獵物僅限在 牠的觸手可及的範圍之內。",
		th: "เขี้ยวอันแหลมคมนั้นบดขยี้ได้แม้แต่หินผาทว่ากลับสามารถจู่โจมได้เพียงเหยื่อที่อยู่ในระยะหนวดเอื้อมถึงเท่านั้น",
		ko: "날카로운 이빨은 바위도 부수지만 촉수가 닿는 범위 안의 먹이만 공격할 수 있다.",
		id: "Taring tajam Omastar dapat menghancurkan batu besar sekalipun, tapi Pokémon ini hanya dapat menyerang mangsa dalam lingkup yang dapat dijangkau oleh tentakelnya."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "みかいのしょくしゅ",
			'zh-tw': "原始觸手",
			th: "หนวดไม่เปิดเผย",
			ko: "미개척의 촉수",
			id: "Tentakel Tak Terjamah"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、相手のバトルポケモンは、にげられない。",
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手的戰鬥寶可夢無法撤退。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่บนตำแหน่งต่อสู้ โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม จะหนีไม่ได้",
			ko: "이 포켓몬이 배틀필드에 있는 한, 상대의 배틀 포켓몬은 후퇴할 수 없다.",
			id: "Selama Pokémon ini ada di Arena Bertarung, Pokémon Bertarung lawan tidak dapat Mundur."
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "アクアスプリット",
			'zh-tw': "水分岔",
			th: "อควาสปลิต",
			ko: "아쿠아스플릿",
			id: "Aqua Split"
		},

		damage: 90,

		effect: {
			ja: "相手のベンチポケモン2匹にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的2隻備戰寶可夢也各受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 2 ตัว ก็จะได้รับแดเมจตัวละ 30 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			ko: "상대의 벤치 포켓몬 2마리에게도 각각 30데미지를 준다. (벤치는 약점, 저항력 계산을 하지 않는다.)",
			id: "Serangan ini juga memberikan kerusakan masing-masing sejumlah 30 kepada 2 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719592
	}
}

export default card