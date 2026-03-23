import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "タマタマ",
		'zh-tw': "蛋蛋",
		th: "ทามะทามะ",
		ko: "아라리",
		id: "Exeggcute"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [102],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "６匹で いないと 落ち着かない。 １匹でも いなくなると とたんに 逃げ腰に なるのだ。",
		'zh-tw': "非得湊齊６隻才會有安全感。那怕只是少了１隻，都會立刻 變得很膽小，隨時想要逃跑。",
		th: "ถ้าอยู่ไม่ครบทั้ง 6 ตัวจะรู้สึกไม่สงบใจ ถ้าหายไปแม้แต่ 1 ตัวจะเตรียมตัววิ่งหนีทันที",
		ko: "6마리가 아니면 진정하지 못한다. 1마리라도 없어지면 바로 도망태세가 된다.",
		id: "Exeggcute tidak tenang jika tidak berenam. Begitu salah satu menghilang, Pokémon ini segera ingin melarikan diri."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "たまころがり",
			'zh-tw': "滾球",
			th: "กลิ้งบอล",
			ko: "구슬구르기",
			id: "Menggelindingkan Bola"
		},

		damage: "30×",

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数×30ダメージ。",
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×30點傷害。",
			th: "ทอยเหรียญจนกว่าจะออกก้อย แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x30",
			ko: "뒷면이 나올 때까지 동전을 던져서 앞면이 나온 수 × 30데미지를 준다.",
			id: "Lempar koin hingga hasilnya sisi belakang. Serangan ini memberikan kerusakan sejumlah 30 untuk tiap lemparan dengan hasil sisi depan."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719555
	}
}

export default card