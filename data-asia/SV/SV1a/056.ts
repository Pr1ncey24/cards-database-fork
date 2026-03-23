import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ハブネーク",
		'zh-tw': "飯匙蛇",
		th: "ฮาบูเนค",
		ko: "세비퍼",
		id: "Seviper"
	},

	illustrator: "Nisota Niso",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [336],
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "硬い 岩で 刀の 尻尾を 研ぐ。 しげみに 隠れて 獲物に 近寄り 毒の キバで 襲う。",
		'zh-tw': "平時都用堅硬的岩石來打磨刀刃般的尾巴。會躲在樹叢裡， 然後趁獵物靠近時用毒牙襲擊。",
		th: "ลับดาบที่หางด้วยโขดหินแข็ง ๆ ขยับเข้าใกล้เหยื่อในขณะที่ซ่อนตัวในพงหญ้า แล้วใช้เขี้ยวพิษจู่โจม",
		ko: "단단한 바위로 칼날 같은 꼬리를 간다. 수풀에 숨어서 먹이에 접근한 다음 독 이빨로 공격한다.",
		id: "Seviper mengasah pedang di ekornya dengan batu keras. Pokémon ini bersembunyi, mendekati mangsanya melalui semak-semak, lalu menyerang mereka dengan taring beracunnya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "するどいキバ",
			'zh-tw': "銳利之牙",
			th: "เขี้ยวคม",
			ko: "예리한이빨",
			id: "Taring Tajam"
		},

		damage: 20
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "ふりおろす",
			'zh-tw': "揮擊",
			th: "ฟาด",
			ko: "내리치기",
			id: "Menebas Turun"
		},

		damage: "50+",

		effect: {
			ja: "相手のバトルポケモンが進化ポケモンなら、50ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢為進化寶可夢，則增加50點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นโปเกมอนวิวัฒนาการ การโจมตีนี้จะเพิ่มแดเมจอีก 50",
			ko: "상대의 배틀 포켓몬이 진화 포켓몬이라면 50데미지를 추가한다.",
			id: "Jika Pokémon Bertarung lawan adalah Pokémon Evolusi, kerusakan yang diberikan bertambah sejumlah 50."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 701110
	}
}

export default card