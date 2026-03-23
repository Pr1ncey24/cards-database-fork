import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "カイロス",
		'zh-tw': "凱羅斯",
		th: "ไคลอส",
		ko: "쁘사이저",
		id: "Pinsir"
	},

	illustrator: "Yuya Oka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [127],
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "ツノで 獲物を 挟みこみ そのまま まっぷたつに するか 強引に 投げ飛ばしてしまう。",
		'zh-tw': "會用角緊緊夾住獵物，就這樣把對方剪成兩半 或是把牠硬扔到天邊去。",
		th: "จะใช้เขาหนีบเหยื่อแล้วฉีกเป็นสองส่วนหรือไม่ก็เขวี้ยงออกไปแรง ๆ",
		ko: "뿔로 먹이를 찔러 넣어 그대로 두 동강으로 만들거나 강제로 던져버린다.",
		id: "Pinsir mencapit mangsa menggunakan tanduknya, lalu mangsa tersebut akan dibelah jadi dua atau dilempar."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "はさむ",
			'zh-tw': "夾住",
			th: "หนีบ",
			ko: "찝기",
			id: "Capitan Keras"
		},

		damage: 30
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "がむしゃらなげ",
			'zh-tw': "蠻幹上投",
			th: "ทุ่มบ้าระห่ำ",
			ko: "죽기살기로 던지기",
			id: "Lempar Mati-matian"
		},

		damage: "90+",

		effect: {
			ja: "自分のサイドの残り枚数が、相手のサイドの残り枚数より多いなら、90ダメージ追加。",
			'zh-tw': "若自己剩餘獎賞卡的張數，比對手剩餘獎賞卡的張數多，則增加90點傷害。",
			th: "ถ้าจำนวนการ์ดรางวัลที่เหลือของฝ่ายเรา มากกว่าจำนวนการ์ดรางวัลที่เหลือของฝ่ายตรงข้าม การโจมตีนี้จะเพิ่มแดเมจอีก 90",
			ko: "자신의 남은 프라이즈 장수가 상대의 남은 프라이즈 장수보다 많다면 90데미지를 추가한다.",
			id: "Jika sisa Kartu Point sendiri lebih banyak dari sisa Kartu Point lawan, kerusakan yang diberikan bertambah sejumlah 90."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719580
	}
}

export default card