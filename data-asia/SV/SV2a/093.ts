import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴースト",
		'zh-tw': "鬼斯通",
		th: "โกสท์",
		ko: "고우스트",
		id: "Haunter"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [93],
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "暗闇にまぎれ ガスの手を 伸ばし 人の肩を 叩くのが 好き。 触られると 震えが 止まらない。",
		'zh-tw': "喜歡躲在黑暗中伸出氣體構成的手去拍人的肩膀。 一旦被接觸到，身體便會抖個不停。",
		th: "ชอบซ่อนตัวในความมืดแล้วยื่นมือที่เป็นแก๊สไปตีไหล่คนเล่น ถ้าโดนเข้าจะตัวสั่นไม่หยุด",
		ko: "어둠을 틈타 가스로 된 손을 뻗쳐 사람의 어깨를 두드리기 좋아한다. 그 손에 닿으면 떨림이 멈추지 않는다.",
		id: "Haunter suka bersembunyi di dalam gelap, lalu menepuk pundak manusia dengan tangan gasnya. Sentuhannya membuat tubuh tidak akan berhenti gemetar."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ひとだまがえし",
			'zh-tw': "孤魂返",
			th: "คืนลูกไฟวิญญาณ",
			ko: "혼령불 반환",
			id: "Putar Balik Roh"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のトラッシュからサポートを1枚選び、相手の手札にもどす。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。從對手的棄牌區選擇1張支援者卡，放回對手的手牌。",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง เลือกการ์ดซัพพอร์ต 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายตรงข้าม นำกลับขึ้นมือฝ่ายตรงข้าม",
			ko: "자신의 차례에 이 카드를 패에서 꺼내서 진화시켰을 때 1번 사용할 수 있다. 상대의 트래쉬에서 서포트를 1장 선택해서 상대의 패로 되돌린다.",
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Pilih 1 lembar Supporter dari Trash lawan, lalu kembalikan ke Kartu Pegangan lawan."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "つぶやく",
			'zh-tw': "囈語",
			th: "งึมงำ",
			ko: "중얼거리기",
			id: "Bergumam"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719546
	}
}

export default card