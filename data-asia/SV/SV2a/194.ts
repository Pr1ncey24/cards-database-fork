import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "サンダーex",
		'zh-tw': "閃電鳥ex",
		th: "ธันเดอร์ex",
		ko: "썬더 ex",
		id: "Zapdos ex"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	rarity: "Secret Rare",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ボルトフロート",
			'zh-tw': "伏特浮游",
			th: "โบลต์โฟลต",
			ko: "볼트 플로트",
			id: "Bolt Float"
		},

		effect: {
			ja: "このポケモンにエネルギーがついているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			'zh-tw': "若這隻寶可夢身上附有【雷】能量卡，則這隻寶可夢【撤退】所需的能量全部消除。",
			th: "ถ้าโปเกมอนนี้มีพลังงาน[สายฟ้า]ติดอยู่ พลังงานสำหรับ[หนี]ของโปเกมอนนี้ ทั้งหมดจะหายไป",
			ko: "이 포켓몬에게(번개)에너지가 붙어 있다면 이 포켓몬의후퇴에 필요한 에너지는 모두 없어진다.",
			id: "Jika Pokémon ini mengenakan Energi {Listrik}, Pokémon ini menjadi tidak membutuhkan Energi untuk Mundur."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			ja: "いなずまれんだん",
			'zh-tw': "閃電連彈",
			th: "ฟ้าแลบต่อเนื่อง",
			ko: "라이트닝 연속탄",
			id: "Kilat Bertubi-tubi"
		},

		damage: 120,

		effect: {
			ja: "ダメカンがのっている相手のベンチポケモン1匹にも、90ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的身上放置有傷害指示物的1隻備戰寶可夢也受到90點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัวที่มีตัวนับแดเมจวางอยู่ ก็จะได้รับแดเมจ 90 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			ko: "데미지 카운터가 올려져 있는 상대의 벤치 포켓몬 1마리에게도 90데미지를 준다. (벤치는 약점, 저항력 계산을 하지 않는다.)",
			id: "Serangan ini juga memberikan kerusakan sejumlah 90 kepada 1 Pokémon Cadangan lawan yang memiliki Token Kerusakan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719598
	}
}

export default card