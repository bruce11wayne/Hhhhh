//import db from '../lib/database.js'

let handler = async (m, { conn, isOwner, isAdmin, isROwner} ) => {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = false
    m.reply('✅ تـم تـشـغـيـل الـبـوت في هـاذيـه الـمـجـمـوعـه')   
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = ['chaton', 'تفعيل'] 

export default handler
