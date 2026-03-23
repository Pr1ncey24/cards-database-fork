import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "オリーヴァ",
		'zh-tw': "奧利瓦",
		th: "โอลีวา",
		ko: "올리르바",
		id: "Arboliva"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [930],
	hp: 150,
	types: ["Grass"],

	description: {
		ja: "穏やかで とても 慈悲深い。 栄養豊富な 美味しい オイルを 弱った ポケモンに 分け与える。",
		'zh-tw': "性情溫和，慈悲為懷。會把營養豐富且美味可口 的油分給虛弱的寶可夢。",
		th: "อ่อนโยนและมีความเมตตาต่อผู้อื่นเป็นอย่างมาก จะแบ่งน้ำมันที่อร่อยและมีสารอาหารเปี่ยมล้นให้กับโปเกมอนที่อ่อนแอ",
		ko: "온화하면서도 매우 자비롭다. 영양이 풍부한 맛있는 오일을 약해진 포켓몬에게 나눠 준다.",
		id: "Sifatnya tenang dan sangat penyayang. Arboliva memberikan minyak bernutrisi nan lezat kepada Pokémon yang melemah."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "まんたんオイル",
			'zh-tw': "全滿油",
			th: "น้ำมันเปี่ยมพลัง",
			ko: "풀회복오일",
			id: "Minyak Penuh"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のポケモン1匹のHPを、すべて回復する。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。將自己的1隻寶可夢的HP全部恢復。",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง ฟื้นฟู HP ทั้งหมดของโปเกมอนฝ่ายเรา 1 ตัว",
			ko: "자신의 차례에 이 카드를 패에서 꺼내서 진화시켰을 때 1번 사용할 수 있다. 자신의 포켓몬 1마리의 HP를 모두 회복한다.",
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Pulihkan HP 1 Pokémon sendiri sepenuhnya."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "ソーラービーム",
			'zh-tw': "日光束",
			th: "โซล่าร์บีม",
			ko: "솔라빔",
			id: "Solar Beam"
		},

		damage: 150
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card