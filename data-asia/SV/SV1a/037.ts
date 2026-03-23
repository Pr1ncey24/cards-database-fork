import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ブーピッグ",
		'zh-tw': "噗噗豬",
		th: "บูพิก",
		ko: "피그킹",
		id: "Grumpig"
	},

	illustrator: "Scav",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [326],
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "相手を 操るときの 不思議な ステップは 昔 外国で 大流行したことが ある。",
		'zh-tw': "操縱對手時跳的奇異舞步，過去曾在外國掀起過 一陣風潮。",
		th: "ท่าเต้นแปลก ๆ ตอนที่จะบงการอีกฝ่ายนั้นเคยเป็นที่นิยมในต่างแดนเมื่อนานมาแล้ว",
		ko: "상대를 조종할 때 사용하는 이상한 스텝은 옛날에 외국에서 크게 유행했던 적이 있다.",
		id: "Gerakan dansa unik Grumpig ketika ia sedang mengontrol lawan pernah menjadi tren besar di luar negeri."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "パワーステップ",
			'zh-tw': "力量舞步",
			th: "พาวเวอร์สเต็ป",
			ko: "파워스텝",
			id: "Power Step"
		},

		effect: {
			ja: "自分の山札から基本エネルギーを2枚まで選び、自分のポケモンに好きなようにつける。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多2張基本能量卡，以任意方式附於自己的寶可夢身上。並且重洗牌庫。",
			th: "เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอนฝ่ายเราตามชอบ แล้วสับสำรับการ์ด",
			ko: "자신의 덱에서 기본 에너지를 2장까지 선택해서 자신의 포켓몬에게 원하는 대로 붙인다. 그리고 덱을 섞는다.",
			id: "Pilih paling banyak 2 lembar Energi Dasar dari Deck sendiri, lalu kenakan sesukanya pada Pokémon sendiri. Kemudian, kocok Deck."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "しねんのずつき",
			'zh-tw': "意念頭錘",
			th: "ท่าโขกหัวพลังจิต",
			ko: "사념의박치기",
			id: "Sundulan Spiritual"
		},

		damage: 100
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
		cardmarket: 701091
	}
}

export default card