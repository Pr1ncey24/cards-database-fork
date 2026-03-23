import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニドクイン",
		'zh-tw': "尼多后",
		th: "นิโดควีน",
		ko: "니드퀸",
		id: "Nidoqueen"
	},

	illustrator: "Teeziro",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [31],
	hp: 170,
	types: ["Darkness"],

	description: {
		ja: "背中の 棘の 隙間に 子どもを 乗せて あやす。 そのときに 毒が 出ることは けっして ないのだ。",
		'zh-tw': "會把孩子放在背上的刺與刺之間來哄牠們。 這時候絕對不會釋放毒素。",
		th: "ปลอบประโลมลูกด้วยการยกขึ้นวางระหว่างหนามบนหลัง ในระหว่างนั้นไม่มีทางที่พิษจะไหลออกมา",
		ko: "등의 가시 틈에 새끼를 태우고 달랜다. 이때는 독이 절대 나오지 않는다.",
		id: "Nidoqueen menaikkan anaknya ke celah duri di punggungnya agar tenang. Pada saat itu, racun pasti tidak akan keluar dari duri tersebut."
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "クイーンプレス",
			'zh-tw': "皇后壓制",
			th: "ควีนเพรส",
			ko: "퀸프레스",
			id: "Queen Press"
		},

		damage: 90,

		effect: {
			ja: "次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。",
			'zh-tw': "在下個對手的回合，這隻寶可夢不會受到【基礎】寶可夢招式的傷害。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจของท่าต่อสู้จากโปเกมอน[พื้นฐาน]",
			ko: "상대의 다음 차례에 이 포켓몬은 기본 포켓몬으로부터 기술의 데미지를 받지 않는다.",
			id: "Pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan akibat serangan dari Pokémon Basic."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "つきたおし",
			'zh-tw': "撞倒",
			th: "พุ่งชน",
			ko: "넘어뜨리기",
			id: "Mendorong Jatuh"
		},

		damage: 160
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719473
	}
}

export default card