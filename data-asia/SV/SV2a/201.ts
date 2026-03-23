import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "リザードンex",
		'zh-tw': "噴火龍ex",
		th: "ลิซาร์ดอนex",
		ko: "리자몽 ex",
		id: "Charizard ex"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	rarity: "Special illustration rare",
	hp: 330,
	types: ["Fire"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ブレイブウイング",
			'zh-tw': "無畏之翼",
			th: "เบรฟวิง",
			ko: "브레이브윙",
			id: "Brave Wing"
		},

		damage: "60+",

		effect: {
			ja: "このポケモンにダメカンがのっているなら、100ダメージ追加。",
			'zh-tw': "若這隻寶可夢身上放置有傷害指示物，則增加100點傷害。",
			th: "ถ้าโปเกมอนนี้มีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 100",
			ko: "이 포켓몬에게 데미지 카운터가 올려져 있다면 100데미지를 추가한다.",
			id: "Jika Pokémon ini memiliki Token Kerusakan, kerusakan yang diberikan bertambah sejumlah 100."
		}
	}, {
		cost: ["Fire", "Fire", "Fire", "Fire"],

		name: {
			ja: "ばくえんのうず",
			'zh-tw': "爆焰旋渦",
			th: "วงล้อระเบิดไฟ",
			ko: "폭염회오리",
			id: "Pusaran Ledakan Api"
		},

		damage: 330,

		effect: {
			ja: "このポケモンについているエネルギーを3個選び、トラッシュする。",
			'zh-tw': "選擇3個這隻寶可夢身上附加的能量，將其丟棄。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 3 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			ko: "이 포켓몬에게 붙어 있는 에너지를 3개 선택해서 트래쉬한다.",
			id: "Pilih 3 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719448
	}
}

export default card