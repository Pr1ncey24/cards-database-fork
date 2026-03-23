import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "クエスパトラ",
		'zh-tw': "超能豔鴕",
		th: "เควสพัตรา",
		ko: "클레스퍼트라",
		id: "Espathra"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [956],
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "大きな 瞳から サイコパワーを 浴びせて 相手を 動けなくする。 見かけによらず 気性は 荒い。",
		'zh-tw': "會從大大的眼睛放出精神力量讓對手無法動彈。 有別外表，性格非常粗暴。",
		th: "อาบตัวอีกฝ่ายด้วยพลังจิตจากดวงตาอันใหญ่โตเพื่อทำให้เคลื่อนไหวไม่ได้ มีนิสัยโหดร้ายขัดกับรูปลักษณ์ภายนอก",
		ko: "커다란 눈동자에서 사이코 파워를 발산하여 상대를 움직일 수 없게 한다. 겉보기와 다르게 성질이 사납다.",
		id: "Espathra membuat lawannya menjadi tidak berkutik dengan memancarkan kekuatan psikokinesis dari bola mata besarnya. Berbanding terbalik dengan penampilannya, sifat Pokémon ini kasar."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "がんりき",
			'zh-tw': "眼力",
			th: "พลังเนตร",
			ko: "안력",
			id: "Kekuatan Mata"
		},

		damage: 20,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้",
			ko: "상대의 다음 차례에 이 기술을 받은 포켓몬은 후퇴할 수 없다.",
			id: "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "サイコキネシス",
			'zh-tw': "精神強念",
			th: "ไซโคคิเนซิส",
			ko: "사이코키네시스",
			id: "Psikis"
		},

		damage: "30+",

		effect: {
			ja: "相手のバトルポケモンについているエネルギーの数×50ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×50點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x50",
			ko: "상대의 배틀 포켓몬에게 붙어 있는 에너지의 개수 × 50데미지를 추가한다.",
			id: "Kerusakan yang diberikan bertambah sejumlah 50 untuk tiap Energi yang dikenakan pada Pokémon Bertarung lawan."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card