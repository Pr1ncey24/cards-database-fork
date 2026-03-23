import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ラウドボーンex",
		'zh-tw': "骨紋巨聲鱷ex",
		th: "ลาวด์โบนex",
		ko: "라우드본 ex",
		id: "Skeledirge ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 340,
	types: ["Fire"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "かつりょくのうた",
			'zh-tw': "活力之歌",
			th: "บทเพลงเปี่ยมพลัง",
			ko: "활력의노래",
			id: "Lagu Vitalitas"
		},

		damage: 50,

		effect: {
			ja: "自分のポケモン全員のHPを、それぞれ「30」回復する。",
			'zh-tw': "將自己的所有寶可夢各恢復「30」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนฝ่ายเราทุกตัว ตัวละ [30]",
			ko: "자신의 포켓몬 전원의 HP를 각각 「30」회복한다.",
			id: "Pulihkan HP semua Pokémon sendiri masing-masing sejumlah 30."
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			ja: "バーニングボイス",
			'zh-tw': "燃燒之聲",
			th: "เบิร์นนิงวอยซ์",
			ko: "버닝보이스",
			id: "Burning Voice"
		},

		damage: "270-",

		effect: {
			ja: "このポケモンにのっているダメカンの数×10ダメージぶん、このワザのダメージは小さくなる。",
			'zh-tw': "減少這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
			th: "แดเมจของท่าต่อสู้นี้จะลดลง ตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x10",
			ko: "이 포켓몬에게 올려져 있는 데미지 카운터의 수 × 10데미지만큼 이 기술의 데미지는 작아진다.",
			id: "Kerusakan akibat serangan ini berkurang sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card