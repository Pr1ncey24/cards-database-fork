import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "パルデア ウパー",
		'zh-tw': "帕底亞 烏波",
		th: "พัลเดีย อูปา",
		ko: "팔데아 우파",
		id: "Paldean Wooper"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [194],
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "縄張り争いに 敗れて 陸で 暮らすうちに 毒の 粘膜で 体を 保護するように 変わった。",
		'zh-tw': "因搶輸地盤而到陸地上生活，久而久之變成了是 用帶毒的黏膜來保護身體。",
		th: "หลังจากที่แพ้สงครามแย่งชิงอาณาเขตจนต้องมาอาศัยอยู่บนบก ก็ปรับตัวให้มีเมือกพิษปกป้องร่างกาย",
		ko: "영역 다툼에서 밀려 육지에 살게 되면서 독성을 띠는 점막으로 몸을 보호하도록 변화했다.",
		id: "Membran beracun melindungi tubuh Wooper yang hidup di darat setelah kalah dalam pertarungan perebutan wilayah teritorial."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "すみかをさがす",
			'zh-tw': "尋找巢穴",
			th: "หารัง",
			ko: "보금자리찾기",
			id: "Mencari Tempat Tinggal"
		},

		effect: {
			ja: "自分の山札からスタジアムを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張競技場卡，在給對手看過後加入手牌。並且重洗牌庫。",
			th: "เลือกการ์ดสเตเดียม 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			ko: "자신의 덱에서 스타디움을 1장 선택해서 상대에게 보여주고 패로 가져온다. 그리고 덱을 섞는다.",
			id: "Pilih 1 lembar Stadium dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		}
	}, {
		cost: ["Darkness"],

		name: {
			ja: "ぶつかる",
			'zh-tw': "衝撞",
			th: "กระแทก",
			ko: "부딪치기",
			id: "Menyeruduk"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card