import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ブースター",
		'zh-tw': "火伊布",
		th: "บูสเตอร์",
		ko: "부스터",
		id: "Flareon"
	},

	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [136],
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "吸いこんだ 空気を 体内の 炎袋に 送りこみ １７００度の 炎にして 吹く。",
		'zh-tw': "會將吸入的空氣送進體內的火囊轉化成 １７００度的火焰後再吐出來。",
		th: "ส่งอากาศที่สูดเข้ามาไปยังถุงไฟภายในร่างกายเพื่อให้ไฟลุกไหม้ถึง 1700 องศาเซลเซียส แล้วพ่นออกมา",
		ko: "들이마신 공기를 체내의 불꽃 주머니에 보내 1700도의 불꽃으로 내뿜는다.",
		id: "Udara yang diisap Flareon dikirim ke kantong api di dalam tubuhnya, dipanaskan menjadi api bersuhu 1700 ℃, lalu diembuskan."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "はかいび",
			'zh-tw': "破壞火",
			th: "ไฟทำลายล้าง",
			ko: "파괴불",
			id: "Api Penghancur"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬에게 붙어 있는 에너지를 1개 선택해서 트래쉬한다.",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			ja: "とうしのもうか",
			'zh-tw': "鬥志猛火",
			th: "ไฟลุกนักสู้",
			ko: "투지의맹화",
			id: "Kobar Api Semangat Petarung"
		},

		damage: "90+",

		effect: {
			ja: "相手のバトルポケモンが「ポケモンex・V」なら、90ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【ex】・【V】」，則增加90點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็น [โปเกมอน【ex】 /【V】] การโจมตีนี้จะเพิ่มแดเมจอีก 90",
			ko: "상대의 배틀 포켓몬이 「포켓몬ex・V」라면 90데미지를 추가한다.",
			id: "Jika Pokémon Bertarung lawan adalah Pokémon {ex}/{V}, kerusakan yang diberikan bertambah sejumlah 90."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719589
	}
}

export default card