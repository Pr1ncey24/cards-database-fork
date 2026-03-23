import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "コダック",
		'zh-tw': "可達鴨",
		th: "โคดัก",
		ko: "고라파덕",
		id: "Psyduck"
	},

	illustrator: "Taira Akitsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [54],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "いつも 頭痛に 悩まされている。 この 頭痛が 激しくなると 不思議な 力を 使いはじめる。",
		'zh-tw': "一直受到頭痛的困擾。當頭痛欲裂時， 就會開始使用神奇的力量。",
		th: "หงุดหงิดกับอาการปวดหัวอยู่เสมอ พออาการปวดหัวรุนแรงขึ้นจะเริ่มใช้พลังลึกลับ",
		ko: "항상 두통에 시달리고 있다. 이 두통이 심해지면 이상한 힘을 쓰기 시작한다.",
		id: "Psyduck selalu terganggu dengan sakit kepalanya. Pokémon ini mulai menggunakan kekuatan ajaibnya jika kepalanya menjadi makin sakit."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かんがえすぎる",
			'zh-tw': "過慮",
			th: "คิดมาก",
			ko: "지나친생각",
			id: "Kebanyakan Berpikir"
		},

		effect: {
			ja: "次の相手の番、相手が投げるコインは、すべてウラとしてあつかう。",
			'zh-tw': "在下個對手的回合，對手擲的硬幣全部視為反面。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม เหรียญที่ฝ่ายตรงข้ามทอย จะถือว่าออกก้อยทั้งหมด",
			ko: "상대의 다음 차례에 상대가 던지는 동전은 모두 뒷면으로 다룬다.",
			id: "Pada giliran lawan berikutnya, semua lemparan koin yang dilakukan lawan diperlakukan sebagai sisi belakang."
		}
	}, {
		cost: ["Water"],

		name: {
			ja: "みずでっぽう",
			'zh-tw': "水槍",
			th: "ปืนฉีดน้ำ",
			ko: "물대포",
			id: "Pistol Air"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719496
	}
}

export default card