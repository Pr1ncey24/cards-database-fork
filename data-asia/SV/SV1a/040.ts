import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "カヌチャン",
		'zh-tw': "小鍛匠",
		th: "คานุจัง",
		ko: "어리짱",
		id: "Tinkatink"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	dexId: [957],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "手作りの ハンマーを 振りまわして 身を 守るが 金属を 食べる ポケモンには よく 奪われる。",
		'zh-tw': "雖然會揮舞著手工打造的錘子來保護自己，但卻常被 以金屬為食的寶可夢搶走。",
		th: "เหวี่ยงค้อนทำมือเพื่อป้องกันตัว แต่มักถูกโปเกมอนที่กินโลหะแย่งไป",
		ko: "손수 만든 해머를 휘둘러 몸을 지키려 하나 금속을 먹는 포켓몬에게 자주 빼앗기고 만다.",
		id: "Tinkatink mengayunkan palu buatannya untuk melindungi dirinya, namun palu tersebut sering direbut oleh Pokémon pemakan logam."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "もってくる",
			'zh-tw': "呼喚",
			th: "รวบรวม",
			ko: "가져오기",
			id: "Mengumpulkan"
		},

		effect: {
			ja: "自分の山札を1枚引く。",
			'zh-tw': "從自己的牌庫抽出1張卡。",
			th: "จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา",
			ko: "자신의 덱을 1장 뽑는다.",
			id: "Ambil 1 kartu dari atas Deck sendiri."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "どつく",
			'zh-tw': "推擊",
			th: "ต่อยตี",
			ko: "쥐어박기",
			id: "Menohok"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card