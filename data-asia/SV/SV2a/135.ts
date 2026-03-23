import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "サンダース",
		'zh-tw': "雷伊布",
		th: "ธันเดอร์ส",
		ko: "쥬피썬더",
		id: "Jolteon"
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [135],
	hp: 110,
	types: ["Lightning"],

	description: {
		ja: "細胞が 出している 弱い 電気を ひとまとめにして 強力な 電撃を 放つ。",
		'zh-tw': "會把細胞發出的微弱電流都集中起來 釋放強力的電擊。",
		th: "รวบรวมพลังไฟฟ้าอ่อน ๆ ที่เซลล์ปล่อยออกมา แล้วยิงกระแสไฟฟ้าอันทรงพลัง",
		ko: "세포가 내고 있는 약한 전기를 하나로 모아서 강력한 전기를 발산한다.",
		id: "Jolteon mengumpulkan listrik berdaya kecil yang dikeluarkan oleh sel-sel tubuhnya, lalu menembakkan serangan listrik yang kuat."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "ちょくげきだん",
			'zh-tw': "直擊彈",
			th: "ยิงตรง",
			ko: "직격탄",
			id: "Serangan Linear"
		},

		effect: {
			ja: "相手のポケモン1匹に、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻寶可夢受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "ทำแดเมจ 30 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			ko: "상대의 포켓몬 1마리에게 30데미지를 준다. (벤치는 약점, 저항력 계산을 하지 않는다.)",
			id: "Serangan ini memberikan kerusakan sejumlah 30 kepada 1 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "とうしのいかずち",
			'zh-tw': "鬥志雷霆",
			th: "สายฟ้านักสู้",
			ko: "투지의우뢰",
			id: "Guntur Semangat Petarung"
		},

		damage: "90+",

		effect: {
			ja: "相手のバトルポケモンが「ポケモンex・V」なら、90ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【ex】・【V】」，則增加90點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็น [โปเกมอน【ex】 /【V】] การโจมตีนี้จะเพิ่มแดเมจอีก 90",
			ko: "상대의 배틀 포켓몬이 「포켓몬ex・V」라면 90데미지를 추가한다.",
			id: "Jika Pokémon Bertarung lawan adalah Pokémon {ex}/{V}, kerusakan yang diberikan bertambah sejumlah 90."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719588
	}
}

export default card