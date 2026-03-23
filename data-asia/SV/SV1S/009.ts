import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "コータス",
		'zh-tw': "煤炭龜",
		th: "โคทอยซ์",
		ko: "코터스",
		id: "Torkoal"
	},

	illustrator: "Kurata So",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [324],
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "甲羅の 内側で 石炭を 燃やし 敵に 襲われると 黒い煙を まき散らして 逃げる。",
		'zh-tw': "會在甲殼的內側燃燒煤炭。遭受到敵人攻擊時， 會噴灑黑煙然後逃走。",
		th: "เผาไหม้ถ่านหินภายในกระดอง พอถูกศัตรูจู่โจมจะพ่นควันดำแล้วหนี",
		ko: "등껍질 안에서 석탄을 태운다. 적에게 공격받으면 검은 연기를 흩뿌리고 도망친다.",
		id: "Torkoal membakar batu bara di dalam tempurungnya. Ketika diserang oleh musuhnya, Pokémon ini menyemburkan asap hitam dan melarikan diri."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ふむ",
			'zh-tw': "踩",
			th: "เหยียบ",
			ko: "밟기",
			id: "Menginjak"
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			ja: "しゅうちゅうほうか",
			'zh-tw': "集中砲火",
			th: "ระดมยิง",
			ko: "집중포화",
			id: "Tembakan Terkonsentrasi"
		},

		damage: "80×",

		effect: {
			ja: "このポケモンについているエネルギーの数ぶんコインを投げ、オモテの数×80ダメージ。",
			'zh-tw': "擲與這隻寶可夢身上附加的【火】能量的數量相同次數的硬幣，造成正面出現的次數×80點傷害。",
			th: "ทอยเหรียญตามจำนวนพลังงาน[ไฟ]ที่ติดอยู่กับโปเกมอนนี้ แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x80",
			ko: "이 포켓몬에게 붙어 있는(불꽃)에너지의 개수만큼 동전을 던져서 앞면이 나온 수 × 80데미지를 준다.",
			id: "Lempar koin untuk tiap Energi {Api} yang dikenakan pada Pokémon ini. Serangan ini memberikan kerusakan sejumlah 80 untuk tiap lemparan dengan hasil sisi depan."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 692975
	}
}

export default card