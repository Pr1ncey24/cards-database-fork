import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニャース",
		'zh-tw': "喵喵",
		th: "เนียส",
		ko: "나옹",
		id: "Meowth"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	dexId: [52],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "昼間は 寝てばかりいる。 夜になると 目が 輝き 縄張りを 歩きまわる。",
		'zh-tw': "白天一直都在睡覺。到了晚上眼睛就會發光， 在自己的地盤徘徊。",
		th: "ตอนกลางวันจะเอาแต่นอน พอตกกลางคืนจะเดินไปรอบ ๆ อาณาเขตของตนด้วยดวงตาที่เป็นประกาย",
		ko: "낮에는 거의 잠만 잔다. 밤이 되면 눈을 반짝이며 영역을 돌아다닌다.",
		id: "Yang dilakukan Meowth pada siang hari hanya tidur. Ketika malam tiba, mata Pokémon ini bercahaya dan ia berjalan mengelilingi wilayah teritorialnya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "まねきねこ",
			'zh-tw': "招財貓",
			th: "แมวกวัก",
			ko: "손짓하는 고양이",
			id: "Kucing Pemanggil"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			'zh-tw': "擲1次硬幣若為正面，則選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 벤치 포켓몬을 1마리 선택해서 배틀 포켓몬과 교체한다.",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ツメをたてる",
			'zh-tw': "豎爪",
			th: "กางกรงเล็บ",
			ko: "발톱세우기",
			id: "Memasang Cakar"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719494
	}
}

export default card