import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "キルリア",
		ko: "킬리아"
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	dexId: [281],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "サイコパワーを 操り まわりの 空間を ねじ曲げることで 未来を 見通すことができる。",
		ko: "사이코 파워를 조작해 주변의 공간을 일그러뜨려 미래를 내다볼 수 있다."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "マジカルショット",
			ko: "매지컬숏"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			ja: "サイコキネシス",
			ko: "사이코키네시스"
		},

		damage: "60＋",

		effect: {
			ja: "相手のバトルポケモンについているエネルギーの数×20ダメージ追加。",
			ko: "상대의 배틀 포켓몬에게 붙어 있는 에너지의 개수 × 20데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,

	thirdParty: {
		cardmarket: 692993
	}
}

export default card