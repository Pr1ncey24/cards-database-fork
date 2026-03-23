import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "モルフォン",
		'zh-tw': "摩魯蛾",
		th: "มอร์ฟอน",
		ko: "도나리",
		id: "Venomoth"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [49],
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "翅に りんぷんが ついていて ヒラヒラと 羽ばたくたびに 猛毒の粉を ばらまく。",
		'zh-tw': "翅膀上附著鱗粉，每次翩翩拍動翅膀， 就會散播劇毒的粉末。",
		th: "มีเกล็ดติดอยู่บนปีก และทุกครั้งที่กระพือปีกจะโปรยผงพิษรุนแรงไปทั่ว",
		ko: "날개에 가루가 묻어 있어 팔락팔락 날갯짓을 할 때마다 맹독 가루를 흩뿌린다.",
		id: "Terdapat sisik pada sayap Venomoth. Pokémon ini menyebarkan bubuk beracun tiap kali ia mengepakkan sayapnya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "さくらんパウダー",
			'zh-tw': "錯亂粉",
			th: "ผงอลเวง",
			ko: "착란파우더",
			id: "Bubuk Distraksi"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。次の相手の番、相手は手札からグッズを出して使えない。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。在下個對手的回合，對手無法從手牌使出物品卡。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน] เทิร์นถัดไปของฝ่ายตรงข้าม ฝ่ายตรงข้ามไม่สามารถนำการ์ดไอเท็มจากบนมือออกมาใช้ได้",
			ko: "상대의 배틀 포켓몬을 혼란으로 만든다. 상대의 다음 차례에 상대는 패에서 아이템을 꺼내서 사용할 수 없다.",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing. Pada giliran lawan berikutnya, lawan tidak dapat memainkan Item dari Kartu Pegangan."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "スピードウイング",
			'zh-tw': "高速之翼",
			th: "สปีดวิง",
			ko: "스피드윙",
			id: "Speed Wing"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719491
	}
}

export default card