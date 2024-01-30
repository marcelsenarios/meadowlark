const fortuneCookies = [
    "Não desista, na verdade nem comece",
    "Se tudo for pra dar errado, sem pvai dar errado",
    "Corra, corra e continue correndo, mas nunca vai sair do lugar",
    "A verdade nunca prevalece, seja canalha!"
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random() * fortuneCookies.length)
    return fortuneCookies[idx]
}