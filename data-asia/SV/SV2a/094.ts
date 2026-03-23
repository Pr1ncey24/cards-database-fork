import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゲンガー",
		'zh-tw': "耿鬼",
		th: "เก็งกา",
		ko: "팬텀",
		id: "Gengar"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [94],
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "命を 奪おうと 決めた 獲物の 影に 潜り込み じっと チャンスを 狙ってる。",
		'zh-tw': "會潛進獵物的影子裡，然後靜靜地等待 奪取性命的機會到來。",
		th: "เข้าไปในเงาของเหยื่อที่เล็งไว้ แล้วรอโอกาสปลิดชีพ",
		ko: "생명을 빼앗기로 정한 먹잇감의 그림자에 숨어들어 꼼짝하지 않고 기회를 노린다.",
		id: "Untuk merebut nyawa targetnya, Gengar menyelinap ke dalam bayangan targetnya, dan terus terdiam menunggu kesempatan."
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ポルターガイスト",
			'zh-tw': "靈騷",
			th: "โพลเตอร์ไกสท์",
			ko: "폴터가이스트",
			id: "Poltergeist"
		},

		damage: "50×",

		effect: {
			ja: "相手の手札を見て、その中にあるトレーナーズの枚数×50ダメージ。",
			'zh-tw': "查看對手的手牌，造成其中訓練家卡的張數×50點傷害。",
			th: "ดูการ์ดบนมือฝ่ายตรงข้าม แดเมจจะเท่ากับจำนวนการ์ดเทรนเนอร์ที่อยู่ในนั้น x50",
			ko: "상대의 패를 보고 그 중에 있는 트레이너스의 장수 × 50데미지를 준다.",
			id: "Lihat Kartu Pegangan lawan, serangan ini memberikan kerusakan sejumlah 50 untuk tiap lembar Trainer yang ada di antaranya."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ホロウダイブ",
			'zh-tw': "陰森奇襲",
			th: "ฮอลโลว์ไดฟ์",
			ko: "할로우다이브",
			id: "Hollow Dive"
		},

		damage: 110,

		effect: {
			ja: "ダメカン3個を、相手のベンチポケモンに好きなようにのせる。",
			'zh-tw': "將3個傷害指示物以任意方式放置於對手的備戰寶可夢身上。",
			th: "วางตัวนับแดเมจ 3 ตัว บนโปเกมอนบนเบนช์ฝ่ายตรงข้ามตามชอบ",
			ko: "데미지 카운터 3개를 상대의 벤치 포켓몬에게 원하는 대로 올린다.",
			id: "Letakkan sejumlah 3 Token Kerusakan pada Pokémon Cadangan lawan sesukanya."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719547
	}
}

export default card