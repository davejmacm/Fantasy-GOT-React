import React, {Component} from 'react';
import fire from '../config/fire';

class Seed extends Component {

seedCharacters(){
db.collection('characters').add({
  name: "The Night's King",
  bio: 'Terrifying leader of the White Walkers.',
  pic_url: 'https://s2.r29static.com//bin/entry/982/720x864,80/1796850/image.jpg',
  score: 5
})

db.collection('characters').add({
  name: 'Tyrion Lannister',
  bio: 'The youngest Lannister, deft in politics but shunned for being dwarfed',
  pic_url: 'https://i.pinimg.com/originals/c3/aa/d8/c3aad803fe3d75b7ebd18ce78d6ceb22.jpg',
  score: 15
})

db.collection('characters').add({
  name: 'Bran Stark',
  bio: 'The second youngest child of Eddard and Catlyn Stark. His journey has taken him beyond the Wall and learning to be the Three-Eyed-Raven',
  pic_url: 'https://fsmedia.imgix.net/b4/47/9c/ca/84d6/4276/9674/c8823d0790fb/is-bran-the-night-king-nah-but-maybe.jpeg?auto=format%2Ccompress&w=800&h=800&crop=entropy&fit=crop',
  score: 35
})

db.collection('characters').add({
  name: 'Jaime Lannister',
  bio: 'Twin of Queen Cersei',
  pic_url: 'https://vignette.wikia.nocookie.net/gameofthrones/images/e/eb/Jaime.jpg/revision/latest?cb=20170818052054',
  score: 10
})

db.collection('characters').add({
  name: 'Jon Snow',
  bio: 'The illegitimate son of Eddard Stark. Until recently he was the Night Commander at the Wall',
  pic_url: 'https://wallpapershome.com/images/pages/pic_v/15200.jpg',
  score: 0
})

db.collection('characters').add({
  name: 'Daenerys Targaryen',
  bio: "Queen Daenerys I Targaryen is the younger sister of Rhaegar Targaryen and Viserys Targaryen, the paternal aunt of Jon Snow, and the youngest child of King Aerys II Targaryen and Queen Rhaella Targaryen, who were both ousted from the Iron Throne during Robert Baratheon's rebellion.",
  pic_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/DaenerysTargaryenGoT.jpg/220px-DaenerysTargaryenGoT.jpg',
  score: 15
})

db.collection('characters').add({
  name: 'Bob',
  bio: "Bob doesn't exist in GoT",
  pic_url: '',
  score: 5
})
}

}

export default Seed;
