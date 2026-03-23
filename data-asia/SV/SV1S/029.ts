import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "フワンテ",
		'zh-tw': "飄飄球",
		th: "ฟูวันเต",
		ko: "흔들풍손",
		id: "Drifloon"
	},

	illustrator: "Taira Akitsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [425],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "風船と 間違えて フワンテを 持っていた 小さな 子どもが 消えてしまうことが あるという。",
		'zh-tw': "據說有些因為誤認成氣球，而把牠拿在手上的小孩， 會就此消失無蹤。",
		th: "ว่ากันว่า เด็กน้อยที่ถือฟูวันเตไว้เพราะเข้าใจผิดคิดว่ามันเป็นลูกโป่งนั้น อาจจะหายตัวไปได้",
		ko: "풍선으로 착각해 흔들풍손을 가지고 있었던 어린아이가 사라지는 경우가 있다고 한다.",
		id: "Dikabarkan ada kejadian menghilangnya anak kecil yang menyangka Drifloon sebagai balonnya dan membawanya pergi."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かぜおこし",
			'zh-tw': "起風",
			th: "เรียกลม",
			ko: "바람일으키기",
			id: "Hembusan Angin"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "バルーンボム",
			'zh-tw': "氣球爆破",
			th: "บอลลูนบอมบ์",
			ko: "벌룬봄",
			id: "Balloon Bomb"
		},

		damage: "30×",

		effect: {
			ja: "このポケモンにのっているダメカンの数×30ダメージ。",
			'zh-tw': "造成這隻寶可夢身上放置的傷害指示物的數量×30點傷害。",
			th: "แดเมจจะเท่ากับจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x30",
			ko: "이 포켓몬에게 올려져 있는 데미지 카운터의 수 × 30데미지를 준다.",
			id: "Serangan ini memberikan kerusakan sejumlah 30 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
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
		cardmarket: 692995
	}
}

export default card