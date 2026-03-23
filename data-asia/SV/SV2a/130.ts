import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ギャラドス",
		'zh-tw': "暴鯉龍",
		th: "เกียราดอส",
		ko: "갸라도스",
		id: "Gyarados"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [130],
	hp: 190,
	types: ["Water"],

	description: {
		ja: "一度 姿を 現すと まわりを すべて 焼き尽くさないと 怒りが 鎮まらない という。",
		'zh-tw': "據說暴鯉龍一旦現身，如果不把周圍的一切都 燃燒殆盡，怒火就不會平息。",
		th: "ว่ากันว่า เมื่อปรากฏตัวออกมาครั้งหนึ่งแล้ว ถ้าไม่ได้ทำลายทุกอย่างโดยรอบให้ราบเป็นหน้ากลองก็จะไม่หายโกรธ",
		ko: "한번 모습을 나타내면 주변 전체를 태워 버리지 않고는 분노가 가라앉지 않는다고 전해진다.",
		id: "Gyarados langsung mengamuk begitu muncul. Dikabarkan amukan Pokémon ini tidak akan mereda hingga ia membumihanguskan sekitarnya."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "あらくれもの",
			'zh-tw': "暴躁者",
			th: "ผู้ระราน",
			ko: "난폭한 자",
			id: "Perusak"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、必ず1回使う。自分の山札を上から5枚トラッシュする。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，一定要使用1次。將自己的牌庫上方5張卡丟棄。",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ต้องใช้ 1 ครั้ง ทิ้งการ์ด 5 ใบจากด้านบนของสำรับการ์ดฝ่ายเราที่ตำแหน่งทิ้งการ์ด",
			ko: "자신의 차례에 이 카드를 패에서 꺼내서 진화시켰을 때 반드시 1번 사용한다. 자신의 덱을 위에서부터 5장 트래쉬한다.",
			id: "Harus digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Buang 5 kartu dari atas Deck sendiri ke Trash."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "はかいこうせん",
			'zh-tw': "破壞光線",
			th: "แสงมฤตยู",
			ko: "파괴광선",
			id: "Sinar Hiper"
		},

		damage: 200,

		effect: {
			ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			ko: "상대의 배틀 포켓몬에게 붙어 있는 에너지를 1개 선택해서 트래쉬한다.",
			id: "Pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719583
	}
}

export default card