import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ラフレシア",
		'zh-tw': "霸王花",
		th: "รัฟเฟรเซีย",
		ko: "라플레시아",
		id: "Vileplume"
	},

	illustrator: "Sekio",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [45],
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "花びらが 大きいほど たくさん 花粉を 出すが 頭が 重たくて 疲れてしまうという。",
		'zh-tw': "雖然花瓣越大就能放出越多的花粉，但頭部也會 隨之變重而容易疲倦。",
		th: "ว่ากันว่ายิ่งกลีบดอกใหญ่เท่าไรยิ่งปล่อยละอองเกสรได้มากเท่านั้น แต่หัวหนักจนทำให้รู้สึกเหนื่อย",
		ko: "꽃잎이 클수록 많은 꽃가루를 만들어 내지만 머리가 무거워서 지쳐버린다고 한다.",
		id: "Makin besar kelopak bunga Vileplume, makin banyak pula serbuk sari yang dapat dikeluarkan olehnya. Akan tetapi, dikatakan bahwa kepalanya yang berat membuat Pokémon ini kelelahan."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "まんかいエナジー",
			'zh-tw': "全開能量",
			th: "พลังงานบานสะพรั่ง",
			ko: "만개 에너지",
			id: "Energi Mekar Penuh"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札を上から8枚見て、その中から基本エネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。残りのカードは山札にもどして切る。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。查看自己的牌庫上方8張卡，從其中選擇任意數量的基本能量卡，以任意方式附於自己的寶可夢身上。將剩餘卡放回牌庫並重洗。",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง ดูการ์ด 8 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ดพลังงานพื้นฐานจากในนั้นตามจำนวนที่ชอบ ติดที่โปเกมอนฝ่ายเราตามชอบ การ์ดที่เหลือใส่กลับไปในสำรับการ์ดแล้วสับ",
			ko: "자신의 차례에 이 카드를 패에서 꺼내서 진화시켰을 때 1번 사용할 수 있다. 자신의 덱을 위에서부터 8장 보고 그 중에서 기본 에너지를 원하는 만큼 선택해서 자신의 포켓몬에게 원하는 대로 붙인다. 남은 카드는 덱으로 되돌리고 섞는다.",
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Lihat 8 kartu dari atas Deck sendiri, pilih sesukanya Energi Dasar di antaranya, lalu kenakan sesukanya pada Pokémon sendiri. Kocok kembali sisa kartu ke Deck."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "ソーラービーム",
			'zh-tw': "日光束",
			th: "โซล่าร์บีม",
			ko: "솔라빔",
			id: "Solar Beam"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719487
	}
}

export default card