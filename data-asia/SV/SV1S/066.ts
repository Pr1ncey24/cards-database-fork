import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "グルトン",
		'zh-tw': "愛吃豚",
		th: "กูร์ตง",
		ko: "맛보돈",
		id: "Lechonk"
	},

	illustrator: "Teeziro",
	rarity: "Common",
	category: "Pokemon",
	dexId: [915],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "一日中 エサを 探す。 優れた 嗅覚を 持つが エサ探し 以外に 使わない。",
		'zh-tw': "一整天都在覓食。雖然擁有優秀的嗅覺， 但卻只被用在覓食上。",
		th: "หาอาหารตลอดวัน มีประสาทการรับกลิ่นที่ยอดเยี่ยมแต่จะไม่ใช้ไปกับเรื่องที่ไม่เกี่ยวข้องกับการหาอาหาร",
		ko: "하루 종일 먹이를 찾는다. 뛰어난 후각을 가졌지만 먹이를 찾는 일 외에는 사용하지 않는다.",
		id: "Lechonk mencari makanan seharian penuh. Meskipun memiliki indra penciuman yang sangat baik, Pokémon ini tidak menggunakannya selain untuk mencari makan."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "てきよけスメル",
			'zh-tw': "避敵氣味",
			th: "กลิ่นกันศัตรู",
			ko: "상대회피스멜",
			id: "Bau Pengusir Musuh"
		},

		effect: {
			ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]",
			th: "สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามกับโปเกมอนบนเบนช์ {ฝ่ายตรงข้ามเลือกโปเกมอนที่จะวางบนตำแหน่งต่อสู้},
			ko: "상대의 배틀 포켓몬을 벤치 포켓몬과 교체한다. (배틀필드로 내보낼 포켓몬은 상대가 선택한다.)"",
			id: "Tukar Pokémon Bertarung lawan dengan Pokémon Cadangan. [Pokémon yang akan dimasukkan ke Arena Bertarung dipilih oleh lawan.]"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ふむ",
			'zh-tw': "踩",
			th: "เหยียบ",
			ko: "밟기",
			id: "Menginjak"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card