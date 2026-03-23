import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "サイホーン",
		'zh-tw': "獨角犀牛",
		th: "ไซฮอร์น",
		ko: "뿔카노",
		id: "Rhyhorn"
	},

	illustrator: "GOSSAN",
	rarity: "Common",
	category: "Pokemon",
	dexId: [111],
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "ひとつの ことしか 覚えられない。 突進を はじめると 理由は どうでもよくなり すぐに 忘れる。",
		'zh-tw': "腦子裡只能記住一件事。一旦開始猛衝，不管理由是什麼 都會很快感到無所謂而忘掉。",
		th: "มันจำได้เพียงแค่ครั้งละเรื่อง พอเริ่มพุ่งพรวดพราดเข้าไป มันจะลืมทันทีว่าทำไปทำไม",
		ko: "한 가지만 기억할 수 있다. 돌진하기 시작하면 이유가 무엇이었든 금방 잊어버린다.",
		id: "Rhyhorn hanya dapat mengingat satu hal. Begitu mulai menyeruduk, alasan menyeruduk jadi tidak penting baginya dan segera terlupakan."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "つきとばす",
			'zh-tw': "推倒",
			th: "ชนกระเด็น",
			ko: "들이밀치기",
			id: "Mendorong Kuat"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]",
			th: "สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามกับโปเกมอนบนเบนช์ {ฝ่ายตรงข้ามเลือกโปเกมอนที่จะวางบนตำแหน่งต่อสู้}",
			ko: "상대의 배틀 포켓몬을 벤치 포켓몬과 교체한다. (배틀필드로 내보낼 포켓몬은 상대가 선택한다.)",
			id: "Tukar Pokémon Bertarung lawan dengan Pokémon Cadangan. [Pokémon yang akan dimasukkan ke Arena Bertarung dipilih oleh lawan.]"
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "ロックスマッシュ",
			'zh-tw': "岩石粉碎",
			th: "ร็อคสแมช",
			ko: "록스매시",
			id: "Rock Smash"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719564
	}
}

export default card