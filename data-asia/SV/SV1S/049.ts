import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "イダイナキバex",
		'zh-tw': "雄偉牙ex",
		th: "งายักษ์ex",
		ko: "위대한엄니 ex",
		id: "Great Tusk ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 250,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "がんばんくずし",
			'zh-tw': "岩盤崩裂",
			th: "ทำลายฐานราก",
			ko: "암반허물기",
			id: "Peruntuh Batuan Dasar"
		},

		damage: 40,

		effect: {
			ja: "場に出ているスタジアムをトラッシュする。",
			'zh-tw': "將場上的競技場卡丟棄。",
			th: "ทิ้งการ์ดสเตเดียมที่วางอยู่บนกระดานที่ตำแหน่งทิ้งการ์ด",
			ko: "필드에 나와 있는 스타디움을 트래쉬한다.",
			id: "Buang Stadium yang ada di Arena ke Trash."
		}
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			ja: "ギガントタスク",
			'zh-tw': "巨烈長牙",
			th: "ปฏิบัติการใหญ่",
			ko: "기간트터스크",
			id: "Gigant Tusk"
		},

		damage: 250,

		effect: {
			ja: "このポケモンにも50ダメージ。",
			'zh-tw': "這隻寶可夢也受到50點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 50 ด้วย",
			ko: "이 포켓몬에게도 50데미지를 준다.",
			id: "Pokémon ini juga menerima kerusakan sejumlah 50."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card