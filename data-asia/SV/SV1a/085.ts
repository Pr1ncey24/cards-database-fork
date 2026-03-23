import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "パルデア ウパー",
		ko: "팔데아 우파"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	dexId: [194],
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "縄張り争いに 敗れて 陸で 暮らすうちに 毒の 粘膜で 体を 保護するように 変わった。",
		ko: "영역 다툼에서 밀려 육지에 살게 되면서 독성을 띠는 점막으로 몸을 보호하도록 변화했다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "すみかをさがす",
			ko: "보금자리찾기"
		},

		effect: {
			ja: "自分の山札からスタジアムを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			ko: "자신의 덱에서 스타디움을 1장 선택해서 상대에게 보여주고 패로 가져온다. 그리고 덱을 섞는다."
		}
	}, {
		cost: ["Darkness"],

		name: {
			ja: "ぶつかる",
			ko: "부딪치기"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card