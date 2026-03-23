import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "サーナイトex",
		'zh-tw': "沙奈朵ex",
		th: "เซอไนท์ex",
		ko: "가디안 ex",
		id: "Gardevoir ex"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "サイコエンブレイス",
			'zh-tw': "精神擁抱",
			th: "อ้อมกอดพลังจิต",
			ko: "사이코 임브레이스",
			id: "Psychoembrace"
		},

		effect: {
			ja: "自分の番に何回でも使える。自分のトラッシュから「基本エネルギー」を1枚選び、自分のポケモンにつける。その後、つけたポケモンにダメカンを2個のせる。（きぜつするポケモンに、この特性は使えない。）",
			'zh-tw': "在自己的回合時，可不限次數使用。從自己的棄牌區選擇1張「基本【超】能量」卡，附於自己的【超】寶可夢身上。然後，在附上那張卡的寶可夢身上放置2個傷害指示物。（這個特性無法對會【昏厥】的寶可夢使用。）",
			th: "ใช้กี่ครั้งก็ได้ในเทิร์นฝ่ายเรา เลือกการ์ด [พลังงานพื้นฐาน[พลังจิต]] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอน[พลังจิต]ฝ่ายเรา หลังจากนั้น วางตัวนับแดเมจ 2 ตัวบนโปเกมอนที่ติดการ์ดนั้น (จะใช้ความสามารถนี้ กับโปเกมอนที่[หมดสภาพ]ไม่ได้)",
			ko: "자신의 차례에 몇 번이라도 사용할 수 있다. 자신의 트래쉬에서 「기본(초)에너지」를 1장 선택해서 자신의(초)포켓몬에게 붙인다. 그 뒤, 붙인 포켓몬에게 데미지 카운터를 2개 올린다. (기절하는 포켓몬에게 이 특성은 사용할 수 없다.)",
			id: "Dapat digunakan berkali-kali pada giliran sendiri. Pilih 1 lembar Energi Dasar {Psychic} dari Trash sendiri, lalu kenakan pada Pokémon {Psychic} sendiri. Setelah itu, letakkan 2 Token Kerusakan pada Pokémon yang telah dikenakan Energi tersebut. (Ability ini tidak dapat digunakan pada Pok?mon yang akan KO akibat Ability ini.)"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			ja: "ミラクルフォース",
			'zh-tw': "奇跡之力",
			th: "มิราเคิลฟอร์ซ",
			ko: "미라클포스",
			id: "Miracle Force"
		},

		damage: 190,

		effect: {
			ja: "このポケモンの特殊状態を、すべて回復する。",
			'zh-tw': "將這隻寶可夢的特殊狀態全部恢復。",
			th: "รักษาสภาวะผิดปกติทั้งหมดของโปเกมอนนี้",
			ko: "이 포켓몬의 특수 상태를 모두 회복한다.",
			id: "Pulihkan semua Kondisi Khusus yang dialami Pokémon ini."
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

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 692994
	}
}

export default card