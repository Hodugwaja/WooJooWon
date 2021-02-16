const discord = require('discord.js');
const client = new discord.Client();
const {prefix, token} = require('./config.json')
var date = 253;
var Joowon = "617184459250466827"

client.on('message', (message) => {
    var args = message.content.split(' ');
    if(message.author.bot) {
        return NaN
    }
    if(message.content === "우주원 Readme"){
        const embedReadme = new discord.MessageEmbed()
            .setColor("#000000")
            .setTitle("우주원 봇 설명")
            .setDescription(`우주원이 냥체 벌칙에 걸려서 이봇을 통해 남은 날짜를 표시하는 봇`)
            .addFields(
                {
                    name : "우주원 출소날짜",
                    value : `우주원이 냥체 풀리는 날을 출력`,
                },
                {
                    name : '우주원 형량 추가 (숫자)',
                    value : `우주원의 형량을 추가 가능(일부 인원)`,
                },
                {   
                    name : '우주원 형량 감형 (숫자)',
                    value : `우주원의 형량을 감형 가능(일부 인원)`
                },
            )
            .setThumbnail(message.author.avatarURL())
            .setTimestamp()
            .setFooter("호두과자 #2021", "https://cdn.discordapp.com/avatars/533120411274182666/83b362e9916a243c201e186292209718.webp?size=128") 
            message.reply(embedReadme);
        return NaN;
    }
    if(message.content === "우주원 출소날짜"){
        var today = new Date();
        today.setDate(today.getDate() + date)
        today.toLocaleString()
        message.reply(`우주원의 출소일자는 ${today.getFullYear()}년 ${today.getMonth()}월 ${today.getDate()}일 입니다`);
        return NaN;
    }
    if(args[0] === "우주원" && args[1] === "형량" && args[2] === "추가"&& (message.author.id === '533120411274182666' || message.author.id === '747714416128163910')){
        date = Number(date) + Number(args[3]);
        message.channel.send(`> 우주원의 형량이 추가가 되었습니다\n> 우주원의 출소까지 ${date}일 남았습니다`)
        return NaN;
    }
    if(args[0] === "우주원" && args[1] === "형량" && args[2] === "감형"&&message.author.id === '533120411274182666'){
        date = Number(date) - Number(args[3]);
        message.channel.send(`> 우주원의 형량이 감형이 되었습니다\n> 우주원의 출소까지 ${date}일 남았습니다`)
        return NaN;
    }
    if (!message.content.replace(/[\{\}\[\]\/?.,;:\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi, '').endsWith('냥') && date >= 0) {
        if(message.author.id === "617184459250466827"){
            date++;
            const embed = new discord.MessageEmbed()
            .setColor("#000000")
            .setTitle("우주원 냥체 안씀")
            .setDescription(`1일 추가 연장\n냥체 헤제하기 ${date}일 남음`)
            .addFields(
                {
                    name : "내용",
                    value : `${message.content}`,
                },
            )
            .setTimestamp()
            .setFooter("호두과자 #2021", "https://cdn.discordapp.com/avatars/533120411274182666/83b362e9916a243c201e186292209718.webp?size=128") 
            message.reply(embed);
        }
    }
})
const activities_list = [
    "made by hodugwaja", 
    "우주원 감시",
    `우주원 출소 ${date}일 남음`,
    `**우주원 Readme** 를 통해 명령어 확인`
];



function random(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
 
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

client.on('ready', () => {
    console.log(`logged in as ${client.user.tag} `);
            
    setInterval(() => {
        const index = random(1, activities_list.length-1);
        client.user.setActivity(activities_list[index]);
    }, 10000); 
});
client.login(token);