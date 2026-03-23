import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ウェーニバルex",
		'zh-tw': "狂歡浪舞鴨ex",
		th: "เวนิวัลex",
		ko: "웨이니발 ex",
		id: "Quaquaval ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "エキサイトサンバ",
			'zh-tw': "激動森巴",
			th: "เอ็กซ์ไซต์แซมบา",
			ko: "익사이팅삼바",
			id: "Excite Samba"
		},

		damage: 60,

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。その後、相手は相手自身のバトルポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。然後，對手將對手自己的戰鬥寶可夢與備戰寶可夢互換。",
			th: "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์ หลังจากนั้น ฝ่ายตรงข้ามสลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเองกับโปเกมอนบนเบนช์",
			ko: "이 포켓몬을 벤치 포켓몬과 교체한다. 그 뒤, 상대는 상대 자신의 배틀 포켓몬을 벤치 포켓몬과 교체한다.",
			id: "Tukar Pokémon ini dengan Pokémon Cadangan. Setelah itu, lawan menukar Pokémon Bertarungnya dengan Pokémon Cadangan."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "スクリューシュート",
			'zh-tw': "螺旋射擊",
			th: "สกรูชูต",
			ko: "스크루슛",
			id: "Screw Shoot"
		},

		damage: 230,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、手札にもどす。",
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，放回手牌。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูก นำกลับขึ้นมือ",
			ko: "이 포켓몬에게 붙어 있는 에너지를 2개 선택해서 패로 되돌린다.",
			id: "Pilih 2 Energi yang dikenakan pada Pokémon ini, lalu kembalikan ke Kartu Pegangan."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card