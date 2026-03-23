import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "フシギバナex",
		'zh-tw': "妙蛙花ex",
		th: "ฟุชิกิบานะex",
		ko: "이상해꽃 ex",
		id: "Venusaur ex"
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 340,
	types: ["Grass"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "やすらぎのはな",
			'zh-tw': "平和之花",
			th: "ดอกไม้สงบใจ",
			ko: "평온의 꽃",
			id: "Bunga Ketenangan"
		},

		effect: {
			ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分のポケモン1匹のHPを「60」回復する。",
			'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。將自己的1隻寶可夢恢復「60」HP。",
			th: "ถ้าโปเกมอนนี้อยู่บนตำแหน่งต่อสู้ ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ฟื้นฟู HP ของโปเกมอนฝ่ายเรา 1 ตัว [60]",
			ko: "이 포켓몬이 배틀필드에 있다면 자신의 차례에 1번 사용할 수 있다. 자신의 포켓몬 1마리의 HP를 「60」회복한다.",
			id: "Dapat digunakan 1 kali pada giliran sendiri jika Pokémon ini ada di Arena Bertarung. Pulihkan HP 1 Pokémon sendiri sejumlah 60."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "もうどくウィップ",
			'zh-tw': "劇毒鞭打",
			th: "แส้พิษร้ายแรง",
			ko: "맹독휩",
			id: "Cambuk Racun Ekstrem"
		},

		damage: 150,

		effect: {
			ja: "相手のバトルポケモンをどくとこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】與【混亂】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]และ[สับสน]",
			ko: "상대의 배틀 포켓몬을독과혼란으로 만든다.",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun dan Pusing."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719445
	}
}

export default card