import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "モンジャラ",
		'zh-tw': "蔓藤怪",
		th: "มอนจารา",
		ko: "덩쿠리",
		id: "Tangela"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	rarity: "Illustration rare",
	dexId: [114],
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "ちぎれても 無限に 伸びる ツルの 奥の 正体は いまだ 解明されていない。",
		'zh-tw': "藤蔓即使斷了也會繼續無限地生長。藤蔓下的真面目至今仍是個謎。",
		th: "แม้เถาวัลย์จะขาดก็ยืดยาวออกมาได้ไม่มีที่สิ้นสุด ตัวตนลึก ๆ ที่แท้จริงของมัน จนทุกวันนี้ก็ยังพิสูจน์ไม่ได้",
		ko: "잘려도 잘려도 무한으로 늘어나는 덩굴 속의 정체는 아직 밝혀지지 않았다.",
		id: "Hingga saat ini, wujud asli Tangela di balik jalar yang terus tumbuh tanpa batas walau dicabut ini masih belum terungkap."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "まきつきさほう",
			'zh-tw': "緊束作法",
			th: "วิธีการพันเลื้อย",
			ko: "김밥마는예법",
			id: "Etiket Membelit"
		},

		damage: "10+",

		effect: {
			ja: "この番、手札から「エリカの招待」を出して使っていたなら、60ダメージ追加。",
			'zh-tw': "在這個回合，若從手牌使出了「莉佳的招待」，則增加60點傷害。",
			th: "เทิร์นนี้ ถ้านำการ์ด [คำเชิญของเอริกะ] จากบนมือออกมาใช้แล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 60",
			ko: "이 차례에 패에서 「민화의 초대」를 꺼내서 사용했다면 60데미지를 추가한다.",
			id: "Jika pada giliran ini, Undangan Erika telah dimainkan dari Kartu Pegangan, kerusakan yang diberikan bertambah sejumlah 60."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719567
	}
}

export default card