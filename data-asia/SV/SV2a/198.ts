import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ナナミの手助け",
		'zh-tw': "奈奈美的幫助[支援者]",
		th: "การช่วยเหลือของนานามิ[ซัพพอร์ต]",
		ko: "남나리의 도움",
		id: "Bantuan Daisy[Supporter]"
	},

	illustrator: "Fumie Kittaka",
	category: "Trainer",
	rarity: "Secret Rare",

	effect: {
		ja: "自分の山札を2枚引く。ウラになっている自分のサイドのオモテをすべて見てから、もとにもどす。",
		'zh-tw': "從自己的牌庫抽出2張卡。在看過所有反面朝上的自己的獎賞卡的正面後，回復原樣。",
		th: "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา ดูหน้าการ์ดรางวัลที่คว่ำอยู่ทั้งหมดของฝ่ายเรา แล้วคืนที่เดิม",
		ko: "자신의 덱을 2장 뽑는다. 뒷면으로 된 자신의 프라이즈의 앞면을 모두 보고나서 원래대로 되돌린다.",
		id: "Ambil 2 kartu dari atas Deck sendiri. Lihat sisi depan semua Kartu Point sendiri yang sisi depannya menghadap ke bawah, lalu kembalikan ke posisi semula."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card