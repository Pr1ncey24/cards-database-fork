import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤドラン",
		'zh-tw': "呆殼獸",
		th: "ยาโดรัน",
		ko: "야도란",
		id: "Slowbro"
	},

	illustrator: "OKACHEKE",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [80],
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "ヤドンが 海へ エサを 取りにいったとき シェルダーに 尻尾を かまれ ヤドランになった。",
		'zh-tw': "呆呆獸去海裡捕食時，被大舌貝咬住了尾巴， 於是就變成了呆殼獸。",
		th: "ยาดงโดนเชลเดอร์งับหางตอนออกไปหาอาหารแถวทะเลจนกลายเป็นยาโดรัน",
		ko: "야돈이 바다로 먹이를 잡으러 갔다가 셀러에게 꼬리를 물려 야도란이 되었다.",
		id: "Ketika Slowpoke sedang mencari makan di laut, ekornya digigit oleh Shellder, lalu ia berevolusi menjadi Slowbro."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "おおあくび",
			'zh-tw': "大哈欠",
			th: "หาวปากกว้าง",
			ko: "큰하품",
			id: "Menguap Lebar"
		},

		effect: {
			ja: "おたがいのバトルポケモンを、それぞれねむりにする。",
			'zh-tw': "將雙方的戰鬥寶可夢【睡眠】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ของทั้งสองฝ่าย แต่ละตัวเป็นสภาวะ[หลับ]",
			ko: "서로의 배틀 포켓몬을 각각 잠듦으로 만든다.",
			id: "Ubah kondisi Pokémon Bertarung kedua pemain masing-masing menjadi Tidur."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "のんびりタックル",
			'zh-tw': "悠哉衝撞",
			th: "กระแทกเรื่อยเฉื่อย",
			ko: "느긋태클",
			id: "Serudukan Perlahan"
		},

		damage: 160,

		effect: {
			ja: "この番、このポケモンに進化していたなら、このワザは失敗。",
			'zh-tw': "在這個回合，若進化成這隻寶可夢，則這個招式失敗。",
			th: "เทิร์นนี้ ถ้าวิวัฒนาการเป็นโปเกมอนนี้แล้ว ท่าต่อสู้นี้จะล้มเหลว",
			ko: "이 차례에 이 포켓몬으로 진화했다면 이 기술은 실패한다.",
			id: "Jika pada giliran ini, Pokémon berevolusi menjadi Pokémon ini, serangan ini gagal."
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

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719522
	}
}

export default card