import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ハブネーク",
		'zh-tw': "飯匙蛇",
		th: "ฮาบูเนค",
		ko: "세비퍼",
		id: "Seviper"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	dexId: [336],
	hp: 120,
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
		cost: ["Darkness"],

		name: {
			ja: "どくえき",
			'zh-tw': "毒液",
			th: "ของเหลวพิษ",
			ko: "독액",
			id: "Cairan Racun"
		},

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]",
			ko: "상대의 배틀 포켓몬을독으로 만든다.",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "ベノムショック",
			'zh-tw': "毒液衝擊",
			th: "เวนอมช็อค",
			ko: "베놈쇼크",
			id: "Venoshock"
		},

		damage: "60+",

		effect: {
			ja: "相手のバトルポケモンがどくなら、120ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢【中毒】，則增加120點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ] การโจมตีนี้จะเพิ่มแดเมจอีก 120",
			ko: "상대의 배틀 포켓몬이독이라면 120데미지를 추가한다.",
			id: "Jika Pokémon Bertarung lawan mengalami kondisi Racun, kerusakan yang diberikan bertambah sejumlah 120."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 693020
	}
}

export default card