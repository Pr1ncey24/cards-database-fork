import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ウツドン",
		'zh-tw': "口呆花",
		th: "อุซึดง",
		ko: "우츠동",
		id: "Weepinbell"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	dexId: [70],
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "まず 毒の粉を 吐き 相手の 動きを 止めてしまってから 溶解液で とどめを 刺す。",
		'zh-tw': "會先吐出有毒的粉末， 讓對手停止行動後， 再用溶解液解決對手。",
		th: "ก่อนอื่นจะพ่นผงพิษหยุดการเคลื่อนไหวของฝ่ายตรงข้ามไว้ก่อน แล้วปิดท้ายด้วยของเหลวทำละลาย",
		ko: "우선 독가루를 뿌려 상대의 움직임을 멈추게 하고 나서 용해액으로 숨통을 끊는다.",
		id: "Weepinbell terlebih dahulu menyemburkan bubuk beracun untuk menghentikan gerakan lawan, lalu menghabisinya menggunakan cairan pelebur."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "いあいぎり",
			'zh-tw': "居合斬",
			th: "ตัด",
			ko: "풀베기",
			id: "Potongan Iai"
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "しるをとばす",
			'zh-tw': "噴汁",
			th: "ฉีดพ่นน้ำ",
			ko: "분비액뿜기",
			id: "Menyemprotkan Getah"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719512
	}
}

export default card