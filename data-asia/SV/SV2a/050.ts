import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ディグダ",
		'zh-tw': "地鼠",
		th: "ดิกดา",
		ko: "디그다",
		id: "Diglett"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [50],
	hp: 50,
	types: ["Fighting"],

	description: {
		ja: "地下１メートルくらいを 掘りすすみ 木の根っこなどを かじって 生きる。 たまに 地上に 顔を出す。",
		'zh-tw': "在大約１公尺深的地底挖洞前進，靠啃食樹根之類的東西生存。 偶爾會到地面上露個臉。",
		th: "ขุดโพรงในดินลึกประมาณ 1 เมตร ใช้ชีวิตโดยการกัดกินรากไม้ นาน ๆ ทีจะโผล่ขึ้นมาเหนือดิน",
		ko: "지하 1m 정도를 파고들어 가서 나무뿌리 등을 씹어 먹고 산다. 가끔 지상으로 얼굴을 내민다.",
		id: "Diglett menggali tanah kira-kira sedalam 1 meter dan hidup dengan memakan akar tumbuhan. Terkadang Pokémon ini naik ke permukaan tanah."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "とびだしヘッド",
			'zh-tw': "魯莽頭擊",
			th: "กระโดดโหม่ง",
			ko: "머리박치기",
			id: "Sundulan Meloncat"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "どろかけ",
			'zh-tw': "擲泥",
			th: "สาดโคลน",
			ko: "진흙뿌리기",
			id: "Semprotan Lumpur"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719492
	}
}

export default card