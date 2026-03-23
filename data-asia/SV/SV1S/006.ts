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

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	dexId: [928],
	hp: 60,
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
		cost: ["Grass"],

		name: {
			ja: "えいようそ",
			'zh-tw': "營養素",
			th: "สารอาหาร",
			ko: "영양소",
			id: "Nutrisi"
		},

		effect: {
			ja: "自分のポケモン1匹のHPを「30」回復する。",
			'zh-tw': "將自己的1隻寶可夢恢復「30」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนฝ่ายเรา 1 ตัว [30]",
			ko: "자신의 포켓몬 1마리의 HP를 「30」회복한다.",
			id: "Pulihkan HP 1 Pokémon sendiri sejumlah 30."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "しるをとばす",
			'zh-tw': "噴汁",
			th: "ฉีดพ่นน้ำ",
			ko: "분비액뿜기",
			id: "Menyemprotkan Getah"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card