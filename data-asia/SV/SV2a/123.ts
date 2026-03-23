import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ストライク",
		'zh-tw': "飛天螳螂",
		th: "สไตรค์",
		ko: "스라크",
		id: "Scyther"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [123],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "切れ味 鋭い カマを 使って 草むらを 切り進む。 あまりに 速い 動きで 目が 追いつかない。",
		'zh-tw': "會用鋒利的鐮刀割開草叢前進。因為動作實在太快， 甚至無法用肉眼看清。",
		th: "ใช้เคียวคมกริบถางหญ้าที่ขวางทาง เคลื่อนไหวได้เร็วจนมองตามไม่ทัน",
		ko: "아주 예리한 낫을 이용해 풀숲을 베며 나아간다. 매우 빠른 움직임에 눈이 따라가지 못한다.",
		id: "Scyther melaju sambil memotong rerumputan menggunakan sabit tajamnya. Pergerakannya tidak bisa diikuti karena terlalu cepat."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "アシストスラッシュ",
			'zh-tw': "輔助斬",
			th: "แอสซิสต์สแลช",
			ko: "어시스트 슬래시",
			id: "Assist Slash"
		},

		damage: 20,

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を1枚選び、ベンチポケモンにつける。",
			'zh-tw': "從自己的棄牌區選擇1張「基本【草】能量」卡，附於備戰寶可夢身上。",
			th: "เลือกการ์ด [พลังงานพื้นฐาน[หญ้า]] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนบนเบนช์",
			ko: "자신의 트래쉬에서 「기본(풀)에너지」를 1장 선택해서 벤치 포켓몬에게 붙인다.",
			id: "Pilih 1 lembar Energi Dasar {Daun} dari Trash sendiri, lalu kenakan pada Pokémon Cadangan."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "スライスブレード",
			'zh-tw': "利刃切割",
			th: "สไลซ์เบลด",
			ko: "슬라이스 블레이드",
			id: "Slicing Blade"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719576
	}
}

export default card