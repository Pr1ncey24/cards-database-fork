import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "グレンアルマ",
		ko: "카디나르마"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	dexId: [936],
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "多くの 武勲を 立てた 戦士の 鎧によって 進化した 姿。 忠誠心の 厚い ポケモン。",
		ko: "많은 무공을 세운 전사의 갑옷에 의해 진화한 모습. 충성심이 강한 포켓몬이다."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ひおくり",
			ko: "불보내기"
		},

		effect: {
			ja: "自分の番に何回でも使える。自分のベンチポケモンについているエネルギーを1個選び、バトルポケモンにつけ替える。",
			ko: "자신의 차례에 몇 번이라도 사용할 수 있다. 자신의 벤치 포켓몬에게 붙어 있는(불꽃)에너지를 1개 선택해서 배틀 포켓몬에게 붙인다."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "フレイムキャノン",
			ko: "플레임캐논"
		},

		damage: 90,

		effect: {
			ja: "相手のバトルポケモンをやけどにする。",
			ko: "상대의 배틀 포켓몬을화상으로 만든다."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card