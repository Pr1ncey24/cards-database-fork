import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ウミトリオ",
		'zh-tw': "三海地鼠",
		th: "อุมิทริโอ",
		ko: "바닥트리오",
		id: "Wugtrio"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [961],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "見かけによらず 気性が 荒い。 長い 体で 獲物を 締め上げ 巣穴に 引きずりこむぞ。",
		'zh-tw': "有別於外表，性格非常粗暴。會用長長的身體勒緊獵物， 然後拖進自己的巢穴裡。",
		th: "มีนิสัยโหดร้ายขัดกับรูปลักษณ์ภายนอก ใช้ร่างกายที่ยาวของมันกอดรัดเหยื่อและลากเข้าไปในรัง",
		ko: "겉보기와 다르게 성질이 사납다. 기다란 몸으로 먹잇감을 죄어서 굴 안으로 끌고 들어간다.",
		id: "Berbanding terbalik dengan penampilannya, sifat Wugtrio kasar. Dengan tubuh panjangnya, Pokémon ini mencekik dan menarik mangsa ke dalam sarangnya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ずつき",
			'zh-tw': "頭錘",
			th: "พุ่งหัวชน",
			ko: "박치기",
			id: "Tandukan Kepala"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "うみほりトンネル",
			'zh-tw': "掘海隧道",
			th: "อุโมงค์ขุดทะเล",
			ko: "바다파기터널",
			id: "Terowongan Galian Laut"
		},

		effect: {
			ja: "コインを3回投げ、オモテの数×3枚ぶん、相手の山札を上からトラッシュする。",
			'zh-tw': "擲3次硬幣，將對手的牌庫上方與正面出現的次數×3張相同數量的卡丟棄。",
			th: "ทอยเหรียญ 3 ครั้ง ทิ้งการ์ดจากด้านบนของสำรับการ์ดฝ่ายตรงข้าม ตามจำนวนครั้งที่ออกหัว x3 ใบที่ตำแหน่งทิ้งการ์ด",
			ko: "동전을 3번 던져서 앞면이 나온 수 × 3장만큼 상대의 덱을 위에서부터 트래쉬한다.",
			id: "Lempar koin 3 kali. Buang sejumlah 3 kartu dari atas Deck lawan ke Trash untuk tiap lemparan dengan hasil sisi depan."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card