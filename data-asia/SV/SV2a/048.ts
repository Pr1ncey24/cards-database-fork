import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "コンパン",
		'zh-tw': "毛球",
		th: "คองปัง",
		ko: "콘팡",
		id: "Venonat"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [48],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "全身から 毒が にじみでる。 暗くなると 灯りに 群がった 小さな 虫ポケモンを 捕らえる。",
		'zh-tw': "全身上下都會滲出毒素。天黑後就會去捕捉聚在 燈光處的小型蟲寶可夢。",
		th: "มีพิษไหลซึมออกจากทั่วร่างกาย พอตกค่ำจะไปจับโปเกมอนแมลงตัวเล็ก ๆ ที่มารวมตัวกันตามแสงไฟ",
		ko: "전신에서 독이 스며 나온다. 어두워지면 밝은 곳에 모인 작은 벌레포켓몬을 잡아먹는다.",
		id: "Racun bercucuran dari tubuh Venonat. Ketika hari menjadi gelap, Pokémon ini menangkap Pokémon serangga kecil yang berkumpul di sumber cahaya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かじる",
			'zh-tw': "咬",
			th: "แทะ",
			ko: "갉기",
			id: "Menggerogot"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "ビーム",
			'zh-tw': "光束",
			th: "ลำแสง",
			ko: "빔",
			id: "Beam"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719490
	}
}

export default card