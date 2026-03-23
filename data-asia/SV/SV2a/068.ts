import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "カイリキー",
		'zh-tw': "怪力",
		th: "ไคริกี",
		ko: "괴력몬",
		id: "Machamp"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [68],
	hp: 180,
	types: ["Fighting"],

	description: {
		ja: "４本の 腕は 考えるより 早く 反射的に 動き 何発もの パンチを 繰りだせる。",
		'zh-tw': "４隻手臂在思考之前就會反射性地行動， 使出多發拳擊。",
		th: "แขนทั้ง 4 แขนตอบสนองได้รวดเร็วยิ่งกว่าความคิด สามารถออกหมัดได้ทีละหลาย ๆ หมัด",
		ko: "4개의 팔은 생각하는 것보다 빠르게 반사적으로 움직이며 여러 발의 펀치를 날린다.",
		id: "Keempat lengan Machamp bergerak cepat secara refleks melebihi kecepatan berpikir, sehingga dapat meluncurkan banyak pukulan secara sekaligus."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "こんじょう",
			'zh-tw': "毅力",
			th: "มุ่งมั่น",
			ko: "근성",
			id: "Nyali"
		},

		effect: {
			ja: "このポケモンが、ワザのダメージを受けてきぜつするとき、自分はコインを1回投げる。オモテなら、このポケモンはきぜつせず、残りHPが「10」の状態で場に残る。",
			'zh-tw': "這隻寶可夢受到招式的傷害而【昏厥】時，自己擲1次硬幣。若為正面，則這隻寶可夢不會【昏厥】，而是以剩餘HP為「10」的狀態留在場上。",
			th: "เมื่อโปเกมอนนี้ ได้รับแดเมจของท่าต่อสู้และจะ[หมดสภาพ] ฝ่ายเราทอยเหรียญ 1 ครั้ง ถ้าออกหัว โปเกมอนนี้จะไม่[หมดสภาพ] และจะอยู่บนกระดานด้วย HP ที่เหลือ [10]",
			ko: "이 포켓몬이 기술의 데미지를 받아 기절할 때 자신은 동전을 1번 던진다. 앞면이 나오면 이 포켓몬은 기절하지 않고 남은 HP가 「10」인 상태로 필드에 남는다.",
			id: "Saat Pokémon ini KO karena menerima kerusakan akibat serangan, pemain melempar koin 1 kali. Jika hasilnya sisi depan, Pokémon ini tidak KO dan tetap berada di Arena dengan kondisi sisa HP sejumlah 10."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "マウンテンチョップ",
			'zh-tw': "山岳劈打",
			th: "เมาน์เทนช็อป",
			ko: "마운틴촙",
			id: "Mountain Chop"
		},

		damage: 100,

		effect: {
			ja: "相手の山札を上から2枚トラッシュする。",
			'zh-tw': "將對手的牌庫上方2張卡丟棄。",
			th: "ทิ้งการ์ด 2 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด",
			ko: "상대의 덱을 위에서부터 2장 트래쉬한다.",
			id: "Buang 2 kartu dari atas Deck lawan ke Trash."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719510
	}
}

export default card