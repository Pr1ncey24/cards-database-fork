import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ナカヌチャン",
		'zh-tw': "巧鍛匠",
		th: "นาคานุจัง",
		ko: "벼리짱",
		id: "Tinkatuff"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [958],
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "大きくて 頑丈な ハンマーを 作るために キリキザンの 群れを 襲って 金属を 集める。",
		'zh-tw': "為了製作又大又堅固的錘子，會去襲擊劈斬司令 的群體，藉以收集金屬。",
		th: "จะโจมตีฝูงคิริคิซันและรวบรวมโลหะมาเพื่อสร้างค้อนที่มีขนาดใหญ่และแข็งแรง",
		ko: "크고 튼튼한 해머를 만들기 위해 절각참 무리를 습격해서 금속을 모은다.",
		id: "Untuk membuat palu yang besar dan kuat, Tinkatuff menyerang kelompok Bisharp dan mengumpulkan logam dari mereka."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "なぐる",
			'zh-tw': "打擊",
			th: "ทุบตี",
			ko: "치기",
			id: "Memukul"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "そこぢから",
			'zh-tw': "潛力",
			th: "พลังแฝง",
			ko: "저력",
			id: "Kekuatan Laten"
		},

		damage: 80,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			ko: "자신의 다음 차례에 이 포켓몬은 기술을 사용할 수 없다.",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card