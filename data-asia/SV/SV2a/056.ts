import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "マンキー",
		'zh-tw': "猴怪",
		th: "แมนคี",
		ko: "망키",
		id: "Mankey"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [56],
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "木の上で 群れをつくって 暮らす。 群れから はぐれた マンキーは 寂しくて すぐに 怒りだす。",
		'zh-tw': "在樹上群居的寶可夢。和夥伴走散的猴怪會因為 按捺不住寂寞而動不動就生氣。",
		th: "อาศัยอยู่กันเป็นฝูงบนต้นไม้ แมนคีที่พลัดจากฝูงจะเหงาจนโกรธขึ้นมา",
		ko: "나무 위에 무리 지어 산다. 무리에서 떨어진 망키는 외로운 나머지 금방 화를 낸다.",
		id: "Pokémon ini hidup berkelompok di atas pohon. Mankey yang terpisah dari kawanannya langsung mengamuk karena kesepian."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "あばれる",
			'zh-tw': "大鬧一番",
			th: "อาละวาด",
			ko: "난동부리기",
			id: "Pukulan Membabi Buta"
		},

		damage: "20+",

		effect: {
			ja: "コインを1回投げオモテなら、20ダメージ追加。ウラなら、このポケモンにも20ダメージ。",
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。若為反面，則這隻寶可夢也受到20點傷害。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 20 ถ้าออกก้อย โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย",
			ko: "동전을 1번 던져서 앞면이 나오면 20데미지를 추가한다. 뒷면이 나오면 이 포켓몬에게도 20데미지를 준다.",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 20. Jika hasilnya sisi belakang, Pokémon ini juga menerima kerusakan sejumlah 20."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719498
	}
}

export default card