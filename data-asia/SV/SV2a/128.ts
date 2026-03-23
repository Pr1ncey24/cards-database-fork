import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ケンタロス",
		'zh-tw': "肯泰羅",
		th: "เคนเทารอส",
		ko: "켄타로스",
		id: "Tauros"
	},

	illustrator: "Takeshi Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [128],
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "獲物に 狙いを つけると 尻尾で 体を 叩きながら まっすぐ 突っ込んでくる。",
		'zh-tw': "鎖定了獵物之後，就會一邊用尾巴抽打身體， 一邊筆直地衝向目標。",
		th: "เมื่อเล็งเหยื่อ จะใช้หางตีตัวเองพร้อมกับพุ่งตรงเข้าไป",
		ko: "목표를 정하면 꼬리로 몸을 채찍질하면서 똑바로 돌진한다.",
		id: "Begitu menentukan sasarannya, Tauros mencambuk tubuhnya sendiri menggunakan ekornya dan menerjang lurus ke depan."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "むれをあつめる",
			'zh-tw': "群集",
			th: "รวบรวมฝูง",
			ko: "무리모으기",
			id: "Mengumpulkan Gerombolan"
		},

		effect: {
			ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			th: "เลือกการ์ดโปเกมอน[พื้นฐาน] 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			ko: "자신의 덱에서기본포켓몬을 1장 선택해서 벤치로 내보낸다. 그리고 덱을 섞는다.",
			id: "Pilih 1 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "いかり",
			'zh-tw': "憤怒",
			th: "พิโรธ",
			ko: "분노",
			id: "Amarah"
		},

		damage: "30+",

		effect: {
			ja: "このポケモンにのっているダメカンの数×10ダメージ追加。",
			'zh-tw': "增加這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x10",
			ko: "이 포켓몬에게 올려져 있는 데미지 카운터의 수 × 10데미지를 추가한다.",
			id: "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719581
	}
}

export default card