import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "キルリア",
		'zh-tw': "奇魯莉安",
		th: "เคอเรีย",
		ko: "킬리아",
		id: "Kirlia"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [281],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "サイコパワーを 操り まわりの 空間を ねじ曲げることで 未来を 見通すことができる。",
		'zh-tw': "能夠操縱精神力量來扭曲周圍的空間， 讓自己看見未來。",
		th: "สามารถมองเห็นอนาคตได้โดยการบิดเบือนมิติรอบ ๆ ด้วยพลังจิต",
		ko: "사이코 파워를 조작해 주변의 공간을 일그러뜨려 미래를 내다볼 수 있다.",
		id: "Dengan membengkokkan dimensi ruang di sekitarnya menggunakan kekuatan psikokinesis, Kirlia dapat melihat masa depan."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "マジカルショット",
			'zh-tw': "魔法射擊",
			th: "เมจิคัลช็อต",
			ko: "매지컬숏",
			id: "Magical Shot"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			ja: "サイコキネシス",
			'zh-tw': "精神強念",
			th: "ไซโคคิเนซิส",
			ko: "사이코키네시스",
			id: "Psikis"
		},

		damage: "60+",

		effect: {
			ja: "相手のバトルポケモンについているエネルギーの数×20ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×20點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x20",
			ko: "상대의 배틀 포켓몬에게 붙어 있는 에너지의 개수 × 20데미지를 추가한다.",
			id: "Kerusakan yang diberikan bertambah sejumlah 20 untuk tiap Energi yang dikenakan pada Pokémon Bertarung lawan."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 692993
	}
}

export default card