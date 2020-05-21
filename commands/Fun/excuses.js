const fs = require('fs');
const excuse = ['Actually, that\'s a feature',
'Don\'t worry, that value is only wrong half of the time',
'Even though it doesn\'t work, how does it feel?',
'Everything looks fine my end',
'How is that possible?',
'I broke that deliberately to do some testing',
'I can have a look but there\'s a lot of if statements in that code!',
'I can\'t make that a priority right now',
'I can\'t test everything',
'I couldn\'t find any examples of how that can be done anywhere else in the project',
'I couldn\'t find any examples of how that can be done anywhere online',
'I couldn\'t find any library that can even do that',
'I did a quick fix last time but it broke when we rebooted',
'I didn\'t anticipate that I would make any errors',
'I didn\'t create that part of the program',
'I didn\'t receive a ticket for it',
'I forgot to commit the code that fixes that',
'I had to do the project backwards as people demanded results out of order',
'I have never seen that before in my life',
'I haven\'t been able to reproduce that',
'I haven\'t had any experience with that before',
'I haven\'t had the chance to run that code yet',
'I haven\'t touched that code in weeks',
'I must not have understood what you were asking for',
'I thought I finished that',
'I thought I fixed that',
'I thought he knew the context of what I was talking about',
'I thought you signed off on that?',
'I told you yesterday it would be done by the end of today',
'I usually get a notification when that happens',
'I was just fixing that',
'I\'m not familiar with it so I didn\'t fix it in case I made it worse',
'I\'m not getting any error codes',
'I\'m not sure as I\'ve never had a look at how that works before',
'I\'m still working on that as we speak',
'I\'m surprised it works as well as it does',
'In the interest of efficiency I only check my email for that on a Friday',
'It must be a firewall issue',
'It must be because of a leap second',
'It probably won\'t happen again',
'It was working in my head',
'It worked yesterday',
'It works, but it\'s not been tested',
'It would have taken twice as long to build it properly',
'It would take too long to rewrite the code from scratch',
'It\'s a browser compatibility issue',
'It\'s a character encoding issue',
'It\'s a known bug with the programming language',
'It\'s a known bug with the server software',
'It\'s a remote vendor issue',
'It\'s a third party application issue',
'It\'s an unexpected emergent behaviour of several last minute abstractions',
'It\'s just some unlucky coincidence',
'It\'s never done that before',
'It\'s never shown unexpected behaviour like this before',
'It\'s not a code problem - our users need more training',
'Maybe somebody forgot to pay our hosting company',
'My time was split in a way that meant I couldn\'t do either project properly',
'No one told me so I was forced to assume which way to do that',
'Nobody asked me how long it would actually take',
'Nobody has ever complained about it',
'Oh, that was just a temporary fix',
'Oh, that was only supposed to be a placeholder',
'Oh, you said you DIDN\'T want that to happen?',
'Our code quality is no worse than anyone else in the industry',
'Our hardware is too slow to cope with demand',
'Our internet connection must not be working',
'Our redundant systems must have failed as well',
'Somebody must have changed my code',
'That behaviour is in the original specification',
'That code seemed so simple I didn\'t think it needed testing',
'That code was written by the last guy',
'That error means it was successful',
'That feature would be outside of the scope',
'That isn\'t covered by my job description',
'That process requires human oversight that nobody was providing',
'That was literally a one in a million error',
'That wasn\'t in the original specification',
'That worked perfectly when I developed it',
'That\'s already fixed it just hasn\'t taken effect yet',
'That\'s interesting, how did you manage to make it do that?',
'That\'s not a bug it\'s a configuration issue',
'That\'s the fault of the graphic designer',
'The WYSIWYG must have produced an invalid output',
'The client must have been hacked',
'The client wanted it changed at the last minute',
'The code is compiling',
'The download must have been corrupted',
'The existing design makes it difficult to do the right thing',
'The marketing department made us put that there',
'The original specification contained conflicting requirements',
'The person responsible doesn\'t work here anymore',
'The problem seems to be with our legacy software',
'The program has never collected that information',
'The project manager said no one would want that feature',
'The project manager told me to do it that way',
'The specifications were ambiguous',
'The third party API is not responding',
'The third party documentation doesn\'t exist',
'The third party documentation is wrong',
'The unit test doesn\'t cover that eventuality',
'The user must not know how to use it',
'There must be something strange in your data',
'There were too many developers working on that same thing',
'There\'s currently a problem with our hosting company',
'This code was not supposed to go in to production yet',
'This is a previously known bug you told me not to work on yet',
'We didn\'t have enough time to peer review the final changes',
'We outsourced that months ago',
'We should have updated our software years ago',
'We spent three months debugging it because we only had one month to build it',
'Well at least we know not to try that again',
'Well done, you found my easter egg!',
'Well, at least it displays a very pretty error',
'Well, that\'s a first',
'What did you type in wrong to get it to crash?',
'Where were you when the program blew up?',
'You can\'t use that version on your system',
'You must be missing some of the dependencies',
'You must have done something wrong',
'You must have the wrong version',
'You\'re doing it wrong',
'Your browser must be caching the old content']
module.exports = {
	name: 'excuses',
	description: 'Get an excuse.',
  useage: '<type - dev>',
	isCommand: true,
  aliases: ['excuse'],
	execute(message, args) {
    if(args[0] == "dev"){
      message.channel.send(excuse[Math.floor(Math.random() * excuse.length)]);
    }
	},
};
