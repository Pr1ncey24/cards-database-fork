import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "古びたこうらの化石",
		'zh-tw': "陳舊的甲殼化石",
		th: "ฟอสซิลกระดองเก่าแก่",
		ko: "오래된 조개화석",
		id: "Fosil Cangkang Usang"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Common",
	category: "Trainer",
	hp: 60,

	effect: {
		ja: "このカードは、HP60のタイプのたねポケモンとして、場に出せる。このカードは、特殊状態にならず、にげられない。\n自分の番の中でなら、場に出ているこのカードをトラッシュできる。",
		'zh-tw': "這張卡可作為HP60的【無】屬性的【基礎】寶可夢放置於場上。這張卡不會陷入特殊狀態，無法撤退。若在自己的回合中，則可將場上的這張卡丟棄。 [特性]甲殼鎧甲 這隻寶可夢受到招式的傷害「-30」點。",
		th: "การ์ดนี้ สามารถวางบนกระดานได้ เทียบเท่ากับโปเกมอน[พื้นฐาน]ประเภท[ไร้สี]ที่มี HP 60 การ์ดนี้ จะไม่เป็นสภาวะผิดปกติ และจะหนีไม่ได้ ถ้าอยู่ภายในเทิร์นฝ่ายเรา จะทิ้งการ์ดนี้ที่วางอยู่บนกระดานที่ตำแหน่งทิ้งการ์ดได้ [ความสามารถ] เกราะกระดอง แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-30]",
		ko: "이 카드는 HP60의(무색)타입의기본포켓몬으로서 필드에 내보낼 수 있다. 이 카드는 특수 상태가 되지 않으며 후퇴할 수 없다.\n자신의 차례라면 필드에 나와 있는 이 카드를 트래쉬할 수 있다.\n이 포켓몬이 배틀필드에 있는 한, 상대는 패에서 스타디움을 꺼낼 수 없다.",
		id: "Kartu ini dapat dimasukkan ke Arena sebagai Pokémon Basic tipe {Bening} dengan HP sejumlah 60. Kartu ini tidak akan menjadi Kondisi Khusus dan tidak dapat Mundur. Pada giliran sendiri, kartu ini yang ada di Arena dapat dibuang ke Trash. [Ability] Lamina Cangkang Kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card