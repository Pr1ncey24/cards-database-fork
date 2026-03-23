import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ブイゼル",
		'zh-tw': "泳圈鼬",
		th: "บุยเซล",
		ko: "브이젤",
		id: "Buizel"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	dexId: [418],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "尻尾を スクリューのように まわし 水中を 泳ぐだけでなく まとわりつく 海草も 切れる。",
		'zh-tw': "像螺旋槳一樣旋轉的尾巴除了能夠讓牠在水裡游泳， 還能切斷纏住自己的海草。",
		th: "หมุนหางต่างใบพัด ไม่ได้ใช้แค่ว่ายในน้ำได้อย่างเดียว แต่ยังใช้ตัดพวกสาหร่ายที่มาพันตัวได้ด้วย",
		ko: "꼬리를 스크루처럼 돌려서 수중을 헤엄치는 것뿐만 아니라 엉겨 붙는 해초도 자를 수 있다.",
		id: "Tidak hanya untuk berenang, Buizel memutar ekornya seperti baling-baling untuk memotong rumput laut yang menempel padanya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "でんこうせっか",
			'zh-tw': "電光一閃",
			th: "เคลื่อนที่ความไวแสง",
			ko: "전광석화",
			id: "Serangan Cepat"
		},

		damage: "10+",

		effect: {
			ja: "コインを1回投げオモテなら、10ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加10點傷害。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 10",
			ko: "동전을 1번 던져서 앞면이 나오면 10데미지를 추가한다.",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 10."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 701079
	}
}

export default card