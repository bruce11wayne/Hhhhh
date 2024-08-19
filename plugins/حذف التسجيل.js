//import db from '../lib/database.js'

import { createHash } from 'crypto'
let handler = async function (m, { conn, args, usedPrefix }) {
  if (!args[0])
    throw `✳️ *ادخل رقمك التسلسلي*\nتحقق من الرقم التسلسلي الخاص بك باستخدام الأمر...\n\n*${usedPrefix}الرقم التسلسلي*`
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw '⚠️ *الرقم التسلسلي غير صحيح*'
  user.registered = false
  m.reply(`✅ تم الغاء التسجيل`)
}
handler.help = ['unreg <Num Serie>']
handler.tags = ['rg']

handler.command = ['حذف_التسجيل']
handler.register = true

export default handler
