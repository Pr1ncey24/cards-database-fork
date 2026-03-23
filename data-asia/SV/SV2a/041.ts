import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ズバット",
		'zh-tw': "超音蝠",
		th: "ซูแบท",
		ko: "주뱃",
		id: "Zubat"
	},

	illustrator: "Scav",
	rarity: "Common",
	category: "Pokemon",
	dexId: [41],
	hp: 40,
	types: ["Darkness"],

	description: {
		ja: "陽の 当たらない 洞窟に 棲む。 朝になると 仲間で 集まり 体を 温めあいながら 寝る。",
		'zh-tw': "棲息在陽光照射不到的洞窟裡。到了早上就會和夥伴相聚， 一邊互相取暖一邊睡覺。",
		th: "อาศัยอยู่ในถ้ำที่แสงแดดส่องไม่ถึง เมื่อถึงเวลาเช้าจะรวมกลุ่มกับพวกพ้องเพื่อสร้างความอบอุ่นแก่ร่างกายและนอนหลับ",
		ko: "볕이 들지 않는 동굴에 산다. 아침이 되면 동료들끼리 모여 서로의 온기를 나누면서 잔다.",
		id: "Zubat tinggal di gua yang tidak terkena sinar matahari. Ketika pagi tiba, Pokémon ini berkumpul dengan sesamanya dan tidur sambil saling menghangatkan tubuh."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "まるみえエコー",
			'zh-tw': "全景迴響",
			th: "คลื่นเสียงสะท้อนหมดเปลือก",
			ko: "훤히 보이는 에코",
			id: "Gema Melihat Jelas"
		},

		effect: {
			ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。相手の手札を見る。",
			'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。查看對手的手牌。",
			th: "ถ้าโปเกมอนนี้อยู่บนตำแหน่งต่อสู้ ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ดูการ์ดบนมือฝ่ายตรงข้าม",
			ko: "이 포켓몬이 배틀필드에 있다면 자신의 차례에 1번 사용할 수 있다. 상대의 패를 본다.",
			id: "Dapat digunakan 1 kali pada giliran sendiri jika Pokémon ini ada di Arena Bertarung. Lihat Kartu Pegangan lawan."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かみつく",
			'zh-tw': "咬住",
			th: "กัดติด",
			ko: "물기",
			id: "Menggigit"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719483
	}
}

export default card