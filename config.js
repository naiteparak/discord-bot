require('dotenv').config()

module.exports = {
    app: {
        token: process.env.DISCORD_TOKEN_BOT,
        playing: '',
        global: true,
        guild: 'xxx'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'XXX',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {}
    }
};
