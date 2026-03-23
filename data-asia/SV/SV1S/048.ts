import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ガケガニ",
		'zh-tw': "毛崖蟹",
		th: "กาเคกานิ",
		ko: "절벼게",
		id: "Klawf"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [950],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "逆さまになって 崖の 上から 獲物を 狙うが 頭に 血が上るので 長くは 待てない。",
		'zh-tw': "會倒立在懸崖上等獵物上門，但由於那會讓牠的血液倒流， 因此等不了太長的時間。",
		th: "ยืนกลับหัวและเล็งเหยื่อจากยอดหน้าผา แต่ไม่สามารถเล็งได้นานเพราะเลือดลงหัว",
		ko: "거꾸로 매달린 채 절벽 위에서 먹이를 노리지만, 머리에 피가 몰리기 때문에 오랫동안은 버틸 수 없다고 한다.",
		id: "Klawf mengincar mangsanya dengan bergantung secara terbalik dari atas tebing, namun tidak akan bertahan lama karena darah mengalir ke kepalanya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "はさむ",
			'zh-tw': "夾住",
			th: "หนีบ",
			ko: "찝기",
			id: "Capitan Keras"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			ja: "アドレナハンマー",
			'zh-tw': "腎上腺錘",
			th: "อะดรีนาลีนแฮมเมอร์",
			ko: "아드레나해머",
			id: "Adrenaline Hammer"
		},

		damage: 130,

		effect: {
			ja: "このポケモンをこんらんにする。",
			'zh-tw': "將這隻寶可夢【混亂】。",
			th: "ทำให้โปเกมอนนี้เป็นสภาวะ[สับสน]",
			ko: "이 포켓몬을혼란으로 만든다.",
			id: "Ubah kondisi Pokémon ini menjadi Pusing."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card