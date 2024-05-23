const dir = [
'https://telegra.ph/file/fb9388dcad2626a801f64.mp4',
'https://telegra.ph/file/2f11e3226e916746058d4.mp4',
'https://telegra.ph/file/bf2f839c3e4418a48d6c6.mp4',
'https://telegra.ph/file/faa51649103c4c3be501e.mp4',
'https://telegra.ph/file/b5a065eeaa159e8e75711.mp4',
'https://telegra.ph/file/7a7e52444e24ada470233.mp4',
'https://telegra.ph/file/9c6f798fa46af64d9c032.mp4',
'https://telegra.ph/file/98fb9fa0e26feb008186e.mp4',
'https://telegra.ph/file/0932954e91cf5e54de300.mp4',
'https://telegra.ph/file/fdb0281dd63f2b979bdf4.mp4',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['اديت-سيارات'] 

export default handler
