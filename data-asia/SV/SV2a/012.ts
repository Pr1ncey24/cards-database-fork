import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "バタフリー",
		'zh-tw': "巴大蝶",
		th: "บัตเตอร์ฟรี",
		ko: "버터플",
		id: "Butterfree"
	},

	illustrator: "Tika Matsuno",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [12],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "毎日 ミツを 集めまわる。 脚の 産毛に ミツを 塗りこんで 巣に 持ち帰る 習性をもつ。",
		'zh-tw': "每天都忙著採集花蜜。習慣在腿部的細毛上塗滿花蜜， 然後帶回巢穴裡。",
		th: "บินเก็บน้ำหวานของดอกไม้ทุกวัน มีนิสัยชอบทาน้ำหวานฝังเข้าไปในขนอ่อน ๆ ที่ขาแล้วนำกลับรัง",
		ko: "매일 꿀을 모으러 다닌다. 다리의 솜털에 꿀을 발라 둥지로 가지고 가는 습성이 있다.",
		id: "Butterfree setiap hari berkeliling mengumpulkan madu. Memiliki kebiasaan mengoleskan madu ke bulu kakinya untuk dibawa pulang ke sarang."
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "ふきとばし",
			'zh-tw': "吹飛",
			th: "เป่ากระเด็น",
			ko: "날려버리기",
			id: "Angin Penghempas"
		},

		damage: 60,

		effect: {
			ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]",
			th: "สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามกับโปเกมอนบนเบนช์ {ฝ่ายตรงข้ามเลือกโปเกมอนที่จะวางบนตำแหน่งต่อสู้}",
			ko: "상대의 배틀 포켓몬을 벤치 포켓몬과 교체한다. (배틀필드로 내보낼 포켓몬은 상대가 선택한다.)",
			id: "Tukar Pokémon Bertarung lawan dengan Pokémon Cadangan. [Pokémon yang akan dimasukkan ke Arena Bertarung dipilih oleh lawan.]"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "バイバイフライト",
			'zh-tw': "去去飛行",
			th: "บ๊ายบายไฟลต์",
			ko: "바이바이 플라이트",
			id: "Bye Bye Flight"
		},

		effect: {
			ja: "このポケモンと、相手のベンチポケモンを1匹選び、それぞれのポケモンと、ついているすべてのカードを、山札にもどして切る。相手のベンチポケモンがいないなら、このワザは失敗。",
			'zh-tw': "選擇1隻對手的備戰寶可夢，將這隻寶可夢與所選的寶可夢，與各自身上附加的卡，全部放回牌庫並重洗。若對手沒有備戰寶可夢，則這個招式失敗。",
			th: "เลือกโปเกมอนนี้กับ โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว นำโปเกมอนของแต่ละฝ่าย และการ์ดทั้งหมดที่ติดอยู่ ใส่กลับไปในสำรับการ์ดแล้วสับ ถ้าฝ่ายตรงข้ามไม่มีโปเกมอนบนเบนช์ ท่าต่อสู้นี้จะล้มเหลว",
			ko: "이 포켓몬과 상대의 벤치 포켓몬을 1마리 선택해서 각각의 포켓몬과 붙어 있는 모든 카드를 덱으로 되돌리고 섞는다. 상대의 벤치 포켓몬이 없다면 이 기술은 실패한다.",
			id: "Pilih Pokémon ini dan 1 Pokémon Cadangan lawan, lalu kocok kembali masing-masing Pokémon dan semua kartu yang dikenakannya ke Deck. Jika lawan tidak memiliki Pokémon Cadangan, serangan ini gagal."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719454
	}
}

export default card