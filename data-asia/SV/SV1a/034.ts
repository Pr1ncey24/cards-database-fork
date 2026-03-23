import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ムウマ",
		'zh-tw': "夢妖",
		th: "มูมา",
		ko: "무우마",
		id: "Misdreavus"
	},

	illustrator: "Megumi Higuchi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [200],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "真夜中 人を 驚かせては 怖がる心を 集めて 自分の エネルギーに している ポケモン。",
		'zh-tw': "會在半夜嚇唬人類，然後把收集到的恐懼之心 轉化成自身能量的寶可夢。",
		th: "โปเกมอนที่หลอกให้ผู้คนตกใจในยามค่ำคืนเพื่อสะสมจิตใจที่หวาดกลัวแล้วนำมาเป็นพลังงานของตัวเอง",
		ko: "한밤중에 사람을 놀라게 하고 무서워하는 마음을 모아 자신의 에너지로 만드는 포켓몬이다.",
		id: "Misdreavus adalah Pokémon yang mengejutkan manusia saat tengah malam untuk mengumpulkan ketakutan mereka dan menjadikannya energi untuk dirinya sendiri."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "さいみんはどう",
			'zh-tw': "催眠波動",
			th: "คลื่นสะกดจิต",
			ko: "최면파동",
			id: "Aura Hipnotis"
		},

		damage: 10,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]",
			ko: "상대의 배틀 포켓몬을잠듦으로 만든다.",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 701088
	}
}

export default card