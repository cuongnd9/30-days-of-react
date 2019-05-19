var initialState = [
  {
    id: 1,
    name: 'Monster 797',
    image: 'http://images.ctfassets.net/o6sr41tx16eu/3LYwlGMCkwwIyQeOmaUg04/62d85640daa995211d666728fcffb793/Monster-797_MY18-White-01-Book-testride_630x390.jpg',
    description: 'The Monster 797 is the entrance to the Ducati world with its values, style, sophistication, and performance. It sporty, essential, easy to ride, but never intimidating — all you need to have undemanding fun.',
    price: 9295,
    rating: 4,
    inventory: 600
  },
  {
    id: 2,
    name: 'Monster 821',
    image: 'http://images.ctfassets.net/o6sr41tx16eu/3Tm1FcXCGseywq8MSwGGO/1ff4b588eb300614101bf7813385fa30/Monster-821-MY18-Red-01-Model-Preview-1050x650.png',
    description: 'With its supremely sporty performance and agility, the new Monster 821 has been designed for maximum riding pleasure. The performance of the 109 HP Testastretta 11° engine is enhanced by the Ducati Safety Pack (ABS and Ducati Traction Control) and the Riding Modes, which guarantee maximum safety always and everywhere.',
    price: 11995,
    rating: 5,
    inventory: 500
  },
  {
    id: 3,
    name: 'Monster 1200',
    image: 'http://images.ctfassets.net/o6sr41tx16eu/39FiGaOid24ciiGYSaaC4S/a28b15aedc66dd93055222e4883792d3/Monster-1200-MY18-Red-01-Model-Preview-1050x650.png',
    description: 'The new Monster 1200 fully embodies those values that have seen bikers’ hearts race for over 20 years. A sports icon that is totally renewed while staying faithful to the values that have made it unique: even more beautiful, even more technological, still unmistakeably Monster.',
    price: 14995,
    rating: 4,
    inventory: 300
  },
  {
    id: 4,
    name: 'Multistrada 950',
    image: 'http://images.ctfassets.net/o6sr41tx16eu/2O0xZ0D6FOUoOYUU2MmQio/09a66e8c47b2538e52eb0eb178643bf7/MTS-950-MY18-Red-01-Model-Preview-1050x650.png',
    description: 'The new Multistrada 950 is the Ducati\'s smallest "multibike", provides all the excitement of the Multistrada in a way that makes it more accessible and versatile. Designed to put great performance within everyone\'s grasp, the Multistrada 950 is for those who want to get in some touring (and perhaps enjoy the company of a passenger) and those who want an agile fun bike that is ideal for everyday use.',
    price: 13995,
    rating: 5,
    inventory: 250
  },
  {
    id: 5,
    name: '959 Panigale',
    image: 'http://images.ctfassets.net/o6sr41tx16eu/2ay7fiSZU0Am0yGkuC4cGU/9f3ab7d933bbad14bcd1c4a3868adaa0/Panigale-959-MY18-USA-Red-01-Model-Preview-1050x650.png',
    description: 'The 959 Panigale Corse represents the highest sporting expression of the famous twin cylinder from Borgo Panigale. Thanks to the Öhlins suspensions, the lithium-ion battery and a dedicated livery inspired by the MotoGP colours, the 959 Panigale Corse is ready to hit the track.',
    price: 15395,
    rating: 5,
    inventory: 500
  },
  {
    id: 6,
    name: '1299 Panigale',
    image: 'http://images.ctfassets.net/o6sr41tx16eu/6FxpewbNdYE4KWqqIo62qG/801809968ef5af0b187b5e2b9d910af8/1299-Panigale-Final-Edition-MY18-01-Data-Sheet-768x480.png',
    description: 'Unmistakable design and uncompromising technical choices like the Superquadro engine with a record 116 mm bore. 209 hp of pure adrenaline and 142 Nm of breathtaking torque. Cutting-edge electronics with Bosch Inertial Platform to guarantee maximum control. 1299 Panigale: the object of desire of every motorcycle enthusiast.',
    price: 39900,
    rating: 5,
    inventory: 500
  },
  {
    id: 7,
    name: 'Scrambler Full Throttle',
    image: 'https://cms.scramblerducati.com/wp-content/uploads/2018/10/full_throttle_lato_sx-1920x1240.jpg',
    description: 'The black and yellow tank. The side number holders. The racing style rear. Inspired by the Mexican customizer and Super Hooligan championship star Frankie Garcia, the new Scrambler Full Throttle embodies the spirit of legendary dirty track ovals.',
    price: 10695,
    rating: 5,
    inventory: 600
  },
  {
    id: 8,
    name: 'Scrambler Desert Sled',
    image: 'https://cms.scramblerducati.com/wp-content/uploads/2018/10/desert_lato_dx-1920x1240.jpg',
    description: 'Making its way out of the roughest roads of California and New Mexico, the new Scrambler Desert Sled is designed for those who love the unconventional streets and the less traveled paths.',
    price: 11895,
    rating: 5,
    inventory: 450
  },
  {
    id: 9,
    name: 'Scrambler Café Racer',
    image: 'https://cms.scramblerducati.com/wp-content/uploads/2018/10/cafe_racer_dx-1920x1240.jpg',
    description: 'Rebellion, freedom and style. The Café Racer culture, one of the most influential movements in the history of motorcycling, blends with the Scrambler soul in the new, unedited, Scrambler Café Racer. And with the new "Silver Ice Matt" colour the Land of Joy is ready for another revolution.',
    price: 11695,
    rating: 5,
    inventory: 450
  },
  {
    id: 10,
    name: 'HYPERMOTARD 939',
    image: 'https://images.ctfassets.net/28uk7b0wvnz9/3Axmei5mYMkmG2UGssKQQM/3e7a54294e99efc3055561b46cfea11d/Hyper-939-MY18-Red-Model-Preview-1050x650.png',
    description: 'The Hypermotard 939 series includes Power Modes and Full Ride by Wire. Available in the two Ducati Red colours with red frame and black rims and Star White Silk with red rims and black frame.',
    price: 24695,
    rating: 5,
    inventory: 450
  }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
