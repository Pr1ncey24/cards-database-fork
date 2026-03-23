import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "シャワーズ",
		'zh-tw': "水伊布",
		th: "ชาวเวอร์ส",
		ko: "샤미드",
		id: "Vaporeon"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [134],
	hp: 130,
	types: ["Water"],

	description: {
		ja: "水辺に 棲むが 尻尾には 魚のような ひれが 残っていて 人魚と 間違う 人もいる。",
		'zh-tw': "雖然棲息在水邊，但由於尾巴上有像是魚的鰭， 因此有的人會把牠誤認成人魚。",
		th: "อาศัยอยู่ริมน้ำ เพราะหางมีครีบเหมือนปลาอยู่เลยมีคนเข้าใจผิดคิดว่าเป็นเงือก",
		ko: "물가에 살지만 꼬리에 물고기처럼 지느러미가 남아 있어서 인어로 착각하는 사람도 있다.",
		id: "Vaporeon hidup di dekat air. Karena terdapat sirip seperti ikan pada ekornya, ada manusia yang menyangka Pokémon ini adalah putri duyung."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "スパイラルドレイン",
			'zh-tw': "螺旋吸取",
			th: "สไปรัลเดรน",
			ko: "스파이럴 드레인",
			id: "Spiral Drain"
		},

		damage: 30,

		effect: {
			ja: "このポケモンのHPを「30」回復する。",
			'zh-tw': "將這隻寶可夢恢復「30」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [30]",
			ko: "이 포켓몬의 HP를 「30」회복한다.",
			id: "Pulihkan HP Pokémon ini sejumlah 30."
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "とうしのうずしお",
			'zh-tw': "鬥志潮旋",
			th: "น้ำวนนักสู้",
			ko: "투지의 바다회오리",
			id: "Pusaran Air Semangat Petarung"
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
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719587
	}
}

export default card