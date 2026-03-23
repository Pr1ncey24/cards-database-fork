import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ガーディ",
		'zh-tw': "卡蒂狗",
		th: "การ์ดี",
		ko: "가디",
		id: "Growlithe"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [58],
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "自分より 強くて 大きな 相手にも 恐れずに 立ち向かう 勇敢で 頼もしい 性格。",
		'zh-tw': "能毫不畏懼地去對抗比自己更強更大的對手。 性格非常勇敢可靠。",
		th: "มีนิสัยที่พึ่งพาได้ด้วยความกล้ายืนหยัดสู้โดยไม่กลัวคู่ต่อสู้ที่แข็งแกร่งและใหญ่กว่าตัวเอง",
		ko: "자신보다 강하고 큰 상대라도 겁 없이 맞서는 용감하고 믿음직스런 성격이다.",
		id: "Growlithe memiliki kepribadian pemberani dan dapat diandalkan, tidak takut untuk menghadapi lawan yang lebih kuat dan lebih besar dari dirinya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "じょうはつ",
			'zh-tw': "蒸發",
			th: "ระเหย",
			ko: "증발",
			id: "Menguapkan"
		},

		damage: 10,

		effect: {
			ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的【水】能量，將其丟棄。",
			th: "เลือกพลังงาน[น้ำ]ที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			ko: "상대의 배틀 포켓몬에게 붙어 있는 물 에너지를 1개 선택해서 트래쉬한다.",
			id: "Pilih 1 Energi {Air} yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719500
	}
}

export default card