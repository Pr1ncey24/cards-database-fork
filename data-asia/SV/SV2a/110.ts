import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "マタドガス",
		'zh-tw': "雙彈瓦斯",
		th: "มาตาโดกัซ",
		ko: "또도가스",
		id: "Weezing"
	},

	illustrator: "Shibuzoh.",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [110],
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "ごくまれに 突然変異で 双子の 小さい ドガースが 連結したまま 出ることがある。",
		'zh-tw': "有時會因為非常罕見的突變， 出現２個連在一起的 雙胞胎小瓦斯彈。",
		th: "มีบ้างที่โดกาซคู่แฝดตัวเล็ก ๆ จะเชื่อมตัวต่อกันออกมาทั้งอย่างนั้น เนื่องจากกระบวนการเปลี่ยนแปลงทางธรรมชาติที่เกิดขึ้นไม่บ่อยนัก",
		ko: "극히 드물게 돌연변이로 쌍둥이인 작은 또가스가 연결된 채로 나오는 때가 있다.",
		id: "Walau langka, kadang terjadi mutasi sehingga Koffing kecil kembar muncul dalam keadaan tetap menyatu."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "もろともボム",
			'zh-tw': "齊爆炸彈",
			th: "บอมบ์พร้อมกันไป",
			ko: "너도 나도 봄",
			id: "Bom Kena Bersama"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けてきぜつしたとき、自分はコインを1回投げる。オモテなら、ワザを使ったポケモンをきぜつさせる。",
			'zh-tw': "這隻寶可夢在戰鬥場上受到對手的寶可夢招式的傷害而【昏厥】時，自己擲1次硬幣。若為正面，則將使用招式的寶可夢【昏厥】。",
			th: "เมื่อโปเกมอนนี้ อยู่บนตำแหน่งต่อสู้และได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้ามและ[หมดสภาพ]แล้ว ฝ่ายเราทอยเหรียญ 1 ครั้ง ถ้าออกหัว จะทำให้โปเกมอนที่ใช้ท่าต่อสู้[หมดสภาพ]",
			ko: "이 포켓몬이 배틀필드에서 상대의 포켓몬으로부터 기술의 데미지를 받아기절했을 때 자신은 동전을 1번 던진다. 앞면이 나오면 기술을 사용한 포켓몬을기절시킨다.",
			id: "Saat Pokémon ini ada di Arena Bertarung dan KO karena menerima kerusakan akibat serangan dari Pokémon lawan, pemain melempar koin 1 kali. Jika hasilnya sisi depan, Pokémon yang telah menggunakan serangan KO."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "スピンガス",
			'zh-tw': "旋轉瓦斯",
			th: "สปินก๊าซ",
			ko: "스핀가스",
			id: "Spin Gas"
		},

		damage: 50,

		effect: {
			ja: "相手のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的所有備戰寶可夢也各受到10點傷害。 [在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้ามทุกตัว ก็จะได้รับแดเมจตัวละ 10 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			ko: "상대의 벤치 포켓몬 전원에게도 각각 10데미지를 준다. (벤치는 약점, 저항력 계산을 하지 않는다.)",
			id: "Serangan ini juga memberikan kerusakan masing-masing sejumlah 10 kepada semua Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719563
	}
}

export default card