//import db from '../lib/database.js'

import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true)
    throw `✳️ لقد قمت بالتسجيل بالفعل\n\nهل تريد إعادة التسجيل؟\n\n 📌 استخدم هذا الأمر لإزالة سجلك \n*${usedPrefix}التسلسلي* <الرقم التسلسلي>`
  if (!Reg.test(text))
    throw `⚠️ التنسيق غير صحيح\n\n ✳️ استخدم هاذا الامر: *${usedPrefix + command} الاسم.العمر*\n📌مثال : *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✳️لا يمكن ان يكون الاسم فارغاً'
  if (!age) throw '✳️لا يمكن ان يكون العمر فارغاً'
  if (name.length >= 30) throw '✳️الاسم طويلج جداً'
  age = parseInt(age)
  if (age > 100) throw '👴🏻 واو الجد يريد أن يلعب دور الروبوت'
  if (age < 5) throw '🚼 هناك جد صغير هنا '
  user.name = name.trim()
  user.age = age
  user.regTime = +new Date()
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(
    `
┌─「 *مسجل* 」─
▢ *الرقم:* ${name}
▢ *العمر* : ${age} سنين
▢ *الرقم التسلسلي* :
${sn}
└──────────────

 *${usedPrefix}اوامر لطلب القائمه*
`.trim()
  )
}
handler.help = ['reg'].map(v => v + ' <name.age>')
handler.tags = ['rg']

handler.command = ['تسجيل']

export default handler
