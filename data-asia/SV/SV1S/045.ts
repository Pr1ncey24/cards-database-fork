import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ルチャブル",
		'zh-tw': "摔角鷹人",
		th: "ลูจาบูล",
		ko: "루차불",
		id: "Hawlucha"
	},

	illustrator: "GOSSAN",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [701],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "翼を 使い 軽やかに 跳び 相手を 華麗に 仕留める 技は 生まれ育った 森で 磨かれる。",
		'zh-tw': "使用翅膀輕盈地跳起後，華麗地置對手於死地的招式 是在出生的森林磨練出來的。",
		th: "ทักษะการบินที่ปราดเปรียวและสามารถจัดการอีกฝ่ายอย่างสง่างามนั้นได้รับการขัดเกลาในป่าที่เกิดและเติบโต",
		ko: "날개를 사용해 가볍게 도약하여 상대를 화려하게 마무리하는 기술은 나고 자란 숲에서 다듬어진다.",
		id: "Serangan Hawlucha untuk mengakhiri lawannya secara elok dengan terbang lincah menggunakan sayapnya diasah di hutan tempat ia lahir dan dibesarkan."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "フライングエントリー",
			'zh-tw': "飛身進場",
			th: "ฟลายอิงเอ็นทรี",
			ko: "플라잉 엔트리",
			id: "Flying Entry"
		},

		effect: {
			ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。相手のベンチポケモン2匹に、それぞれダメカンを1個のせる。",
			'zh-tw': "在自己的回合，從手牌將這張卡放置於備戰區時，可使用1次。在對手的2隻備戰寶可夢身上，各放置1個傷害指示物。",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือวางบนเบนช์ ใช้ได้ 1 ครั้ง วางตัวนับแดเมจ บนโปเกมอนบนเบนช์ฝ่ายตรงข้าม 2 ตัว ตัวละ 1 ตัว",
			ko: "자신의 차례에 이 카드를 패에서 벤치로 내보냈을 때 1번 사용할 수 있다. 상대의 벤치 포켓몬 2마리에게 각각 데미지 카운터를 1개 올린다.",
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan ke Cadangan. Letakkan masing-masing sejumlah 1 Token Kerusakan pada 2 Pokémon Cadangan lawan."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "つばさでうつ",
			'zh-tw': "翅膀攻擊",
			th: "โจมตีด้วยปีก",
			ko: "날개치기",
			id: "Pukulan Sayap"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 693012
	}
}

export default card