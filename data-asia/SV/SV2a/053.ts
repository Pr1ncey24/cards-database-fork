import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ペルシアン",
		'zh-tw': "貓老大",
		th: "เปอร์เซียน",
		ko: "페르시온",
		id: "Persian"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [53],
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "毛並みが 美しく ペットにしたがる 人も 多いが すぐ ひっかいたり するので 手強いぞ。",
		'zh-tw': "有著漂亮的毛色，很多人想養牠當寵物， 但牠很愛亂抓，所以並不好養。",
		th: "ขนสวยจนคนมากมายอยากได้เป็นสัตว์เลี้ยง แต่รับมือยากเพราะมันชอบข่วน",
		ko: "털의 결이 아름다워 애완용으로 기르려는 사람이 많지만, 곧잘 할퀴려 들기 때문에 쉽지 않다.",
		id: "Meskipun banyak orang yang ingin memelihara Persian karena bulunya yang cantik, Pokémon ini sulit dijinakkan karena ia langsung mencakar siapa pun."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ロケットコール",
			'zh-tw': "火箭呼喚",
			th: "ร็อกเกตคอล",
			ko: "로켓 콜",
			id: "Rocket Call"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札から「サカキのカリスマ」を1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "在自己的回合時可使用1次。從自己的牌庫選擇1張「坂木的領導力」，在給對手看過後加入手牌。並且重洗牌庫。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ด [เสน่ห์ของซากากิ] 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			ko: "자신의 차례에 1번 사용할 수 있다. 자신의 덱에서 「비주기의 카리스마」를 1장 선택해서 상대에게 보여주고 패로 가져온다. 그리고 덱을 섞는다.",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pilih 1 lembar Karisma Giovanni dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "きりさく",
			'zh-tw': "劈開",
			th: "ฟันแหลก",
			ko: "베어가르기",
			id: "Menyayat"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719495
	}
}

export default card