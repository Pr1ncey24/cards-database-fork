import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "エビワラー",
		'zh-tw': "快拳郎",
		th: "เอบิวาลาร์",
		ko: "홍수몬",
		id: "Hitmonchan"
	},

	illustrator: "DOM",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [107],
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "空気をも 切り裂く パンチ。 だが ３分間 攻撃すると ひと休み したくなるらしい。",
		'zh-tw': "打出的拳擊甚至能劈開空氣。但連續攻擊３分鐘後， 牠似乎就會想休息一下。",
		th: "หมัดฉีกอากาศ แต่ดูเหมือนว่าพอโจมตีไปได้ 3 นาทีก็ต้องการพัก",
		ko: "공기마저 베어 가르는 펀치. 하지만 3분간 공격하면 잠시 쉬고 싶어하는 것 같다.",
		id: "Pukulan Hitmonchan dapat membelah udara. Tapi dia butuh istirahat kalau sudah menyerang selama tiga menit."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "はんげき",
			'zh-tw': "反擊",
			th: "ตีตอบโต้",
			ko: "반격",
			id: "Serangan Balasan"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを3個のせる。",
			'zh-tw': "這隻寶可夢在戰鬥場受到對手的寶可夢招式的傷害時，在使用招式的寶可夢身上放置3個傷害指示物。",
			th: "เมื่อโปเกมอนนี้ อยู่บนตำแหน่งต่อสู้และได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้าม วางตัวนับแดเมจ 3 ตัวบนโปเกมอนที่ใช้ท่าต่อสู้",
			ko: "이 포켓몬이 배틀필드에서 상대의 포켓몬으로부터 기술의 데미지를 받았을 때 기술을 사용한 포켓몬에게 데미지 카운터를 3개 올린다.",
			id: "Saat Pokémon ini ada di Arena Bertarung dan menerima kerusakan akibat serangan dari Pokémon lawan, letakkan 3 Token Kerusakan pada Pokémon yang telah menggunakan serangan."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "エキサイトパンチ",
			'zh-tw': "激動拳",
			th: "เอ็กซ์ไซต์พันช์",
			ko: "익사이팅펀치",
			id: "Excite Punch"
		},

		damage: 60,

		effect: {
			ja: "次の自分の番、このポケモンの「エキサイトパンチ」のダメージは「+60」される。",
			'zh-tw': "在下個自己的回合，這隻寶可夢「激動拳」的傷害「+60」點。",
			th: "เทิร์นถัดไปของฝ่ายเรา แดเมจจาก [เอ็กซ์ไซต์พันช์] ของโปเกมอนนี้จะถูก [+60]",
			ko: "자신의 다음 차례에 이 포켓몬의 「익사이팅펀치」의 데미지는 「+60」이 된다.",
			id: "Pada giliran sendiri berikutnya, kerusakan akibat Excite Punch Pokémon ini bertambah sejumlah 60."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719560
	}
}

export default card