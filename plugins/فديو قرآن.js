const dir = [
'https://telegra.ph/file/35be81bffb543ff6839d1.mp4',
'https://telegra.ph/file/eb92a3e8eb43e7d6f4f54.mp4',
'https://telegra.ph/file/5c2b1c27d972b4deb8b3d.mp4',
'https://telegra.ph/file/dffd1106ff0e83c2f7d03.mp4',
'https://telegra.ph/file/3de2813762e1be3df643d.mp4',
'https://telegra.ph/file/3e8b8b803f78046520589.mp4',
'https://telegra.ph/file/9fe698e9fe2ef19755306.mp4',
'https://telegra.ph/file/3c6ad7810ebea6fd2c872.mp4',
'https://telegra.ph/file/df4fe3e593bf19078c486.mp4',
'https://telegra.ph/file/127cddb24e4573bbb92aa.mp4',
'https://telegra.ph/file/cdd34e7143c7aad75fbde.mp4',
'',
'',
'',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['فيديو_قران'] 

export default handler
