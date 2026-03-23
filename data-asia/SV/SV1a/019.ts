import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "アチゲータ",
		'zh-tw': "炙燙鱷",
		th: "อาจิเกเตอร์",
		ko: "악뜨거",
		id: "Crocalor"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	dexId: [910],
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "炎エネルギーと 有り余る 生命力が 交じり 頭上に タマゴ型の 火玉が 現れた。",
		'zh-tw': "火之能量與過剩的生命力相互結合，使得牠頭上 出現了蛋狀的火球。",
		th: "พลังงานไฟและพลังชีวิตที่มากล้นนั้นผสมผสานกันทำให้เกิดลูกไฟรูปไข่ขึ้นเหนือหัว",
		ko: "불꽃 에너지와 남아도는 생명력이 섞여서 머리 위에 알 모양의 불덩이가 생겨났다.",
		id: "Bola api berbentuk telur yang muncul di kepala Crocalor terbentuk oleh campuran energi api dan vitalitasnya yang melimpah."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ひをはく",
			'zh-tw': "吐火",
			th: "พ่นอัคคี",
			ko: "불토하기",
			id: "Memuntahkan Api"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire"],

		name: {
			ja: "ハイパーボイス",
			'zh-tw': "巨聲",
			th: "ไฮเปอร์วอยซ์",
			ko: "하이퍼보이스",
			id: "Hyper Voice"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card