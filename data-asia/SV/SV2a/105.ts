import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ガラガラ",
		'zh-tw': "嘎啦嘎啦",
		th: "การะการะ",
		ko: "텅구리",
		id: "Marowak"
	},

	illustrator: "Shinya Komatsu",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [105],
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "進化して 被っていた 母親の 骨が 一体化して そのうえ 凶暴な 性格に 変わった。",
		'zh-tw': "進化時，原本戴在頭上的母親頭骨化為了牠身體的一部份。 不但如此，性格也變得很凶暴。",
		th: "วิวัฒนาการแล้วทำให้กระดูกของแม่ที่สวมอยู่นั้นกลายเป็นส่วนหนึ่งของตน ยิ่งไปกว่านั้น ยังเปลี่ยนให้มีนิสัยดุดันด้วย",
		ko: "진화로 인해 쓰고 있던 어미의 뼈는 일체화되었고 성격은 더욱 난폭해졌다.",
		id: "Cubone berevolusi menjadi Marowak dan tengkorak ibunya yang dikenakan di kepalanya menyatu ke tubuhnya. Selain itu, sifatnya juga berubah menjadi brutal."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ボーンスロー",
			'zh-tw': "骨棒投擲",
			th: "โบนโทรว์",
			ko: "본스로우",
			id: "Bone Throw"
		},

		damage: 30,

		effect: {
			ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 30 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			ko: "상대의 벤치 포켓몬 1마리에게도 30데미지를 준다. (벤치는 약점, 저항력 계산을 하지 않는다.)",
			id: "Serangan ini juga memberikan kerusakan sejumlah 30 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "そこぢから",
			'zh-tw': "潛力",
			th: "พลังแฝง",
			ko: "저력",
			id: "Kekuatan Laten"
		},

		damage: 120,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			ko: "자신의 다음 차례에 이 포켓몬은 기술을 사용할 수 없다.",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719558
	}
}

export default card