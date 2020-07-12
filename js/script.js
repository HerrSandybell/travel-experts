const navBar = document.querySelector(`nav`)
const burgerBtn = document.querySelector(`.hamburger-menu`);

// When burger button is clicked, change its color and slide in the nav bar.
burgerBtn.addEventListener("click", function(){
    navBar.classList.toggle('visible');
    burgerBtn.classList.toggle('toggled');
})

// GALLERY CODE //
// const imgList = [10, 100, 1000, 101, 1011, 1015, 1023, 1029, 1036, 1037, 1040, 1039, 1043, 1044, 1045, 1050, 1057, 1061, 108, 11, 116, 122, 13, 128, 136, 142, 15, 164];

const gallery = document.querySelector('.gallery');

const imgList = [
    {location: `Calgary: Lake Banff`,
  id: `1011`,
  site: `https://www.banfflakelouise.com/`,
  description: `Banff National Park (French: Parc national Banff) is Canada's oldest national park, established in 1885. ocated in Alberta's Rocky Mountains, 110–180 kilometres (68–112 mi) west of Calgary, Banff encompasses 6,641 square kilometres (2,564 sq mi) of mountainous terrain, with many glaciers and ice fields, dense coniferous forest, and alpine landscapes. 
  </br></br>
  Banff and Lake Louise has a rich heritage as one of the world’s most awe-inspiring mountain destinations. With easy access to pristine wilderness, endless outdoor adventures, and all the amenities you need, in Banff National Park you feel truly immersed in nature.`
  },{location: `New York: Centeral Park`,
  id: `1029`,
  site: `https://www.nycgo.com/`,
  description: `One of the world's greatest cities, New York (known as "The Big Apple", "NYC," and often called "New York City") is a global center for media, entertainment, art, fashion, research, finance, and trade.
  </br></br>
  From the Statue of Liberty in the harbor to the Empire State Building towering over the Manhattan skyline, from the tunnels of the subway to the riches of Wall Street, from the bright signs of Times Square to the naturalistic beauty of Central Park, and from Yankee Stadium in the Bronx to Coney Island in Brooklyn, New York's landmarks are quintessential American landmarks.`
  },{location: `Germany: Neuschwanstein Castle`,
  id: `1040`,
  site: `https://www.neuschwanstein.de/englisch/palace/`,
  description: `Neuschwanstein Castle is a 19th-century Romanesque Revival palace on a rugged hill above the village of Hohenschwangau near Füssen in southwest Bavaria, Germany.
  </br></br>
  Few places on Earth look more like storybook illustrations that Neuschwanstein Castle. With its towers, turrets, frescoes, and throne hall, Neuschwanstein (or Schloss Neuschwanstein, as it is called in German) looks like it was plucked straight from your favorite fairy tale. But the story behind this over-the-top palace nestled in the Bavarian Alps is less idyllic, as it has given the famous nickname to it's commissioner: The Mad King Ludwig.`
  },{location: `California: Yosemite National Park`,
  id: `1043`,
  site: `https://www.travelyosemite.com/`,
  description: `Yosemite National Park is an American national park located in the western Sierra Nevada of Central California, bounded on the southeast by Sierra National Forest and on the northwest by Stanislaus National Forest.
  </br></br>
  An icon of America’s majestic natural beauty, California’s Yosemite National Park welcomes millions of visitors each year—drawn to its dramatic waterfalls, giant sequoias, abundant wildlife, and awe-inspiring cliffs, like Half Dome and El Capitan. Whether you’re looking for the adventure vacation of a lifetime, want to immerse yourself in the stillness of nature—or simply hike, backpack or ski in one of the most beautiful places on earth, you’ll find your place in Yosemite.`
  },{location: `Italy: Tuscany`,
  id: `116`,
  site: `https://www.discovertuscany.com/`,
  description: `From the Etruscans to the Romans to the Renaissance, Tuscany is possibly the greatest repository of art in the world, from extraordinary paintings and sculpture to frescoes and architectural masterpieces.  
  </br></br>
  Tuscany is a wealth of historic treasures considered one-of-a-kind worldwide: the region is full of art cities and little picturesque villages with a huge cultural heritage, but is also extraordinary because of its fascinating landscape, with its bucolic countryside and rolling hills. Not to mention its amazing islands and coastal areas, its protected parks and, last but not least, its food, simple with authentic flavors, and its wines, ranked among the best in the world: to put it simply, there are really many reasons to visit Tuscany. `
  },{location: `The Bahamas`,
  id: `108`,
  site: `https://www.bahamas.com/`,
  description: `When beach lovers dream of the perfect stretch of powdery sand, lapped by seas in sublime shades of blue, they're probably dreaming of the Bahamas. Encompassing 700 islands and more than 2,000 small cays sprinkled across the Atlantic Ocean and Caribbean Sea, this tropical paradise lies only 80 kilometers from Florida at its closest point. Once a haven for pirates and Loyalists, the islands are now a playground for the rich and famous and anyone who enjoys world-class fishing, boating, diving, snorkeling, and sailing. 
  </br></br>
  Like seashells, no two holidays in the Bahamas are alike. With options as diverse as its 700 islands, it's a place where you can find exactly the getaway you love most. Looking for a family destination, a place for lovers to sneak away, a gambling mecca, a haven for cruise passengers, or a shopper’s world market? The Bahamas is all these… and much more.`
  }
]

let galleryTemplate = '';

imgList.forEach(function(item) {
  galleryTemplate += 
    `<div class='destination-card center flex-vertical'>
      <img src='https://picsum.photos/id/${item.id}/300/250' alt='Picture of ${item.location}'>
      <a href='${item.site}' title='${item.location} website link' target='_blank'><h2>${item.location}</h2></a>
      <p>${item.description}</p>
    </div>`
});

// for (i=0; i < imgList.length; i++) {
//   galleryTemplate += 
//     `<div>
//       <img src='https://picsum.photos/id/${imgList[i]}/250/250'>`;
// }


// document.querySelector('section').classList.add('center flex-vertical');
gallery.innerHTML = galleryTemplate;

// END GALLERY CODE //

// Gallery Object //

