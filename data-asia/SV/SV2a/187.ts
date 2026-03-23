import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "アーボックex",
		'zh-tw': "阿柏怪ex",
		th: "อาร์บ็อกex",
		ko: "아보크 ex",
		id: "Arbok ex"
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	rarity: "Secret Rare",
	hp: 270,
	types: ["Darkness"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "しばりつける",
			'zh-tw': "束縛",
			th: "มัดยึด",
			ko: "붙들어매기",
			id: "Menjerat"
		},

		damage: 70,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้",
			ko: "상대의 다음 차례에 이 기술을 받은 포켓몬은 후퇴할 수 없다.",
			id: "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		}
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			ja: "メナスファング",
			'zh-tw': "脅迫獠牙",
			th: "คมเขี้ยวคุกคาม",
			ko: "메너스팽",
			id: "Menace Fang"
		},

		damage: 150,

		effect: {
			ja: "相手は相手自身の手札を2枚選び、トラッシュする。",
			'zh-tw': "對手選擇對手自己的2張手牌，將其丟棄。",
			th: "ฝ่ายตรงข้ามเลือกการ์ดบนมือฝ่ายตรงข้ามเอง 2 ใบ ทิ้งที่ตำแหน่งทิ้งการ์ด",
			ko: "상대는 상대 자신의 패를 2장 선택해서 트래쉬한다.",
			id: "Lawan memilih 2 lembar Kartu Pegangannya, lalu membuangnya ke Trash."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719466
	}
}

export default card