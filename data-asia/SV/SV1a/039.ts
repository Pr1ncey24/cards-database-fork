import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤレユータン",
		'zh-tw': "智揮猩",
		th: "ยาเรยูตัน",
		ko: "하랑우탄",
		id: "Oranguru"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [765],
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "森の ポケモンたちに つぎつぎと 指示を だす 姿から 昔は 人間だと 思われていた。",
		'zh-tw': "牠對著森林的寶可夢們接二連三下達指示的樣子， 讓牠以前被認為是人類。",
		th: "เคยถูกมองว่าเป็นมนุษย์ เพราะท่าทีที่คอยออกคำสั่งแก่โปเกมอนในป่าเรื่อย ๆ",
		ko: "숲의 포켓몬들에게 계속해서 지시를 내리는 모습 때문에 옛날에는 인간이었던 것으로 여겨지고 있다.",
		id: "Karena sosoknya yang selalu memberikan perintah kepada para Pokémon yang ada di hutan, Oranguru disangka sebagai manusia pada zaman dahulu."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "さくしのぐんばい",
			'zh-tw': "策士配兵",
			th: "พัดนำทัพของจอมวางแผน",
			ko: "책사의부채",
			id: "Kipas Perang Ahli Strategi"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンが持っているワザを1つ選ぶ。次の相手の番、このワザを受けたポケモンは、選ばれたワザが使えない。",
			'zh-tw': "選擇1個對手的戰鬥寶可夢持有的招式。在下個對手的回合，受到這個招式的寶可夢無法使用被選擇的招式。",
			th: "เลือกท่าต่อสู้ที่โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมี 1 ท่า เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะใช้ท่าต่อสู้ที่ถูกเลือกไว้ไม่ได้",
			ko: "상대의 배틀 포켓몬이 가지고 있는 기술을 1개 선택한다. 상대의 다음 차례에 이 기술을 받은 포켓몬은 선택된 기술을 사용할 수 없다.",
			id: "Pilih 1 serangan yang dimiliki Pokémon Bertarung lawan. Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat menggunakan serangan yang telah dipilih."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "ちょうねんりき",
			'zh-tw': "超念力",
			th: "ซูเปอร์โทรจิต",
			ko: "초염동력",
			id: "Psikokinesis Super"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 701093
	}
}

export default card