import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "グルトン",
		'zh-tw': "愛吃豚",
		th: "กูร์ตง",
		ko: "맛보돈",
		id: "Lechonk"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [915],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "一日中 エサを 探す。 優れた 嗅覚を 持つが エサ探し 以外に 使わない。",
		'zh-tw': "一整天都在覓食。雖然擁有優秀的嗅覺， 但卻只被用在覓食上。",
		th: "หาอาหารตลอดวัน มีประสาทการรับกลิ่นที่ยอดเยี่ยมแต่จะไม่ใช้ไปกับเรื่องที่ไม่เกี่ยวข้องกับการหาอาหาร",
		ko: "하루 종일 먹이를 찾는다. 뛰어난 후각을 가졌지만 먹이를 찾는 일 외에는 사용하지 않는다.",
		id: "Lechonk mencari makanan seharian penuh. Meskipun memiliki indra penciuman yang sangat baik, Pokémon ini tidak menggunakannya selain untuk mencari makan."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "きまぐれタックル",
			'zh-tw': "胡思亂撞",
			th: "โจมตีแปรปรวน",
			ko: "변덕 태클",
			id: "Serudukan Semaunya"
		},

		damage: 70,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。",
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกก้อย ท่าต่อสู้นี้จะล้มเหลว",
			ko: "동전을 1번 던져서 뒷면이 나오면 이 기술은 실패한다.",
			id: "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card