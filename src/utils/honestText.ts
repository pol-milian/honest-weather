// https://openweathermap.org/weather-conditions

export default function honestText(inputId: number) {
  switch (inputId) {
    case 200:
      return "Did you ask for thunder and a sprinkle of light rain with your coffee?";
    case 201:
      return "Rain and thunder... A perfect day!";
    case 202:
      return "Heavy rain and thunder. Nice day to go out and play!";
    case 210:
      return "Some thunder here and there, no big deal!";
    case 211:
      return "Ah... ah... ah... THUN-DER!!!";
    case 212:
      return "Heavy thunderstorm? Yes sir, that's for you!";
    case 221:
      return "I like my thunderstorms like my clothes: ragged!";
    case 230:
      return "A thunderstorm with light drizzle. Go sunbathing!";
    case 231:
      return "Thunder & Drizzle. No, it's not a rock band. It's what the weather's giving you on your shitty day.";
    case 232:
      return "Heavy drizzle and thunder. Oh boy, that sounds fun :)";
    case 300:
      return "Have you met Rain's younger brother? Drizzle, Light. Light Drizzle. ";
    case 301:
      return "Drizzle: not as strong as rain, but you'll need your raincoat.";
    case 302:
      return "HEAVY Drizzle. Wow, lucky day!!!";
    case 310:
      return "Light drizzle + rain. What does that mean? You'll get wet, guaranteed.";
    case 311:
      return "Drizzle & Rain. No, it's not a new R&B duo. It's the weather for today :)";
    case 312:
      return "Heavy intensity drizzle rain. Sounds fun, doesn't it?";
    case 313:
      return "Shower rain and drizzle. Beach day! Yayyy.";
    case 314:
      return "Heavy showers and drizzle. I love drizzle. It's like chocolate sprinkle on a cappuccino.";
    case 321:
      return "Shower drizzle: almost rain, but not yet. But rest assured: you will get wet!!!";
    case 500:
      return "Are you feeling down? No worries, some rain will make you feel better.";
    case 501:
      return "Moderate rain... Yeah, you are welcome! Enjoy your day.";
    case 502:
      return "Heavy rain... Time for a run!";
    case 503:
      return "Very heavy rain: it sucks to be you.";
    case 504:
      return "Extreme Rain. No, it's not an action movie. It's the forecast for today";
    case 511:
      return "Is there something worse than normal rain? Yeah: FREEZING RAIN. Good luck, mate.";
    case 520:
      return "light intensity shower rain";
    case 521:
      return "Shower rain. Enjoy!!!";
    case 522:
      return "Heavy showers, mate. We got you covered.";
    case 531:
      return "Ragged shower rain. Fuck me if I know what 'ragged' rain is...";
    case 600:
      return "Light snow. Yeah, fuck you.";
    case 601:
      return "It will snow today. Too bad you had other plans.";
    case 602:
      return "Heavy snow. Go to the bar N-O-W! Make sure you don't get trapped in your house, with your wife and kids :)";
    case 611:
      return "Sleet is rain mixed with snow. Basically, ice pellets will fall from the sky. Have a nice day!";
    case 612:
      return "A light shower of small ice pellets. Yayyy!";
    case 613:
      return "A shower of small ice pellets. Yayyy!";
    case 615:
      return "Snow is great. Mixed with rain? TOTALLY SUCKS.";
    case 616:
      return "Snow is great. Mixed with rain? TOTALLY SUCKS.";
    case 620:
      return "Light shower of snow. Time to go out and play!";
    case 621:
      return "A shower of snow. Best reward for waking up at 6am";
    case 622:
      return "A heavy shower of snow. Too bad you have to wake up and walk to work :)";
    case 701:
      return "Mist is great. It makes everyone and everything look blurry.";
    case 711:
      return "When there's smoke, there's a fire. Well, not always. Somehow the prediction for today is 'smoke'";
    case 721:
      return "Haze. And no, it's not from all the weed you've been smoking in your room.";
    case 731:
      return "Darude - Sandstorm. That's your soundtrack for today.";
    case 741:
      return "Fog: you won't see anything... Except your computer screen and your dull coworkers.";
    case 751:
      return "Lucky, sand is coming your way. Get naked and enjoy the feeling.";
    case 761:
      return "Open your eyes wide, if you are lucky you will see all the dust coming your way.";
    case 762:
      return "Deeeep breathh. I love the smell of volcanic ash in the morning :)";
    case 771:
      return "Squalls. Yeah, no clue what that is. Use a dictionary you lazy bastard!";
    case 781:
      return "Twist & shout. Yes, a tornado is coming your way! Fun-fun-fun!";
    case 800:
      return "A clear and sunny day! Too bad you'll be in your cubicle :)";
    case 801:
      return "A few clouds. Fuck you :)";
    case 802:
      return "Scattered clouds. Boring, I know.";
    case 803:
      return "Broken clouds. But who cares? You will be stuck at the office the whole day...";
    case 804:
      return "Overcast clouds. No chance of seeing the sun today = WIN-WIN";
    default:
      return "No fucking clue about the weather today. Have a shitty day!";
  }
}
