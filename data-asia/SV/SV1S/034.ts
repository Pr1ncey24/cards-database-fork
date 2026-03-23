import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "バウッツェル",
		'zh-tw': "麻花犬",
		th: "บัลซ์เซล",
		ko: "바우첼",
		id: "Dachsbun"
	},

	illustrator: "You Iribi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [927],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "体から 放つ 良い香りが 小麦の 成長を 助けるため 農村で 大切にされてきた。",
		'zh-tw': "身體散發出的迷人香氣能有助於小麥的成長，因此 一直都備受農村人家的珍視。",
		th: "กลิ่นหอมที่ปล่อยออกมาจากร่างกายช่วยให้ข้าวสาลีเจริญเติบโต มันจึงได้รับการดูแลเอาใจใส่เป็นอย่างดีในหมู่บ้านเกษตรกรรม",
		ko: "몸에서 나는 좋은 향기가 밀의 성장을 돕기 때문에 농촌에서 소중히 여겨진다.",
		id: "Dachsbun dijaga dengan baik di desa pertanian karena aroma wangi yang keluar dari tubuh Pokémon ini membantu pertumbuhan gandum."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "こんがりボディ",
			'zh-tw': "焦香之軀",
			th: "สุกได้ที่",
			ko: "노릇노릇바디",
			id: "Tubuh Matang"
		},

		effect: {
			ja: "このポケモンは、相手のポケモンからワザのダメージを受けず、やけどにならない。",
			'zh-tw': "這隻寶可夢不會受到對手的【火】寶可夢招式的傷害，不會【灼傷】。",
			th: "โปเกมอนนี้ จะไม่ได้รับแดเมจของท่าต่อสู้จากโปเกมอน[ไฟ]ฝ่ายตรงข้าม และไม่เป็นสภาวะ[ไหม้]",
			ko: "이 포켓몬은 상대의(불꽃)포켓몬으로부터 기술의 데미지를 받지 않고화상이 되지 않는다.",
			id: "Pokémon ini tidak menerima kerusakan akibat serangan dari Pokémon {Api} lawan dan tidak akan menjadi Luka Bakar."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "とびだしヘッド",
			'zh-tw': "魯莽頭擊",
			th: "กระโดดโหม่ง",
			ko: "머리박치기",
			id: "Sundulan Meloncat"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card