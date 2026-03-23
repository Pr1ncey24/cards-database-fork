import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ラプラス",
		'zh-tw': "拉普拉斯",
		th: "ลาพลาซ",
		ko: "라프라스",
		id: "Lapras"
	},

	illustrator: "LINNE",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [131],
	hp: 110,
	types: ["Water"],

	description: {
		ja: "寒さに 強く 氷の 海も 平気。 皮膚は スベスベで 少しだけ ひんやり しているよ。",
		'zh-tw': "十分耐寒，不畏冰海。皮膚滑滑的， 摸起來會有點涼。",
		th: "ทนทานความหนาวเย็นแม้ทะเลน้ำแข็งก็ไม่เป็นไร ผิวหนังเรียบลื่นทำให้รู้สึกเย็นเล็กน้อย",
		ko: "추위에 강해서 얼음 바다에서도 끄떡없다. 피부는 매끈매끈하고 조금 차갑다.",
		id: "Lapras tahan dingin dan laut es pun tidak menjadi masalah baginya. Kulitnya mulus dan agak dingin."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "せなかにのせる",
			'zh-tw': "後背乘載",
			th: "ให้ขี่หลัง",
			ko: "등에태우기",
			id: "Letakkan ke Punggung"
		},

		effect: {
			ja: "自分の山札からポケモンを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多2張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
			th: "เลือกการ์ดโปเกมอนได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			ko: "자신의 덱에서 포켓몬을 2장까지 선택해서 상대에게 보여주고 패로 가져온다. 그리고 덱을 섞는다.",
			id: "Pilih paling banyak 2 lembar Pokémon dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "アクアエッジ",
			'zh-tw': "水之刀鋒",
			th: "อควาเอดจ์",
			ko: "아쿠아에지",
			id: "Aqua Edge"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719584
	}
}

export default card