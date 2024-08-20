const dir = [
'https://telegra.ph/file/35be81bffb543ff6839d1.mp4',
'https://telegra.ph/file/eb92a3e8eb43e7d6f4f54.mp4',
'https://telegra.ph/file/5c2b1c27d972b4deb8b3d.mp4',
'https://telegra.ph/file/dffd1106ff0e83c2f7d03.mp4',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['فديو_قرآن'] 

export default handler
