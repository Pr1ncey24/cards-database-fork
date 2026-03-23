import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "タマゲタケ",
		'zh-tw': "哎呀球菇",
		th: "ทามาเกะทาเคะ",
		ko: "깜놀버슬",
		id: "Foongus"
	},

	illustrator: "You Iribi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [590],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "モンスターボールの 開発者は タマゲタケが 好きだったという 説が あるが 真偽は 不明。",
		'zh-tw': "據說開發精靈球的人很喜歡哎呀球菇， 但不知是真是假。",
		th: "มีข้อสันนิษฐานว่าผู้คิดค้นมอนสเตอร์บอลนั้นชื่นชอบทามาเกะทาเคะ แต่ความจริงเป็นอย่างไรไม่มีใครรู้",
		ko: "몬스터볼의 개발자가 깜놀버슬을 좋아했다는 설이 있지만, 진위는 불명하다.",
		id: "Ada teori yang mengatakan pengembang Bola Pokémon menyukai Foongus, namun kebenarannya tidak diketahui."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "もようでつる",
			'zh-tw': "花紋吸睛",
			th: "ล่อด้วยลาย",
			ko: "무늬꾀기",
			id: "Pola Pemancing"
		},

		effect: {
			ja: "自分の山札からタイプのたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張【草】屬性的【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			th: "เลือกการ์ดโปเกมอน[พื้นฐาน]ประเภท[หญ้า] 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			ko: "자신의 덱에서(풀)타입의기본포켓몬을 1장 선택해서 벤치로 내보낸다. 그리고 덱을 섞는다.",
			id: "Pilih 1 lembar Pokémon Basic tipe {Daun} dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "たたく",
			'zh-tw': "敲擊",
			th: "ตี",
			ko: "때리기",
			id: "Menghantam"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 701038
	}
}

export default card