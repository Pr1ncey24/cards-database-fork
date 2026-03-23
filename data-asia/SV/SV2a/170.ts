import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゼニガメ",
		'zh-tw': "傑尼龜",
		th: "เซนิกาเมะ",
		ko: "꼬부기",
		id: "Squirtle"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	rarity: "Illustration rare",
	dexId: [7],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "危なくなると 甲羅に 手足を 引っこめて 身を 守りながら 口から 水を 吹き出している。",
		'zh-tw': "當牠遇到危險的時候，會將四肢收回甲殼裡保護自己，同時從嘴裡噴出水來。",
		th: "เมื่อภัยอันตรายเข้าใกล้จะหดแขนขาเข้าในกระดองและฉีดน้ำออกมาจากปากไปพลางปกป้องตัวไปพลาง",
		ko: "위험해지면 등껍질에 손발을 감추고 몸을 지키면서 입에서 물을 내뿜는다.",
		id: "Pada kondisi bahaya, Squirtle memasukkan tangan dan kakinya ke dalam tempurung dan menyemprotkan air dari mulutnya sambil melindungi diri."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "からにこもる",
			'zh-tw': "縮入殼中",
			th: "หดกำบัง",
			ko: "껍질에숨기",
			id: "Berperam Dalam Cangkang"
		},

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจของท่าต่อสู้",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 다음 차례에 이 포켓몬은 기술의 데미지를 받지 않는다.",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan akibat serangan."
		}
	}, {
		cost: ["Water", "Water"],

		name: {
			ja: "ロケットずつき",
			'zh-tw': "火箭頭錘",
			th: "พุ่งหัวจรวด",
			ko: "로켓박치기",
			id: "Tandukan Kepala Roket"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719449
	}
}

export default card