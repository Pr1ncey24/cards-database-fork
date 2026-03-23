import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "チャーレム",
		'zh-tw': "恰雷姆",
		th: "ชาเรม",
		ko: "요가램",
		id: "Medicham"
	},

	illustrator: "Jerky",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [308],
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "ヨガの 修行で 鍛えられた サイコパワーで 相手の 動きを 予測する ことが できるのだ。",
		'zh-tw': "可以用藉由瑜珈修行鍛鍊出來的精神力量， 來預測對手的行動。",
		th: "ไซโคพาวเวอร์ที่ได้มาจากการฝึกฝนโยคะช่วยให้สามารถคาดคะเนการเคลื่อนไหวของฝ่ายตรงข้ามได้",
		ko: "요가 수행으로 단련된 사이코 파워로 상대의 움직임을 예상할 수 있다.",
		id: "Dengan kekuatan psikokinesis yang diasah melalui latihan yoga, Medicham dapat menerka gerakan lawannya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ツボをねらう",
			'zh-tw': "點穴",
			th: "จี้ตรงจุด",
			ko: "경혈노리기",
			id: "Mengincar Nadi"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンが持っているワザを1つ選ぶ。次の相手の番、このワザを受けたポケモンは、選ばれたワザが使えない。",
			'zh-tw': "選擇1個對手的戰鬥寶可夢持有的招式。在下個對手的回合，受到這個招式的寶可夢無法使用被選擇的招式。",
			th: "เลือกท่าต่อสู้ที่โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมี 1 ท่า เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะใช้ท่าต่อสู้ที่ถูกเลือกไว้ไม่ได้",
			ko: "상대의 배틀 포켓몬이 가지고 있는 기술을 1개 선택한다. 상대의 다음 차례에 이 기술을 받은 포켓몬은 선택된 기술을 사용할 수 없다.",
			id: "Pilih 1 serangan yang dimiliki Pokémon Bertarung lawan. Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat menggunakan serangan yang telah dipilih."
		}
	}, {
		cost: ["Fighting"],

		name: {
			ja: "いっぱつげり",
			'zh-tw': "單次踢",
			th: "เตะเปรี้ยงเดียว",
			ko: "한방차기",
			id: "Tendangan Tunggal"
		},

		damage: 90,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。",
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกก้อย ท่าต่อสู้นี้จะล้มเหลว",
			ko: "동전을 1번 던져서 뒷면이 나오면 이 기술은 실패한다.",
			id: "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 693005
	}
}

export default card