import { createHash } from 'crypto'

let handler = async function (m, { conn, text, usedPrefix }) {
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(
    `
▢ *الرقم التسلسلي التابع إليك* : ${sn}
`.trim()
  )
}
handler.help = ['mysn']
handler.tags = ['rg']
handler.command = ['الرقم التسلسلي']
handler.register = true
export default handler
