import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴローニャex",
		'zh-tw': "隆隆岩ex",
		th: "โกโลเนียex",
		ko: "딱구리 ex",
		id: "Golem ex"
	},

	illustrator: "Uta",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ダイナミックロール",
			'zh-tw': "極限轉動",
			th: "ไดนามิกโรล",
			ko: "다이내믹롤",
			id: "Dynamic Roll"
		},

		damage: 50,

		effect: {
			ja: "次の自分の番、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+120」される。",
			'zh-tw': "在下個自己的回合，這隻寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+120」點。",
			th: "เทิร์นถัดไปของฝ่ายเรา แดเมจของท่าต่อสู้ที่โปเกมอนนี้ ใช้ทำกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามจะถูก [+120]",
			ko: "자신의 다음 차례에 이 포켓몬이 사용하는 기술이 상대의 배틀 포켓몬에게 주는 데미지는 「+120」이 된다.",
			id: "Pada giliran sendiri berikutnya, kerusakan akibat serangan yang digunakan oleh Pokémon ini kepada Pokémon Bertarung lawan bertambah sejumlah 120."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "がんせきボンバー",
			'zh-tw': "岩石衝撞",
			th: "ระเบิดหิน",
			ko: "암석봄버",
			id: "Bom Batu"
		},

		damage: 180,

		effect: {
			ja: "このワザのダメージは抵抗力を計算しない。",
			'zh-tw': "這個招式的傷害不計算抵抗力。",
			th: "แดเมจของท่าต่อสู้นี้จะไม่นำความต้านทานมาคิด",
			ko: "이 기술의 데미지는 저항력 계산을 하지 않는다.",
			id: "Kerusakan akibat serangan ini tidak terpengaruh oleh Resistansi."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719518
	}
}

export default card