import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "カエンジシ",
		'zh-tw': "火炎獅",
		th: "คาเอ็นจิชิ",
		ko: "화염레오",
		id: "Pyroar"
	},

	illustrator: "Uta",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [668],
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "群れの メスが 協力して 獲物を 仕留める。 メスたちの おかげで 群れが 飢えないのだ。",
		'zh-tw': "雌性們會合力捕殺獵物，所以群體內不會發生 有誰挨餓的狀況。",
		th: "ตัวเมียในฝูงจะช่วยกันจัดการเหยื่อ ต้องขอบคุณเหล่าตัวเมียที่ทำให้ฝูงไม่อดอยาก",
		ko: "무리의 암컷들이 협력해서 먹잇감을 처리한다. 암컷들 덕분에 무리가 굶지 않을 수 있는 것이다.",
		id: "Para Pyroar betina dalam kelompok saling bekerja sama untuk menghabisi mangsanya. Kelompok Pokémon ini tidak menderita kelaparan berkat mereka."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "こがす",
			'zh-tw': "灼熱",
			th: "เผา",
			ko: "그을리기",
			id: "Menghanguskan"
		},

		effect: {
			ja: "相手のバトルポケモンをやけどにする。",
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]",
			ko: "상대의 배틀 포켓몬을화상으로 만든다.",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かけぬける",
			'zh-tw': "飛馳",
			th: "วิ่งแซงหน้า",
			ko: "달려나가기",
			id: "Lari Melewati"
		},

		damage: 60,

		effect: {
			ja: "相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻備戰寶可夢也受到20點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 20 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด},
			ko: "상대의 벤치 포켓몬 1마리에게도 20데미지를 준다. (벤치는 약점, 저항력 계산을 하지 않는다.)",
			ko: "상대의 벤치 포켓몬 1마리에게도 20데미지를 준다. (벤치는 약점, 저항력 계산을 하지 않는다.)"",
			id: "Serangan ini juga memberikan kerusakan sejumlah 20 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 701065
	}
}

export default card