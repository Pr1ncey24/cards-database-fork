import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニョロモ",
		'zh-tw': "蚊香蝌蚪",
		th: "เนียวโรโมะ",
		ko: "발챙이",
		id: "Poliwag"
	},

	illustrator: "Kurata So",
	rarity: "Common",
	category: "Pokemon",
	dexId: [60],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "流れが 速い 川では ぶ厚い 唇を 吸盤のように 岩に くっつけて しがみつく。",
		'zh-tw': "在水流湍急的河川裡，會把厚厚的嘴唇當作吸盤， 吸附在岩石上避免被沖走。",
		th: "ในแม่น้ำที่ไหลเชี่ยวจะใช้ริมฝีปากหนา ๆ ยึดติดกับหินไว้เหมือนกับปุ่มดูด",
		ko: "유속이 빠른 강에서는 두꺼운 입술을 흡반처럼 사용해 바위에 달라붙는다.",
		id: "Pada sungai yang alirannya deras, Poliwag bertahan agar tidak terbawa arus dengan menempelkan bibir tebalnya ke bebatuan bagaikan pengisap."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "あわ",
			'zh-tw': "泡沫",
			th: "ฟอง",
			ko: "거품",
			id: "Gelembung"
		},

		damage: 10,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 마비로 만든다.",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719502
	}
}

export default card