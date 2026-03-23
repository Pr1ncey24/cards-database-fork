import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ロコン",
		'zh-tw': "六尾",
		th: "โรคอน",
		ko: "식스테일",
		id: "Vulpix"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [37],
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "６本の しっぽは 育つごとに 毛並みが 良くなり 美しくなる。 抱きしめると ほんのり 温かい。",
		'zh-tw': "隨著身體的成長，６根尾巴的毛髮也會變得更漂亮。 緊緊抱著牠時能感到微微的溫暖。",
		th: "ทุกครั้งที่หางทั้ง 6 หางโตขึ้น เส้นขนจะเรียงสวยงาม พอกอดจะรู้สึกอบอุ่นเล็กน้อย",
		ko: "6개의 꼬리는 자라면서 털의 결이 좋아지며 아름다워진다. 안으면 살짝 따듯하다.",
		id: "Seiring pertumbuhannya, keenam ekor Vulpix menjadi makin cantik dan bulunya makin lembut. Jika dipeluk, Pokémon ini terasa agak hangat."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "ほのおでこがす",
			'zh-tw': "火焰灼燒",
			th: "ลนไฟ",
			ko: "불꽃으로 그을리기",
			id: "Api Penghangus"
		},

		damage: 20,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをやけどにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【灼傷】。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 화상으로 만든다.",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719479
	}
}

export default card