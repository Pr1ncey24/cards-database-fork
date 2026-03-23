import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ザングース",
		'zh-tw': "貓鼬斬",
		th: "แซงกูส",
		ko: "쟝고",
		id: "Zangoose"
	},

	illustrator: "aoki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [335],
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "ハブネークとは 因縁の あいだ。 出会うと すかさず 前足の ツメを 広げて 威嚇するのだ。",
		'zh-tw': "和飯匙蛇是死對頭。一旦撞見彼此，就會立刻 張開前腳的爪子來威嚇對方。",
		th: "เป็นคู่ปรับกับฮาบูเนค หากเจอหน้ากันจะกางเล็บเท้าหน้าข่มขู่ในทันที",
		ko: "세비퍼와는 사연이 깊은 사이. 만나면 곧바로 앞발의 발톱을 펼쳐 위협한다.",
		id: "Hubungan Zangoose dan Seviper adalah musuh bebuyutan. Jika mereka bertemu, Pokémon ini melebarkan cakar kaki depannya dengan cepat dan mengintimidasi Seviper."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ひきずりだす",
			'zh-tw': "拖出",
			th: "ลากออกมา",
			ko: "끌어내기",
			id: "Seret Pergi"
		},

		effect: {
			ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに30ダメージ。",
			'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。然後，新上場的寶可夢受到30點傷害。",
			th: "เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้ หลังจากนั้น ทำแดเมจ 30 กับโปเกมอนที่เพิ่งออกมาใหม่",
			ko: "상대의 벤치 포켓몬을 1마리 선택해서 배틀 포켓몬과 교체한다. 그 뒤, 새로 나온 포켓몬에게 30데미지를 준다.",
			id: "Pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung. Setelah itu, berikan kerusakan sejumlah 30 kepada Pokémon Bertarung yang baru."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "スラッシュクロー",
			'zh-tw': "利爪揮砍",
			th: "สแลชคลอว์",
			ko: "슬래시크루",
			id: "Cakar Penebas"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 693029
	}
}

export default card