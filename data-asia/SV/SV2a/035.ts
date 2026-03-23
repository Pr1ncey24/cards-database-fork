import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ピッピ",
		'zh-tw': "皮皮",
		th: "ปิปปี",
		ko: "삐삐",
		id: "Clefairy"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [35],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "愛くるしい しぐさと 鳴き声で かわいいと 大人気の ポケモン。 だが めったに 見つからない。",
		'zh-tw': "因可愛的舉止和叫聲而廣受歡迎的寶可夢。 不過很少被人發現。",
		th: "เป็นโปเกมอนน่ารักที่ได้รับความนิยมเป็นอย่างมากเพราะมีลักษณะท่าทางและเสียงร้องที่น่าเอ็นดู แต่แทบจะไม่ค่อยได้พบเห็น",
		ko: "애교 있는 몸동작과 울음소리로 귀엽다고 많은 인기를 누리는 포켓몬. 그러나 좀처럼 눈에 띄지 않는다.",
		id: "Pokémon dengan tingkah dan suaranya yang imut-imut ini populer karena kemanisannya. Akan tetapi, Clefairy sulit untuk ditemukan."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "つきみにさそう",
			'zh-tw': "邀請月見",
			th: "ชวนชมจันทร์",
			ko: "달맞이유인",
			id: "Mengundang Memandang Bulan"
		},

		effect: {
			ja: "自分の山札から「ピッピ」を3枚まで選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多3張「皮皮」，放置於備戰區。並且重洗牌庫。",
			th: "เลือกการ์ด [ปิปปี] ได้สูงสุด 3 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			ko: "자신의 덱에서 「삐삐」를 3장까지 선택해서 벤치로 내보낸다. 그리고 덱을 섞는다.",
			id: "Pilih paling banyak 3 lembar Clefairy dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ひらてうち",
			'zh-tw': "掌擊",
			th: "ฝ่ามือตบ",
			ko: "수벽치기",
			id: "Tampar"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719477
	}
}

export default card