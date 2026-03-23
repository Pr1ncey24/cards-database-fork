import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ベトベター",
		'zh-tw': "臭泥",
		th: "เบโตเบตา",
		ko: "질퍽이",
		id: "Grimer"
	},

	illustrator: "Nisota Niso",
	rarity: "Common",
	category: "Pokemon",
	dexId: [88],
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "ヘドロが ポケモンになった。 汚い 場所に 集まって 体の ばい菌を 増やしていく。",
		'zh-tw': "污泥變成的寶可夢。會聚集在骯髒的地方 來繁殖身體的細菌。",
		th: "โคลนสกปรกกลายเป็นโปเกมอน รวมตัวกันในที่สกปรกเพื่อเพิ่มจำนวนเชื้อโรคในร่างกาย",
		ko: "오물이 포켓몬이 되었다. 더러운 장소에 모여 몸의 세균을 번식시킨다.",
		id: "Limbah yang berubah menjadi Pokémon. Grimer berkumpul di tempat-tempat kotor dan menambahkan bakteri ke tubuhnya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "べっとりプレス",
			'zh-tw': "緊貼壓制",
			th: "อัดเหนียวหนืด",
			ko: "끈끈프레스",
			id: "Tekanan Lengket"
		},

		damage: 10,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげるためのエネルギーが、1個ぶん多くなる。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢【撤退】所需的能量增加1個。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ พลังงานสำหรับ[หนี] จะเพิ่มขึ้น 1 ลูก",
			ko: "상대의 다음 차례에 이 기술을 받은 포켓몬은후퇴에 필요한 에너지가 1개만큼 많아진다.",
			id: "Pada giliran lawan berikutnya, Energi yang dibutuhkan oleh Pokémon yang menerima serangan ini untuk Mundur bertambah 1 Energi."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719530
	}
}

export default card