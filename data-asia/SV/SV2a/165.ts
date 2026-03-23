import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "サイクリングロード",
		'zh-tw': "自行車道",
		th: "ทางจักรยาน",
		ko: "사이클링 로드",
		id: "Jalan Sepeda"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分の手札から基本エネルギーを1枚トラッシュするなら、自分の山札を1枚引いてよい。",
		'zh-tw': "雙方玩家在每個自己的回合時，可使用1次，若從自己的手牌將1張基本能量卡丟棄，則可從自己的牌庫抽出1張卡。",
		th: "ผู้เล่นทั้งสองฝ่าย ในแต่ละเทิร์นของตัวเองทำได้ 1 ครั้ง ถ้าทิ้งการ์ดพลังงานพื้นฐาน 1 ใบจากบนมือฝ่ายตัวเองที่ตำแหน่งทิ้งการ์ด จะจั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายตัวเองก็ได้",
		ko: "서로의 플레이어는 자신의 차례마다 1번 자신의 패에서 기본 에너지를 1장 트래쉬한다면 자신의 덱을 1장 뽑아도 좋다.",
		id: "Kedua pemain 1 kali pada tiap gilirannya sendiri dapat membuang 1 lembar Energi Dasar dari Kartu Pegangan sendiri ke Trash, lalu mengambil 1 kartu dari atas Deck sendiri."
	},

	trainerType: "Stadium",
	regulationMark: "G"
}

export default card