import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "クワッス",
		'zh-tw': "潤水鴨",
		th: "แคว็กซ์",
		ko: "꾸왁스",
		id: "Quaxly"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	dexId: [912],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "昔 遠い 土地から やって来て 棲みついた。 羽から 分泌する ジェルは 水と 汚れを 弾く。",
		'zh-tw': "很久以前從遠方來到了這裡棲息。羽毛分泌出的 凝膠有防水和防污的效果。",
		th: "มาจากดินแดนห่างไกลตั้งแต่ในสมัยอดีต เจลที่หลั่งจากปีกจะขับน้ำและสิ่งสกปรกออก",
		ko: "옛날에 머나먼 땅에서 찾아와 정착했다. 날개에서 분비되는 젤은 물과 먼지를 튕겨 낸다.",
		id: "Dulu, Quaxly bermigrasi dari daerah yang jauh. Gel yang disekresi dari bulunya menangkis air dan kotoran."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "とつげき",
			'zh-tw': "突擊",
			th: "ประจัญบาน",
			ko: "돌격",
			id: "Menyerang"
		},

		damage: 30,

		effect: {
			ja: "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			ko: "이 포켓몬에게도 10데미지를 준다.",
			id: "Pokémon ini juga menerima kerusakan sejumlah 10."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card