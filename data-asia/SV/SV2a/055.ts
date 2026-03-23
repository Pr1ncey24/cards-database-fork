import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴルダック",
		'zh-tw': "哥達鴨",
		th: "โกลดัก",
		ko: "골덕",
		id: "Golduck"
	},

	illustrator: "Taira Akitsu",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [55],
	hp: 110,
	types: ["Water"],

	description: {
		ja: "水かきのついた 長い 手足を 使い 全力で 泳ぎだすと なぜか 額が 光り輝く。",
		'zh-tw': "當牠用帶有水蹼的修長手腳全力游泳時， 不知為何額頭會閃閃發光。",
		th: "ไม่รู้ทำไม พอใช้แขนขายาวที่มีพังผืดว่ายน้ำสุดกำลัง บริเวณหน้าผากจะเรืองแสงขึ้นมา",
		ko: "물갈퀴가 달린 긴 손발을 써서 전력으로 헤엄치면 왠지 이마에서 빛이 반짝인다.",
		id: "Entah kenapa kening Golduck bersinar ketika ia berenang sekuat tenaga menggunakan kaki dan tangan panjang berselaputnya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "すいなんきゅうじょ",
			'zh-tw': "水難救助",
			th: "กู้ภัยทางน้ำ",
			ko: "수해구조",
			id: "Penyelamatan Bencana Air"
		},

		effect: {
			ja: "自分のトラッシュからポケモンを4枚まで選び、相手に見せて、手札に加える。",
			'zh-tw': "從自己的棄牌區選擇最多4張寶可夢卡，在給對手看過後加入手牌。",
			th: "เลือกการ์ดโปเกมอนได้สูงสุด 4 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ",
			ko: "자신의 트래쉬에서 포켓몬을 4장까지 선택해서 상대에게 보여주고 패로 가져온다.",
			id: "Pilih paling banyak 4 lembar Pokémon dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "スーパースプラッシュ",
			'zh-tw': "超級飛濺",
			th: "ซูเปอร์สแปลช",
			ko: "수퍼스플래시",
			id: "Super Splash"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719497
	}
}

export default card