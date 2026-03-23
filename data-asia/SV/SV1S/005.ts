import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ミニーブ",
		'zh-tw': "迷你芙",
		th: "มินีฟ",
		ko: "미니브",
		id: "Smoliv"
	},

	illustrator: "yuu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [928],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "頭の 実から オイルを 出して 敵から 身を 守る。 オイルは とびあがるほど 苦くて 渋い。",
		'zh-tw': "會從頭上的果實噴出油來保護自己不受敵人攻擊。 油的味道苦澀到會讓人跳起來。",
		th: "ปล่อยน้ำมันออกมาจากผลบนหัวเพื่อปกป้องตัวเองจากศัตรู น้ำมันนั้นทั้งขมและฝาดจนน่าตกใจ",
		ko: "머리의 열매에서 오일을 나오게 해서 적으로부터 몸을 지킨다. 오일은 펄쩍 뛸 만큼 떫고 쓰다.",
		id: "Smoliv melindungi diri dari musuh dengan mengeluarkan minyak dari buah di kepalanya. Rasa minyaknya sangat pahit dan sepat."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "たいあたり",
			'zh-tw': "撞擊",
			th: "พุ่งเข้าชน",
			ko: "몸통박치기",
			id: "Serudukan"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card