import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤドン",
		'zh-tw': "呆呆獸",
		th: "ยาดง",
		ko: "야돈",
		id: "Slowpoke"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [79],
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "動きが のろく 間抜け。 叩かれても ５秒 たってから 痛さを 感じるほどだ。",
		'zh-tw': "動作遲鈍且呆頭呆腦。就算挨打也得花上５秒 才會感受到疼痛。",
		th: "อืดอาดและซื่อบื้อ ถึงขั้นว่าถูกตีไป 5 วินาทีถึงเพิ่งรู้สึกเจ็บ",
		ko: "움직임이 둔하고 멍청하다. 맞아도 5초는 지나야 아픔을 느낄 정도다.",
		id: "Slowpoke lamban dan lemot. Pokémon ini baru merasakan rasa sakit akibat dipukul setelah 5 detik berlalu."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "かいすいよく",
			'zh-tw': "海水浴",
			th: "เล่นน้ำทะเล",
			ko: "해수욕",
			id: "Mandi Air Laut"
		},

		effect: {
			ja: "このポケモンのHPを「30」回復し、特殊状態もすべて回復する。",
			'zh-tw': "將這隻寶可夢恢復「30」HP，特殊狀態也全部恢復。",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [30] รักษาสภาวะผิดปกติทั้งหมดด้วย",
			ko: "이 포켓몬의 HP를 「30」회복하고 특수 상태를 모두 회복한다.",
			id: "Pulihkan HP Pokémon ini sejumlah 30, lalu pulihkan juga semua Kondisi Khusus yang dialami Pokémon ini."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ずつき",
			'zh-tw': "頭錘",
			th: "พุ่งหัวชน",
			ko: "박치기",
			id: "Tandukan Kepala"
		},

		damage: 20
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
		cardmarket: 719521
	}
}

export default card