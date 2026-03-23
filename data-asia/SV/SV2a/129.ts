import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "コイキング",
		'zh-tw': "鯉魚王",
		th: "คอยคิง",
		ko: "잉어킹",
		id: "Magikarp"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [129],
	hp: 30,
	types: ["Water"],

	description: {
		ja: "力のない 情けない ポケモン。 たまに 高く 飛び跳ねても ２メートルを 超すのが やっとだ。",
		'zh-tw': "沒力量的可憐寶可夢。偶爾跳得比較高時， 也只是勉強高過2公尺而已。",
		th: "เป็นโปเกมอนที่อ่อนแอและน่าสมเพช นาน ๆ ทีกระโดดสูงเกิน 2 เมตรก็นับว่าดีแล้ว",
		ko: "힘없는 한심한 포켓몬이다. 가끔 높이 뛰어오르지만 2m를 겨우 넘기는 게 고작이다.",
		id: "Pokémon menyedihkan yang tidak memiliki kekuatan. Walau kadang Magikarp melompat tinggi, ketinggiannya hampir tidak dapat melampaui 2 meter."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "はねにはねる",
			'zh-tw': "跳了又跳",
			th: "ดิ้นกระแด่วกระแด่ว",
			ko: "튀어 튀어오르기",
			id: "Lompatan Demi Lompatan"
		},

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数ぶん、自分の山札を引く。",
			'zh-tw': "擲硬幣直到出現反面，從自己的牌庫抽出與正面出現的次數相同數量的卡。",
			th: "ทอยเหรียญจนกว่าจะออกก้อย จั่วการ์ดจากสำรับการ์ดฝ่ายเรา ตามจำนวนครั้งที่ออกหัว",
			ko: "뒷면이 나올 때까지 동전을 던져서 앞면이 나온 수만큼 자신의 덱을 뽑는다.",
			id: "Lempar koin hingga hasilnya sisi belakang. Ambil kartu dari atas Deck sendiri untuk tiap lemparan dengan hasil sisi depan."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719582
	}
}

export default card