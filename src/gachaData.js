const ssrCharacters = [
    "メリオダス",
    "エスカノール",
    "バン",
    "キング",
    "ディアンヌ",
    "ゴウセル",
    "マーリン",
    "エリザベス",
]

const srCharacters = [
    "ギルサンダー",
    "ハウザー",
    "ジェリコ",
    "グリアモール",
    "ドレファス",
    "ヘンドリクセン",
    "アーサー",
    "ザラトラス",
    "エレイン",
    "ヘルブラム",
    "ギーラ",
    "デスピアス"
]

const rCharacters = [
    "フリージア",
    "ゴルギウス",
    "ルイン",
    "ジュド",
    "スレイダー",
    "サイモン",
    "ヒューゴ",
    "ワインハイト",
    "ジリアン",
    "アリオー二",
]

function getGachaData(rank) {
    if (rank === "SSR") {
        const randomIndex = Math.floor(Math.random() * ssrCharacters.length)
        return ssrCharacters[randomIndex]
    }
    else if (rank === "SR") {
        const randomIndex = Math.floor(Math.random() * srCharacters.length)
        return srCharacters[randomIndex]
    }
    else {
        const randomIndex = Math.floor(Math.random() * rCharacters.length)
        return rCharacters[randomIndex]
    }
}

export { getGachaData }