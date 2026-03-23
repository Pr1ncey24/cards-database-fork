import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "マルマイン",
		'zh-tw': "頑皮雷彈",
		th: "มารุมายน์",
		ko: "붐볼",
		id: "Electrode"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [101],
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "電気エネルギーを 溜めこむほど 高速で 動けるようになるが そのぶん 爆発 しやすい。",
		'zh-tw': "雖然儲存的電能越多，移動的速度也會變得越快， 但同時也會變得更容易爆炸。",
		th: "ยิ่งสะสมพลังงานไฟฟ้ามากเท่าไหร่ยิ่งเคลื่อนไหวได้เร็ว แต่ก็จะระเบิดง่ายขึ้นด้วย",
		ko: "전기 에너지를 모을수록 고속으로 이동할 수 있게 되나 그만큼 폭발하기도 쉬워진다.",
		id: "Makin banyak energi listrik yang disimpan, Electrode dapat bergerak dengan kecepatan tinggi. Namun, Pokémon ini juga menjadi lebih mudah untuk meledak."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "ボムボムチェイン",
			'zh-tw': "轟轟連鎖",
			th: "บอมบ์บอมบ์เชน",
			ko: "봄봄체인",
			id: "Bomb Bomb Chain"
		},

		damage: "20+",

		effect: {
			ja: "ダメージを与える前に、自分の場のポケモンについている「ポケモンのどうぐ」を好きなだけトラッシュし、その枚数×40ダメージ追加。",
			'zh-tw': "在造成傷害前，將自己的場上寶可夢身上附加的任意數量的「寶可夢道具」卡丟棄，增加其張數×40點傷害。",
			th: "ก่อนจะทำแดเมจ ทิ้ง [ไอเท็มติดโปเกมอน] ที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเราที่ตำแหน่งทิ้งการ์ดตามจำนวนที่ชอบ แดเมจจะเพิ่มตามจำนวนการ์ดนั้น x40",
			ko: "데미지를 주기 전에 자신의 필드의 포켓몬에게 붙어 있는 「포켓몬의 도구」를 원하는 만큼 트래쉬하고 그 장수 × 40데미지를 추가한다.",
			id: "Sebelum memberikan kerusakan, buang sesukanya Pokémon Tool yang dikenakan pada Pokémon di Arena sendiri ke Trash, kerusakan yang diberikan bertambah sejumlah 40 untuk tiap lembarnya."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "エレキボール",
			'zh-tw': "電球",
			th: "อิเล็กทริกบอล",
			ko: "일렉트릭볼",
			id: "Electro Ball"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719554
	}
}

export default card