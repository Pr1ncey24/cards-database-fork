import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ギャラドス",
		'zh-tw': "暴鯉龍",
		th: "เกียราดอส",
		ko: "갸라도스",
		id: "Gyarados"
	},

	illustrator: "Yuya Oka",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [130],
	hp: 180,
	types: ["Water"],

	description: {
		ja: "一度 姿を 現すと まわりを すべて 焼き尽くさないと 怒りが 鎮まらない という。",
		'zh-tw': "據說暴鯉龍一旦現身，如果不把周圍的一切都 燃燒殆盡，怒火就不會平息。",
		th: "ว่ากันว่า เมื่อปรากฏตัวออกมาครั้งหนึ่งแล้ว ถ้าไม่ได้ทำลายทุกอย่างโดยรอบให้ราบเป็นหน้ากลองก็จะไม่หายโกรธ",
		ko: "한번 모습을 나타내면 주변 전체를 태워 버리지 않고는 분노가 가라앉지 않는다고 전해진다.",
		id: "Gyarados langsung mengamuk begitu muncul. Dikabarkan amukan Pokémon ini tidak akan mereda hingga ia membumihanguskan sekitarnya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "リベンジストーム",
			'zh-tw': "復仇風暴",
			th: "รีเวนจ์สตอร์ม",
			ko: "리벤지스톰",
			id: "Revenge Storm"
		},

		damage: "80+",

		effect: {
			ja: "自分のサイドの残り枚数が、相手のサイドの残り枚数より多いなら、100ダメージ追加。",
			'zh-tw': "若自己剩餘獎賞卡的張數，比對手剩餘獎賞卡的張數多，則增加100點傷害。",
			th: "ถ้าจำนวนการ์ดรางวัลที่เหลือของฝ่ายเรา มากกว่าจำนวนการ์ดรางวัลที่เหลือของฝ่ายตรงข้าม การโจมตีนี้จะเพิ่มแดเมจอีก 100",
			ko: "자신의 남은 프라이즈 장수가 상대의 남은 프라이즈 장수보다 많다면 100데미지를 추가한다.",
			id: "Jika sisa Kartu Point sendiri lebih banyak dari sisa Kartu Point lawan, kerusakan yang diberikan bertambah sejumlah 100."
		}
	}, {
		cost: ["Water", "Water", "Colorless", "Colorless"],

		name: {
			ja: "あばれタックル",
			'zh-tw': "暴亂衝撞",
			th: "กระแทกบ้าคลั่ง",
			ko: "난동태클",
			id: "Tubrukan Mengamuk"
		},

		damage: 200,

		effect: {
			ja: "このポケモンにも50ダメージ。",
			'zh-tw': "這隻寶可夢也受到50點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 50 ด้วย",
			ko: "이 포켓몬에게도 50데미지를 준다.",
			id: "Pokémon ini juga menerima kerusakan sejumlah 50."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 701077
	}
}

export default card