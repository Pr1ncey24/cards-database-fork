import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "サンド",
		'zh-tw': "穿山鼠",
		th: "แซนด์",
		ko: "모래두지",
		id: "Sandshrew"
	},

	illustrator: "kodama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [27],
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "地面を 掘って 巣穴を つくる。 地中の 硬い 岩も 鋭い ツメで 砕いて 掘り進むぞ。",
		'zh-tw': "會在地面挖洞築巢。即使遇到地下堅硬的岩石， 也會用銳利的爪子擊碎並向前挖進。",
		th: "จะขุดลงไปใต้พื้นดินเพื่อสร้างรัง ถึงจะเป็นหินแข็งที่อยู่ใต้ดิน ก็จะใช้กรงเล็บคมเจาะจนแตกเป็นผุยผงแล้วขุดลงไปต่อ",
		ko: "땅을 파서 굴을 만든다. 땅속의 단단한 바위도 날카로운 발톱으로 부수며 파고들어 간다.",
		id: "Sandshrew menggali permukaan tanah untuk membuat sarang. Pokémon ini terus menggali sambil menghancurkan batu keras di dalam tanah menggunakan cakar tajamnya."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "すなでかくす",
			'zh-tw': "流沙藏身",
			th: "ซุกซ่อนด้วยทราย",
			ko: "모래로 감추기",
			id: "Sembunyikan di Pasir"
		},

		effect: {
			ja: "このポケモンがいるかぎり、相手のトラッシュにあるトレーナーズは、相手のグッズまたはサポートの効果で、山札にもどせない。",
			'zh-tw': "只要這隻寶可夢在場上，對手的棄牌區的訓練家卡，無法因對手的物品卡或者支援者卡的效果而放回牌庫。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ การ์ดเทรนเนอร์ที่อยู่บนตำแหน่งทิ้งการ์ดฝ่ายตรงข้าม จะนำใส่กลับไปในสำรับการ์ด ด้วยเอฟเฟกต์ของการ์ดไอเท็มหรือการ์ดซัพพอร์ตของฝ่ายตรงข้ามไม่ได้",
			ko: "이 포켓몬이 있는 한, 상대의 트래쉬에 있는 트레이너스는 상대의 아이템 또는 서포트의 효과로 덱으로 되돌릴 수 없다.",
			id: "Selama Pokémon ini ada di Arena, Trainer yang ada di Trash lawan tidak dapat dikembalikan ke Deck menggunakan efek Item atau Supporter lawan."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ひっかく",
			'zh-tw': "抓",
			th: "ข่วน",
			ko: "",
			id: "Menggaruk"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719469
	}
}

export default card