import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "カエンジシ",
		ko: "화염레오"
	},

	illustrator: "Po-Suzuki",
	category: "Pokemon",
	dexId: [668],
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "群れの メスが 協力して 獲物を 仕留める。 メスたちの おかげで 群れが 飢えないのだ。",
		ko: "무리의 암컷들이 협력해서 먹잇감을 처리한다. 암컷들 덕분에 무리가 굶지 않을 수 있는 것이다."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "こがす",
			ko: "그을리기"
		},

		effect: {
			ja: "相手のバトルポケモンをやけどにする。",
			ko: "상대의 배틀 포켓몬을화상으로 만든다."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かけぬける",
			ko: "달려나가기"
		},

		damage: 60,

		effect: {
			ja: "相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			ko: "상대의 벤치 포켓몬 1마리에게도 20데미지를 준다. (벤치는 약점, 저항력 계산을 하지 않는다.)"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,

	thirdParty: {
		cardmarket: 701065
	}
}

export default card