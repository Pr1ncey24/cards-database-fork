import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "サワムラー",
		'zh-tw': "飛腿郎",
		th: "ซาวามูลาร์",
		ko: "시라소몬",
		id: "Hitmonlee"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [106],
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "脚が 自由に 伸び縮みして 遠く 離れている 場合でも 相手を 蹴り上げることが できる。",
		'zh-tw': "雙腿能夠自由伸縮，即使離得很遠也能 把對手一腳踢飛。",
		th: "ขายืดหดได้อิสระ ถึงแม้จะอยู่ไกลก็สามารถเตะคู่ต่อสู้ให้ลอยไปได้",
		ko: "다리를 자유자재로 늘이고 줄인다. 상대가 멀리 떨어져 있어도 다리를 늘여서 차올릴 수 있다.",
		id: "Kaki Hitmonlee dapat memanjang dan memendek dengan bebas, sehingga dia dapat menendang lawan meski jaraknya terpisah jauh."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "トルネードキック",
			'zh-tw': "龍捲風踢腿",
			th: "ทอร์นาโดคิก",
			ko: "토네이도킥",
			id: "Tornado Kick"
		},

		effect: {
			ja: "相手のポケモン全員に、それぞれ10ダメージ。このポケモンをベンチポケモンと入れ替える。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的所有寶可夢各受到10點傷害。將這隻寶可夢與備戰寶可夢互換。[在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนฝ่ายตรงข้ามทุกตัว จะได้รับแดเมจตัวละ 10 สลับโปเกมอนนี้กับโปเกมอนบนเบนช์ {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			ko: "상대의 포켓몬 전원에게 각각 10데미지를 준다. 이 포켓몬을 벤치 포켓몬과 교체한다. (벤치는 약점, 저항력 계산을 하지 않는다.)",
			id: "Serangan ini memberikan kerusakan masing-masing sejumlah 10 kepada semua Pokémon lawan. Tukar Pokémon ini dengan Pokémon Cadangan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		}
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			ja: "けたぐり",
			'zh-tw': "踢倒",
			th: "เตะเลียด",
			ko: "안다리걸기",
			id: "Tendangan Rendah"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719559
	}
}

export default card