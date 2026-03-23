import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "カビゴン",
		'zh-tw': "卡比獸",
		th: "คาบิกอน",
		ko: "잠만보",
		id: "Snorlax"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [143],
	hp: 150,
	types: ["Colorless"],

	description: {
		ja: "頑丈な 胃袋は カビの 生えたものや 腐ったものを 食べても 壊れることはない。",
		'zh-tw': "擁有一個結實的胃，即使吃了發霉腐爛的東西， 也完全不會吃壞肚子。",
		th: "มีถุงกระเพาะที่แข็งแรง แม้จะกินของที่มีราขึ้นหรือของเน่าเสียก็ไม่เคยท้องเสีย",
		ko: "위장이 튼튼해서 곰팡이가 피거나 썩은 것을 먹어도 배탈이 나지 않는다.",
		id: "Karena perutnya kuat, Snorlax tidak akan sakit perut walau memakan makanan berjamur atau makanan busuk sekalipun."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "くいいじ",
			'zh-tw': "貪嘴",
			th: "เจริญอาหาร",
			ko: "식탐",
			id: "Kemaruk"
		},

		effect: {
			ja: "自分の番に1回使える。自分のトラッシュから「たべのこし」を2枚まで選び、相手に見せて、手札に加える。",
			'zh-tw': "在自己的回合時可使用1次。從自己的棄牌區選擇最多2張「吃剩的東西」，在給對手看過後加入手牌。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ด [อาหารเหลือ] ได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ",
			ko: "자신의 차례에 1번 사용할 수 있다. 자신의 트래쉬에서 「먹다남은음식」을 2장까지 선택해서 상대에게 보여주고 패로 가져온다.",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pilih paling banyak 2 lembar Sisa Makanan dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "バッタンプレス",
			'zh-tw': "養肥壓制",
			th: "อัดตึงตัง",
			ko: "철퍼덕프레스",
			id: "Tekanan Gedebuk"
		},

		damage: 130,

		effect: {
			ja: "このポケモンにも30ダメージ。",
			'zh-tw': "這隻寶可夢也受到30點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 30 ด้วย",
			ko: "이 포켓몬에게도 30데미지를 준다.",
			id: "Pokémon ini juga menerima kerusakan sejumlah 30."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719596
	}
}

export default card