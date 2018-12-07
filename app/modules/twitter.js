var Twit = require('twit');

const T = new Twit({
  consumer_key: 'your-twitter-key',
  consumer_secret: 'your-twitter-secret',
  access_token: '951493817852624897-fA1XUAzpMkgiKkrnqbMytLC4bzdpacF',
  access_token_secret: 'N86Pb8nh4oXdfd7XXAdzICVfkGofkrxyrVPXe72X61hcW'
})

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

const content = [
  `Hi!`, 
  `I just tweeted with twitter bot api`, 
  `Capre diem`, 
  `Nothing is impossible, the word itself says "I'm possible"`,
  `Life isn't about finding yourself. Life is about creating yourself`
];

function tweetTo(nickname) {
  T.post(
    'statuses/update', 
    {
      status: `@${nickname} ${content.random()}`, 
      enable_dm_commands: true 
    }, 
    (err, data, response) => {
      console.log(data)
    }
  )
}

module.exports = {
  tweetTo
}
