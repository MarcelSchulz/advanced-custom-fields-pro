'use strict';

import { token } from './config.js';
/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
import Discord from 'discord.js';

// Create an instance of a Discord client
const client = new Discord.Client();


const responses = [
  'Alter, bin grad so traurig im Gulag gestorben',
  'No front, aber ihr müsst eure offs schon auch abschicken',
  'No front',
  'No hate',
  'kappa',
  'feelsbadman',
  'puh fühl das richtig',
  'ja digga da kannste direkt löschen klicken',
  'autismus kickt',
  'Ich bin Käptn zur See und hab die Patente A,B,C und die 6',
  'ja digga was soll ich da machen?',
  'der job ist eigentlich so traurig',
  'ja kb stamm ist scheiße',
  'jo ka find ich auch mega behindert hab auch keine intuition mehr :smile:',
  'ja chill',
  'ey digga',
  'ey digga, das doch keine arbeit, alle 10 minuten den FA durchklicken',
  'ey digga, farmen bringt dir halt so krassen Vorteil',
  'Gio lass mal 1 gegen 1 in CoD',
  'Jungs ich bin grad soooo traurig gestorben',
  'Digga was weiß ich was die hier wollen mit dem Dichtring',
  'ey digga, wenn noch einer wegen meinem farm heult bin ich raus',
  'Willkommen in bayern',
  'random Story war heute das die azubine bei der GL angerufen hat ob nicht die kollegin morgen kommen könnte weil sie alleine is :lul:',
  'geht mir schon bissl ab lel',
  'why',
  'Android app is beste wo gibt kappa',
  'Bro ich bin eher so der Zwecktrinker weniger der Genusstrinker',
  'Hin und wieder mal ordentlich zu schütten',
  'Digga die verhütet mit Tampons ohne Schnur und hat jetz angst dass sie ihn nicht mehr raus bekommt',
  'Digga Marcel du bist echt nice!',
  'Digga Gio du bist echt gut in Stämme',
  'Digga Ferdi du bist besser als ich in FIFA',
  'Ois wos weida weg is wie Donau is, is nix gscheids',
  'lauter saupreißn hier',
  'digga ich fackel den laden ab muss nur noch sehen wie ich das mach ohne spuren zu hinterlassen',
  'du unehrenmann',
  'ehrenmann',
  'no joke schon über ein jahr keine farm welt mehr digga das ist doch scheiße',
  'hier und da mal ne falsche bier das geht schon',
]

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log(`I am ready with ${responses.length} responses`);
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content.startsWith('realtalk')){
    const content = message.content.replace('realtalk', '').trim();

    const response = responses[Math.floor(Math.random() * responses.length)];

    // Send "pong" to the same channel
    message.channel.send(response);
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(token);
