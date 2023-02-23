const {Client, SpotifyRPC, CustomStatus, RichPresence} = require('discord.js-selfbot-v13');
const delay = require('delay')
const fs = require('fs');
// Initializing presences
const client = new Client();
const start_time = Math.floor(Date.now() / 1000)
function randint(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log('Статус пошел!')
client.on('ready', async () => {
    var end_mins = 0
    var end_hrs = 0
    var end_secs = 0
    const customactivity = new CustomStatus()
    .setState("Ищу активных модераторов") // Пользовательский статус (из дискорд клиента)
    
    const r = new RichPresence(client)
	.setAssetsLargeImage("mp: attachments/1068155855691849781/1078268575258791946/garfield-lasagna-_1_.gif") // Картинка
	.setAssetsLargeText('Количество заявок в друзья обновляется раз в 30с') // Текст при наводке
    .setType("STREAMING") 
    .setURL("https://youtube.com/watch?v=U8RUe_lCbJY")
    .setApplicationId(234395307759108106) // Можешь не менять, это Groovy
    .addButton("Discord", "https://discord.gg/restplace") // Кнопки
    .addButton("Telegram","https://t.me/mr4at1") // Кнопки
    .setName("Twitch") // Строка где "Стримит на <name>"
	.setDetails('Owner of RestPlace') // Белый текст сверху
    
    while(true) {
       let relc = client.relationships.incomingCache.size
       r.setState(`заявок в друзья ${relc}`)/ // Счетчик заявок в друзья (бонус тип)
		// если нет необходимости, закоментируй эту часть кода "/* */"
     client.user.setPresence({activities: [r.toJSON(), customactivity.toJSON()]})
        await delay(30000)
}});


// Connection with Token in environment variables
client.login('NzAxODY2OTkyMTY0MTQzMTU0.GHE6gm.KM41WPZ31enUHZJFTgESRLqGlEYqVuNVOGhB7Y'); // Token
