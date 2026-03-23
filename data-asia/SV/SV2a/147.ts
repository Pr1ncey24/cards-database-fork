import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ミニリュウ",
		'zh-tw': "迷你龍",
		th: "มินิริว",
		ko: "미뇽",
		id: "Dratini"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	dexId: [147],
	hp: 60,
	types: ["Dragon"],

	description: {
		ja: "激しく 流れ落ちる 滝に 守られながら 脱皮を 繰り返し どんどん 大きくなる。",
		'zh-tw': "會在直瀉而下的瀑布保護下反覆蛻皮， 使身體變得越來越大。",
		th: "ขณะที่ถูกปกป้องด้วยน้ำตกที่ไหลแรง ก็จะลอกคราบไปเรื่อย ๆ จนค่อย ๆ โตขึ้น",
		ko: "세차게 떨어지는 폭포의 보호를 받으며 탈피를 거듭해 점점 크게 자란다.",
		id: "Sambil dilindungi air terjun yang mengalir deras, Dratini terus-menerus berganti kulit dan tumbuh membesar."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "たたく",
			'zh-tw': "敲擊",
			th: "ตี",
			ko: "때리기",
			id: "Menghantam"
		},

		damage: 10
	}, {
		cost: ["Water", "Lightning"],

		name: {
			ja: "ドラゴンウィップ",
			'zh-tw': "龍之鞭打",
			th: "ดรากอนวิป",
			ko: "드래곤휩",
			id: "Dragon Whip"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719600
	}
}

export default card