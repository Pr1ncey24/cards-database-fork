import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ビリリダマ",
		'zh-tw': "霹靂電球",
		th: "บิริริดามา",
		ko: "찌리리공",
		id: "Voltorb"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	dexId: [100],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "転がって 移動するので 地面が デコボコだと ショックで 爆発してしまう。",
		'zh-tw': "靠著翻滾身體來移動，如果地面凹凸不平， 就會受到衝擊而爆炸。",
		th: "เคลื่อนที่โดยการกลิ้ง ถ้าพื้นไม่สม่ำเสมอจะตกใจจนระเบิด",
		ko: "굴러서 이동하기 때문에 땅이 울퉁불퉁하면 충격으로 폭발해 버린다.",
		id: "Karena Voltorb berpindah-pindah dengan bergelinding, Pokémon ini akan meledak karena guncangan ketika melewati tanah yang tidak rata."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "ローリングアタック",
			'zh-tw': "回轉攻擊",
			th: "โรลลิ่งแอทแทค",
			ko: "롤링어택",
			id: "Rolling Attack"
		},

		damage: "10+",

		effect: {
			ja: "コインを1回投げオモテなら、20ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 20",
			ko: "동전을 1번 던져서 앞면이 나오면 20데미지를 추가한다.",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 20."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719553
	}
}

export default card