import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "タイカイデン",
		'zh-tw': "大電海燕",
		th: "ไทไคเด็น",
		ko: "찌리비크",
		id: "Kilowattrel"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [941],
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "のど袋を ふくらませて 電気を 増幅させる。 風に 乗って １日で ７００キロを 飛行する。",
		'zh-tw': "會膨脹喉囊來增強電力。可以乘著風在１天內 就飛上７００公里。",
		th: "พองถุงคอเพื่อเพิ่มกระแสไฟฟ้า โบยบินตามสายลมเป็นระยะทาง 700 กิโลเมตรในหนึ่งวัน",
		ko: "목의 주머니를 부풀려서 전기를 증폭시킨다. 바람을 타고 하루에 700km를 비행할 수 있다.",
		id: "Kilowattrel menggembungkan kantong tenggorokannya dan menambahkan daya listriknya. Pokémon ini menaiki angin dan terbang sejauh 700 km dalam sehari."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "つつく",
			'zh-tw': "啄",
			th: "จิก",
			ko: "쪼기",
			id: "Mematuk"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ジェットウイング",
			'zh-tw': "噴射之翼",
			th: "เจ็ตวิง",
			ko: "제트윙",
			id: "Jet Wing"
		},

		damage: 150,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			ko: "자신의 다음 차례에 이 포켓몬은 기술을 사용할 수 없다.",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
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

	retreat: 0,
	regulationMark: "G"
}

export default card