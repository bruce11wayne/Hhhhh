import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let videoUrl = 'https://telegra.ph/file/2e8338d1327f0dc89e36c.mp4';
  let vn = './media/menu.mp3';
  const user = global.db.data.users[m.sender];
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = 
    global.db.data.users[m.sender];
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let sn = createHash('md5').update(who).digest('hex')
let totalreg = Object.keys(global.db.data.users).length;
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(900) 
  const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
let str = `*⌬∙ • ──╾⊱﹝﷽﹞⊰╼── • ∙⌬*
*البوت تابع لمملكه سبيد⚜️*
*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
*❮ ◈┇قائمة اوامر┇𝐒•𝐏•𝐃◈❯*
*❮ ◈┇امر تدلل يا↜ ${taguser}  ❯*
*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
*⚜𝐒•𝐏•𝐃_𝐁𝐎𝐓⚜*
*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
*「قـســم╎🏮╎القـروبــات」*

*◞🏮◜╎.سبيد 』*
*◞🏮◜╎.بوت 』*
*◞🏮◜╎.طرد 』*
*◞🏮◜╎.ابلاغ 』*
*◞🏮◜╎.منشني 』*
*◞🏮◜╎.ترقية 』*
*◞🏮◜╎.اعفاء 』*
*◞🏮◜╎.حذف 』*
*◞🏮◜╎.منشن 』*
*◞🏮◜╎.مخفي 』*
*◞🏮◜╎.المشرفين 』*
*◞🏮◜╎.تدوير 』*
*◞🏮◜╎.لفل 』*
*◞🏮◜╎.جروب قفل او فتح 』*
*◞🏮◜╎.خط 』*
*◞🏮◜╎.توب 』*
*◞🏮◜╎.يومي 』*
*◞🏮◜╎.هجوم 』*
*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
*「قـسـم╎🕋╎الـديــن」*

*◞🕋◜╎.الله 』*
*◞🕋◜╎.ايات 』*
*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
*「قـسـم╎🎮╎التـرفـيـه」*

*◞🎮◜╎.اكس او 』*
*◞🎮◜╎.كت 』*
*◞🎮◜╎.ذكاء 』*
*◞🎮◜╎.غباء 』*
*◞🎮◜╎.جمال 』*
*◞🎮◜╎.الحب 』*
*◞🎮◜╎.لو 』*
*◞🎮◜╎.هل 』*
*◞🎮◜╎.ترجمه 』*
*◞🎮◜╎.اديت-سيارات 』*
*◞🎮◜╎.اديت 』*
*◞🎮◜╎.زواج 』*
*◞🎮◜╎.علم 』*
*◞🎮◜╎.تاج 』*
*◞🎮◜╎.حكمه 』*
*◞🎮◜╎.ميمز 』*
*◞🎮◜╎.سؤال 』*
*◞🎮◜╎.قلب 』*
*◞🎮◜╎.احزر 』*
*◞🎮◜╎.عين 』*
*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
*「قـسـم╎📲╎التـنـزيـلات」*
*◞📲◜╎.ويكيبيديا 』*
*◞📲◜╎.اسم_اغنية 』*
*◞📲◜╎.شغل 』*
*◞📲◜╎.تيك 』*
*◞📲◜╎.اغنية 』*
*◞📲◜╎.اسم_الاغنية 』*
*◞📲◜╎.صوره 』*
*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
*「قـسـم╎🌀╎التـحـويـلات」*

*◞🌀◜╎.ملصق 』*
*◞🌀◜╎.سرقة 』*
*◞🌀◜╎.تلجراف 』*
*◞🌀◜╎.باركود 』*
*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
*「قـسـم╎🪭╎المـطـور」*

*◞🪭◜╎.ضيف_بريميام 』*
*◞🪭◜╎.حذف_بريميام 』*
*◞🪭◜╎.بان 』*
*◞🪭◜╎.الغاء_بان 』*
*◞🪭◜╎.تفعيل 』*
*◞🪭◜╎.المبندين 』*
*◞🪭◜╎.إعادة 』*
*◞🪭◜╎.إعادة_تشغيل 』*
*◞🪭◜╎.أدخل 』*
*◞🪭◜╎.ضيف_اكس_بي 』*
*◞🪭◜╎.ضيف_جواهر 』*
*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
*⚜𝐒•𝐏•𝐃_𝐁𝐎𝐓⚜*

*~⌬ تــ✍︎ــوقــيــع ↡~*🖋️
*⌞⚜️┊𝐒𝐩𝐞𝐞𝐝 ス 𝐊.𝐠.𝐦┊⚜️⌝*
*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
`.trim();

conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: m });
}; 
handler.help = ['main']
handler.tags = ['group']
handler.command = ['المهام|اوامر|الاوامر'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Egypt').format('HH')
      let res = "بداية يوم سعيده ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء الخير 🌇"
      }
      if (time >= 18) {
        res = "مساء الخير 🌙"
      }
      return res
    }
