import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "サボネア",
		'zh-tw': "刺球仙人掌",
		th: "ซาโบเนีย",
		ko: "선인왕",
		id: "Cacnea"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [331],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "砂漠などの 過酷な 環境を 好む。 体内に 蓄えた 水で ３０日間 生きられる。",
		'zh-tw': "喜歡沙漠等嚴酷環境。能靠體內儲存的水分 存活３０天。",
		th: "ชอบอยู่ในสภาพแวดล้อมที่โหดร้าย เช่น ทะเลทราย น้ำที่สะสมในร่างกายสามารถหล่อเลี้ยงชีวิตให้อยู่ได้ 30 วัน",
		ko: "사막 같은 혹독한 환경을 좋아한다. 몸속에 축적된 물로 30일간 살 수 있다.",
		id: "Cacnea menyukai lingkungan yang keras seperti padang pasir dan lainnya. Pokémon ini dapat hidup selama 30 hari hanya dengan air yang ditampung di dalam tubuhnya."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "はんげきばり",
			'zh-tw': "反擊針",
			th: "หนามโต้กลับ",
			ko: "반격가시",
			id: "Jarum Serangan Balasan"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを3個のせる。",
			'zh-tw': "這隻寶可夢在戰鬥場受到對手的寶可夢招式的傷害時，在使用招式的寶可夢身上放置3個傷害指示物。",
			th: "เมื่อโปเกมอนนี้ อยู่บนตำแหน่งต่อสู้และได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้าม วางตัวนับแดเมจ 3 ตัวบนโปเกมอนที่ใช้ท่าต่อสู้",
			ko: "이 포켓몬이 배틀필드에서 상대의 포켓몬으로부터 기술의 데미지를 받았을 때 기술을 사용한 포켓몬에게 데미지 카운터를 3개 올린다.",
			id: "Saat Pokémon ini ada di Arena Bertarung dan menerima kerusakan akibat serangan dari Pokémon lawan, letakkan 3 Token Kerusakan pada Pokémon yang telah menggunakan serangan."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "なぐる",
			'zh-tw': "打擊",
			th: "ทุบตี",
			ko: "치기",
			id: "Memukul"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 692967
	}
}

export default card