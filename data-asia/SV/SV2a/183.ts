import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ミュウツー",
		'zh-tw': "超夢",
		th: "มิวทู",
		ko: "뮤츠",
		id: "Mewtwo"
	},

	illustrator: "Bun Toujo",
	category: "Pokemon",
	rarity: "Illustration rare",
	dexId: [150],
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "ミュウの 遺伝子を 組み替えて 生み出された。ポケモンで 一番 凶暴な 心を 持つという。",
		'zh-tw': "藉著重組夢幻的基因而誕生。 據說有著所有寶可夢中最殘暴的心。",
		th: "ถูกสร้างขึ้นมาจากการดัดแปลงหน่วยพันธุกรรมของมิว ว่ากันว่ามันมีจิตใจที่โหดร้ายที่สุดในบรรดาโปเกมอน",
		ko: "뮤의 유전자를 재구성해서 만들어졌다. 포켓몬 중에서 가장 난폭한 마음을 가지고 있다고 한다.",
		id: "Mewtwo terlahir dari rekayasa genetik Mew. Dikatakan sebagai Pokémon dengan hati paling brutal."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "リフレクトバリア",
			'zh-tw': "反射屏障",
			th: "รีเฟล็กต์บาเรีย",
			ko: "리플렉트 배리어",
			id: "Reflect Barrier"
		},

		damage: 20,

		effect: {
			ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、受けたダメージぶんのダメカンを、ワザを使ったポケモンにのせる。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害時，將與受到的傷害相同數值的傷害指示物，放置於使用招式的寶可夢身上。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม เมื่อโปเกมอนนี้ได้รับแดเมจของท่าต่อสู้ วางตัวนับแดเมจบนโปเกมอนที่ใช้ท่าต่อสู้ ตามจำนวนแดเมจที่ได้รับมา",
			ko: "상대의 다음 차례에 이 포켓몬이 기술의 데미지를 받았을 때 받은 데미지만큼의 데미지 카운터를 기술을 사용한 포켓몬에게 올린다.",
			id: "Pada giliran lawan berikutnya, saat Pokémon ini menerima kerusakan akibat serangan, letakkan Token Kerusakan sejumlah kerusakan yang diterima pada Pokémon yang telah menggunakan serangan."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			ja: "サイコストライク",
			'zh-tw': "精神強襲",
			th: "ไซโคสไตรค์",
			ko: "사이코 스트라이크",
			id: "Psychostrike"
		},

		damage: 130,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			ko: "이 포켓몬에게 붙어 있는 에너지를 2개 선택해서 트래쉬한다.",
			id: "Pilih 2 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719603
	}
}

export default card