import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "デデンネex",
		'zh-tw': "咚咚鼠ex",
		th: "เดเด็นเนะex",
		ko: "데덴네 ex",
		id: "Dedenne ex"
	},

	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "テールスワップ",
			'zh-tw': "長尾置換",
			th: "หางสลับ",
			ko: "테라스탈",
			id: "Tail Swap"
		},

		effect: {
			ja: "自分のベンチポケモンを1匹選び、選んだポケモンにのっているダメカンをすべて、相手のバトルポケモンにのせ替える。",
			'zh-tw': "選擇1隻自己的備戰寶可夢，將所選的寶可夢身上放置的傷害指示物，全部改放於對手的戰鬥寶可夢身上。",
			th: "เลือกโปเกมอนบนเบนช์ฝ่ายเรา 1 ตัว ย้ายตัวนับแดเมจที่วางอยู่บนโปเกมอนที่เลือกทั้งหมด ไปวางที่โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม",
			ko: "이 포켓몬은 벤치에 있는 한, 기술의 데미지를 받지 않는다.",
			id: "Pilih 1 Pokémon Cadangan sendiri, lalu pindahkan semua Token Kerusakan yang dimiliki Pokémon yang telah dipilih ke Pokémon Bertarung lawan."
		}
	}, {
		cost: ["Psychic", "Psychic", "Psychic"],

		name: {
			ja: "ワンダーショット",
			'zh-tw': "奇跡射擊",
			th: "วันเดอร์ช็อต",
			ko: "테일스왑",
			id: "Wonder Shot"
		},

		damage: 170,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			ko: "자신의 벤치 포켓몬을 1마리 선택해서 선택한 포켓몬에게 올려져 있는 데미지 카운터를 모두 상대의 배틀 포켓몬에게 올린다.",
			id: "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 701092
	}
}

export default card