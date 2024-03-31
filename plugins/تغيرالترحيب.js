//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('*تــم وضــع رســالــة الــتـرحـيب !*')
  } else throw `*⦓          ⦓🦇⦔          ⦔*\n*❤️ꪶ→ @subject*\n*🍀ꪶ→ @user*\n*💌ꪶ→مـرحـبـاً بـك فـي عائلتك المتواضعه يا صديقي*\n*💝ꪶ→ اقـرا الوصف\n*⦓          ⦓🦇⦔          ⦔*\n المجموعه:*\n\n@desc\n\n*⦓          ⦓🦇⦔          ⦔*`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['الترحيب'] 
handler.admin = true
handler.owner = false

export default handler
