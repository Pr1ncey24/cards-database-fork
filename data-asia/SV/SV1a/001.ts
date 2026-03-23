import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "トロピウス",
		'zh-tw': "熱帶龍",
		th: "โทรพิอุส",
		ko: "트로피우스",
		id: "Tropius"
	},

	illustrator: "Taira Akitsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [357],
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "熱帯の ジャングルに 生息。 首の フサは 甘くて 美味しい。 １年に ２回 実を つける。",
		'zh-tw': "棲息在熱帶叢林裡。脖子上的果實香甜美味。 每年會結果２次。",
		th: "อาศัยอยู่ในป่าเขตร้อน เครือผลที่คอรสชาติหวานอร่อย 1 ปีจะออกผลแค่ 2 ครั้ง",
		ko: "열대 정글에 서식한다. 목에 달린 송이는 달고 맛있다. 1년에 2번 열매를 맺는다.",
		id: "Tropius hidup di hutan tropis. Tandan di leher Pokémon ini rasanya manis dan lezat, dan berbuah 2 kali dalam 1 tahun."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "リーフドレイン",
			'zh-tw': "綠葉吸取",
			th: "ลีฟเดรน",
			ko: "리프드레인",
			id: "Leaf Drain"
		},

		damage: 20,

		effect: {
			ja: "このポケモンのHPを「20」回復する。",
			'zh-tw': "將這隻寶可夢恢復「20」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [20]",
			ko: "이 포켓몬의 HP를 「20」회복한다.",
			id: "Pulihkan HP Pokémon ini sejumlah 20."
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "なんごくのかぜ",
			'zh-tw': "南國之風",
			th: "สายลมจากแดนใต้",
			ko: "트로피컬바람",
			id: "Angin Tropis"
		},

		damage: 130,

		effect: {
			ja: "このポケモンについているエネルギーをすべて、ベンチポケモン1匹につけ替える。",
			'zh-tw': "將這隻寶可夢身上附加的能量卡，全部改附於1隻備戰寶可夢身上。",
			th: "นำพลังงานที่ติดอยู่กับโปเกมอนนี้ทั้งหมด ย้ายไปติดกับโปเกมอนบนเบนช์ 1 ตัว",
			ko: "이 포켓몬에게 붙어 있는 에너지를 모두 벤치 포켓몬 1마리에게 붙인다.",
			id: "Pindahkan semua Energi yang dikenakan pada Pokémon ini ke 1 Pokémon Cadangan."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 701036
	}
}

export default card