import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "プクリンex",
		'zh-tw': "胖可丁ex",
		th: "พูคูรินex",
		ko: "푸크린 ex",
		id: "Wigglytuff ex"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 250,
	types: ["Colorless"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ふくらむボディ",
			'zh-tw': "膨脹之軀",
			th: "ร่างพอง",
			ko: "부푼 바디",
			id: "Tubuh Menggelembung"
		},

		effect: {
			ja: "このポケモンに特殊エネルギーがついているなら、このポケモンの最大HPは「+100」される。",
			'zh-tw': "若這隻寶可夢身上附有特殊能量卡，則這隻寶可夢的最大HP「+100」。",
			th: "ถ้าโปเกมอนนี้มีพลังงานพิเศษติดอยู่ HP สูงสุดของโปเกมอนนี้จะถูก [+100]",
			ko: "이 포켓몬에게 특수 에너지가 붙어 있다면 이 포켓몬의 최대 HP는 「+100」이 된다.",
			id: "Jika Pokémon ini mengenakan Energi Spesial, HP maksimal Pokémon ini bertambah sejumlah 100."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "フレンドタックル",
			'zh-tw': "朋友衝撞",
			th: "เฟรนด์แท็กเกิล",
			ko: "프렌드태클",
			id: "Friend Tackle"
		},

		damage: "90+",

		effect: {
			ja: "この番、手札からサポートを出して使っていたなら、90ダメージ追加。",
			'zh-tw': "在這個回合，若從手牌使出了支援者卡，則增加90點傷害。",
			th: "เทิร์นนี้ ถ้านำการ์ดซัพพอร์ตจากบนมือออกมาใช้แล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 90",
			ko: "이 차례에 패에서 서포트를 꺼내서 사용했다면 90데미지를 추가한다.",
			id: "Jika pada giliran ini, Supporter telah dimainkan dari Kartu Pegangan, kerusakan yang diberikan bertambah sejumlah 90."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719482
	}
}

export default card