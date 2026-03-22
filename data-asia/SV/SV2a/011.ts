import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "トランセル",
		'zh-tw': "鐵甲蛹",
		th: "ทรานเซล",
		ko: "단데기",
		id: "Metapod"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [11],
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "硬い 殻に 包まれているが 中身は 軟らかいので 強い 攻撃には 耐えられない。",
		'zh-tw': "雖然有堅硬的外殼，但因為殼裡的身體很軟， 所以無法抵抗強力的攻擊。",
		th: "ถูกห่อหุ้มอยู่ในเปลือกแข็งแต่ว่าลำตัวนุ่มนิ่มก็เลยไม่สามารถทนต่อการโจมตีรุนแรงได้",
		ko: "단단한 껍질로 둘러싸여 있지만 안은 부드럽기 때문에 강한 공격에는 버티지 못한다.",
		id: "Metapod dilindungi oleh cangkang yang keras, tapi bagian dalam tubuhnya lunak sehingga tidak dapat menahan serangan yang kuat."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "たいあたり",
			'zh-tw': "撞擊",
			th: "พุ่งเข้าชน",
			ko: "몸통박치기",
			id: "Serudukan"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ぼうぎょしせい",
			'zh-tw': "防禦姿勢",
			th: "ตั้งท่าป้องกัน",
			ko: "방어자세",
			id: "Posisi Bertahan"
		},

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจของท่าต่อสู้",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 다음 차례에 이 포켓몬은 기술의 데미지를 받지 않는다.",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan akibat serangan."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719453
	}
}

export default card