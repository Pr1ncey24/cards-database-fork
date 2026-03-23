import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒトデマン",
		'zh-tw': "海星星",
		th: "ฮิโตเดมัน",
		ko: "별가사리",
		id: "Staryu"
	},

	illustrator: "Arai Kiriko",
	rarity: "Common",
	category: "Pokemon",
	dexId: [120],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "魚ポケモンに ついばまれるが 体が ちぎれても すぐに 再生するので 気にしない。",
		'zh-tw': "會被魚寶可夢啄食，但是即使身體被咬斷也能很快就 再生，所以一點都不在意。",
		th: "ถึงแม้ร่างกายจะโดนโปเกมอนปลาตอดกินจนขาดไปก็ไม่สนใจเพราะจะงอกออกมาใหม่ทันที",
		ko: "물고기포켓몬에게 물리곤 하지만 몸이 찢겨도 금방 재생되기 때문에 신경 쓰지 않는다.",
		id: "Meskipun tubuhnya putus tercabik karena digigit oleh Pokémon ikan, Staryu tidak peduli karena tubuhnya akan segera tumbuh kembali."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "スピードスター",
			'zh-tw': "高速星星",
			th: "สปีดสตาร์",
			ko: "스피드스타",
			id: "Speed Star"
		},

		damage: 30,

		effect: {
			ja: "このワザのダメージは、弱点・抵抗力と、相手のバトルポケモンにかかっている効果を計算しない。",
			'zh-tw': "這個招式的傷害不計算弱點・抵抗力與對手的戰鬥寶可夢身上的附加效果。",
			th: "แดเมจของท่าต่อสู้นี้ จะไม่นำจุดอ่อน ความต้านทาน และเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมาคิด",
			ko: "이 기술의 데미지는 약점, 저항력과 상대의 배틀 포켓몬에게 걸려 있는 효과를 계산하지 않는다.",
			id: "Kerusakan akibat serangan ini tidak terpengaruh oleh Kelemahan, Resistansi, dan efek yang sedang dialami Pokémon Bertarung lawan."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719573
	}
}

export default card