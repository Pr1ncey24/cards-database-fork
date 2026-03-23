import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ダグトリオ",
		'zh-tw': "三地鼠",
		th: "ดักทริโอ",
		ko: "닥트리오",
		id: "Dugtrio"
	},

	illustrator: "Nelnal",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [51],
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "３つの 頭が 互い違いに 動くのは まわりの 土を 柔らかくして 掘りやすくするため。",
		'zh-tw': "三顆頭會輪流活動，是為了讓周圍的土 變得更鬆更好挖。",
		th: "ทั้ง 3 หัวจะสลับกันเคลื่อนไหวเพื่อให้ดินรอบ ๆ นิ่มลงและขุดง่ายขึ้น",
		ko: "3개의 머리가 교차하며 움직이는 것은 주변의 흙을 부드럽게 해 파기 쉽게 하기 위해서다.",
		id: "Tiga kepala Dugtrio saling bergerak ke arah yang berbeda-beda untuk melunakkan tanah di sekitarnya agar menjadi lebih mudah untuk digali."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "あなをほる",
			'zh-tw': "挖洞",
			th: "ขุดรู",
			ko: "구멍파기",
			id: "Menggali"
		},

		damage: 50,

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 다음 차례에 이 포켓몬은 기술의 데미지나 효과를 받지 않는다.",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 701099
	}
}

export default card