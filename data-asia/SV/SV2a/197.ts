import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "サカキのカリスマ",
		'zh-tw': "坂木的領導力[支援者]",
		th: "เสน่ห์ของซากากิ[ซัพพอร์ต]",
		ko: "비주기의 카리스마",
		id: "Karisma Giovanni[Supporter]"
	},

	illustrator: "hncl",
	category: "Trainer",

	effect: {
		ja: "相手のバトルポケモンについているエネルギーを1個選び、相手の手札にもどす。その後、自分の手札からエネルギーを1枚選び、バトルポケモンにつける。",
		'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，放回對手的手牌。然後，從自己的手牌選擇1張能量卡，附於戰鬥寶可夢身上。",
		th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก นำกลับขึ้นมือฝ่ายตรงข้าม หลังจากนั้น เลือกการ์ดพลังงาน 1 ใบจากบนมือฝ่ายเรา ติดที่โปเกมอนบนตำแหน่งต่อสู้",
		ko: "상대의 배틀 포켓몬에게 붙어 있는 에너지를 1개 선택해서 상대의 패로 되돌린다. 그 뒤, 자신의 패에서 에너지를 1장 선택해서 배틀 포켓몬에게 붙인다.",
		id: "Pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu kembalikan ke Kartu Pegangan lawan. Setelah itu, pilih 1 lembar Energi dari Kartu Pegangan sendiri, lalu kenakan pada Pokémon Bertarung."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card