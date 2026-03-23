import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "デカヌチャン",
		'zh-tw': "巨鍛匠",
		th: "เดคานุจัง",
		ko: "두드리짱",
		id: "Tinkaton"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [959],
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "知能が 高く とても 豪快。 ハンマーで 岩を 殴り飛ばして 空飛ぶ アーマーガアを 狙う。",
		'zh-tw': "智商高超，性格豪邁。會用錘子打飛岩石來攻擊 飛在空中的鋼鎧鴉。",
		th: "มีสติปัญญาเป็นเลิศและห้าวหาญมาก เล็งและใช้ค้อนทุบหินให้กระเด็นไปโดนอาร์เมอร์การ์ที่บินอยู่",
		ko: "지능이 높고 매우 호쾌하다. 해머로 바위를 날려서 하늘을 나는 아머까오를 노린다.",
		id: "Tinkaton memiliki kecerdasan tinggi dan sangat kuat. Ia memukul batu ke langit menggunakan palunya dan mengincar Corviknight yang terbang."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "そざいあつめ",
			'zh-tw': "收集素材",
			th: "สะสมวัตถุดิบ",
			ko: "소재 모으기",
			id: "Mengumpulkan Bahan"
		},

		effect: {
			ja: "自分の番に、自分の手札を1枚トラッシュするなら、1回使える。自分の山札を3枚引く。",
			'zh-tw': "在自己的回合，若將自己的1張手牌丟棄，則可使用1次。從自己的牌庫抽出3張卡。",
			th: "ในเทิร์นฝ่ายเรา ถ้าทิ้งการ์ดบนมือฝ่ายเรา 1 ใบที่ตำแหน่งทิ้งการ์ด ใช้ได้ 1 ครั้ง จั่วการ์ด 3 ใบจากสำรับการ์ดฝ่ายเรา",
			ko: "자신의 차례에 자신의 패를 1장 트래쉬한다면 1번 사용할 수 있다. 자신의 덱을 3장 뽑는다.",
			id: "Dapat digunakan 1 kali pada giliran sendiri jika membuang 1 lembar Kartu Pegangan sendiri ke Trash. Ambil 3 kartu dari atas Deck sendiri."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "スペシャルハンマー",
			'zh-tw': "特殊鐵錘",
			th: "สเปเชียลแฮมเมอร์",
			ko: "스페셜해머",
			id: "Special Hammer"
		},

		damage: "90+",

		effect: {
			ja: "このポケモンに特殊エネルギーがついているなら、90ダメージ追加。",
			'zh-tw': "若這隻寶可夢身上附有特殊能量卡，則增加90點傷害。",
			th: "ถ้าโปเกมอนนี้มีพลังงานพิเศษติดอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 90",
			ko: "이 포켓몬에게 특수 에너지가 붙어 있다면 90데미지를 추가한다.",
			id: "Jika Pokémon ini mengenakan Energi Spesial, kerusakan yang diberikan bertambah sejumlah 90."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card