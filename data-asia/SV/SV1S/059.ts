import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ブロロン",
		'zh-tw': "噗隆隆",
		th: "โบรรอน",
		ko: "부르롱",
		id: "Varoom"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [965],
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "スクラップ工場に 放置された エンジンに 謎の 毒ポケモンが 入り込んで 生まれたと 言われる。",
		'zh-tw': "據說牠是神秘的毒寶可夢鑽進了被放置在廢鐵工廠 的引擎裡而誕生的。",
		th: "ว่ากันว่าเกิดจากการที่โปเกมอนพิษปริศนาเข้าไปในเครื่องยนต์ที่ถูกทิ้งไว้ในโรงงานเศษเหล็ก",
		ko: "고철 처리장에 방치된 엔진에 정체불명의 독포켓몬이 들어가 탄생한 것으로 전해지고 있다.",
		id: "Dikatakan bahwa Varoom terlahir dari Pokémon racun misterius yang masuk ke dalam mesin terbengkalai di pabrik besi bekas."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "どくガス",
			'zh-tw': "毒瓦斯",
			th: "ก๊าซพิษ",
			ko: "독가스",
			id: "Gas Beracun"
		},

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]",
			ko: "상대의 배틀 포켓몬을독으로 만든다.",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card