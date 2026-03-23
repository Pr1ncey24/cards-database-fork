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

	illustrator: "Saya Tsuruta",
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
			ja: "ふむ",
			'zh-tw': "踩",
			th: "เหยียบ",
			ko: "밟기",
			id: "Menginjak"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "やんちゃげり",
			'zh-tw': "調皮踢",
			th: "เตะแกล้ง",
			ko: "개구쟁이킥",
			id: "Tendangan Nakal"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card