import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ファイヤー",
		'zh-tw': "火焰鳥",
		th: "ไฟเยอร์",
		ko: "파이어",
		id: "Moltres"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [146],
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "美しく 燃えあがる 翼で 山道を 照らし 遭難者を 助けたと 言い伝えられている。",
		'zh-tw': "相傳牠會以美麗燃燒的翅膀照亮山路，救助在 山中遇險的人。",
		th: "เล่าต่อกันมาว่ามันใช้ปีกที่ลุกโชนอันสวยงามส่องเส้นทางภูเขาให้สว่างและช่วยเหลือผู้ประสบภัยในป่า",
		ko: "아름답게 타오르는 날개로 산길을 비춰 조난자를 도왔다고 전해져 오고 있다.",
		id: "Disampaikan bahwa Moltres pernah menolong orang yang tersesat dengan menerangi jalan gunung menggunakan sayapnya yang berkobar dengan cantik."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "フレアフロート",
			'zh-tw': "閃焰浮游",
			th: "แฟลร์โฟลต",
			ko: "플레어 플로트",
			id: "Flare Float"
		},

		effect: {
			ja: "このポケモンにエネルギーがついているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			'zh-tw': "若這隻寶可夢身上附有【火】能量卡，則這隻寶可夢【撤退】所需的能量全部消除。",
			th: "ถ้าโปเกมอนนี้มีพลังงาน[ไฟ]ติดอยู่ พลังงานสำหรับ[หนี]ของโปเกมอนนี้ ทั้งหมดจะหายไป",
			ko: "이 포켓몬에게(불꽃)에너지가 붙어 있다면 이 포켓몬의후퇴에 필요한 에너지는 모두 없어진다.",
			id: "Jika Pokémon ini mengenakan Energi {Api}, Pokémon ini menjadi tidak membutuhkan Energi untuk Mundur."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Fire"],

		name: {
			ja: "えんじょうひこう",
			'zh-tw': "爆燃飛行",
			th: "ลุกไหม้โบยบิน",
			ko: "염상비행",
			id: "Terbang Terbakar"
		},

		effect: {
			ja: "このポケモンについているエネルギーを2個トラッシュし、相手のベンチポケモン1匹に、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "將2個這隻寶可夢身上附加的【火】能量丟棄，對手的1隻備戰寶可夢受到120點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "ทิ้งพลังงาน[ไฟ]ที่ติดอยู่กับโปเกมอนนี้ 2 ลูกที่ตำแหน่งทิ้งการ์ด ทำแดเมจ 120 กับโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			ko: "이 포켓몬에게 붙어 있는(불꽃)에너지를 2개 트래쉬하고 상대의 벤치 포켓몬 1마리에게 120데미지를 준다. (벤치는 약점, 저항력 계산을 하지 않는다.)",
			id: "Buang 2 Energi {Api} yang dikenakan pada Pokémon ini ke Trash, serangan ini memberikan kerusakan sejumlah 120 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719599
	}
}

export default card