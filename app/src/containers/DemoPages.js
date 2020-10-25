import React from "react";
import { useHistory } from "react-router-dom";
import ReactGridLayout from 'react-grid-layout';
import '../styles/ePortfolio-widgets.css';
import '../styles/resizable-styles.css';
import '../fonts/roboto/Roboto-Black.ttf'

import MotherWidget from '../components/Widgets/MotherWidget.js';

export default function EPortfolioDemo() {
    const URL = window.location.href.split('/');
    const PID = URL[URL.length - 1]
    const history = useHistory();

    function switchPage(PID) {
        switch(PID) {
            case 'echidna': 
                return <Echidna/>
            case 'demo':
                return <Demo/>
            case 'calvin':
                return <Calvin/>
            case 'team':
                return <Team/>
            case 'tutorial':
                return <Tutorial/>
            default:
                history.push("/404");
                return;
        }
    }

    return (
        <div className='eportfolioBody'>
            <header className='header'>
                
                <button className='addWidgetButton' onClick={ () => {window.location.href='/help'}}>
                    <a href = '/help'> ← </a>         
                </button>
                 
                <h1 className='impact'>
                    {PID}
                </h1>
                
                <button className='addWidgetButton' onClick={ () => {window.location.href='/'}}>
                    <a href = '/'> Home </a>         
                </button>
            </header>
            {switchPage(PID)}
        </div>
    );
};

//example pages are below --------------------------------------------------------------------------------------------------------------------------------

function Echidna() {
    const width = 300;
    const height = 300;
    const columns = 5;

    const widgets = [
        {
          "public_id": "5ee15077-b8ab-4f54-b6e0-8029b120729f",
          "type": "embed",
          "location": [
            5,
            3,
            0,
            2
          ],
          "data": {
            "external_url": "https://www.youtube.com/embed/yHjdIXN9v2g"
          }
        },
        {
          "public_id": "21f0c5a2-5d0d-4b55-970b-acd6bcb8cabd",
          "type": "about",
          "location": [
            1,
            1,
            0,
            0
          ],
          "data": {
            "about": "{\"blocks\":[{\"key\":\"9ouf5\",\"text\":\"This is an Echidna\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"1d33n\",\"text\":\"They are found in Australia \",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"e4s31\",\"text\":\"They are mammals, but lay eggs.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"c3n7e\",\"text\":\"Source\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":0,\"length\":6,\"key\":0}],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://en.wikipedia.org/wiki/Echidna\",\"className\":\"MUIRichTextEditor-anchorLink-34\"}}}}"
          }
        },
        {
          "public_id": "78d20930-82be-40e6-bdea-90898cd5ceef",
          "type": "about",
          "location": [
            1,
            1,
            0,
            1
          ],
          "data": {
            "about": "{\"blocks\":[{\"key\":\"b9h59\",\"text\":\"The Echidna is on the Australian five cent coin. \",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"81qlk\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"1iv2l\",\"text\":\"Our team is called FiveCent Software Systems.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"f0ir2\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"65m6r\",\"text\":\"Thus, we named this service Echidna.  \",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":28,\"length\":7,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
          }
        },
        {
          "public_id": "da500317-cd3d-47f3-bd19-704221460ee6",
          "type": "image",
          "location": [
            4,
            2,
            1,
            0
          ],
          "data": {
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Short-beaked_echidna_in_ANBG.jpg/1920px-Short-beaked_echidna_in_ANBG.jpg"
          }
        }
      ]
    
    return (
        <div className='eportfolioBody'>
            <ReactGridLayout className="layout" cols={columns} rowHeight={height} width={columns * width} margin={[10,10]} compactType={null} isDraggable={false} isResizable={false}>
                {widgets.map(widget =>(
                    < div key={widget.public_id} data-grid={{i: widget.public_id, w: widget.location[0], h: widget.location[1], x: widget.location[2], y: widget.location[3]}}>
                        <MotherWidget widget={widget}/> 
                    </ div>
                ))}
            </ReactGridLayout>
        </div>
    );  
}

function Demo() {

    const width = 300;
    const height = 300;
    const columns = 5;
    
    return (
        <div className='eportfolioBody'>

            <ReactGridLayout className="layout" cols={columns} rowHeight={height} width={columns * width} margin={[10,10]} compactType='horizontal' >
            <div key="a" data-grid={{i: 'a', x: 3, y: 1, w: 1, h: 2}}>
                <img src={process.env.PUBLIC_URL + '/images/galaxy.gif'} alt="galaxy" draggable='false' height='100%' />
            </div>
            <div key="b" data-grid={{i: 'b', x: 4, y: 1, w: 1, h: 3}}>
                <iframe width="100%" height="100%" title="embed1" src="https://www.youtube.com/embed/aoKwNx3yr-w?autoplay=0&loop=1&color=white" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div key="c" data-grid={{i: 'c', x: 0, y: 4, w: 2, h: 1}}>
                <img src={'https://media1.tenor.com/images/8daeb547b121eef5f34e7d4e0b88ea35/tenor.gif?itemid=5156041'} alt={'bruhmoment'} height='100%' draggable='false' />
            </div>
              <div key="d" data-grid={{i: 'd', x: 1, y: 1, w: 2, h: 1}}>
                <img src={'https://media1.tenor.com/images/48d0355da1b5b8ebd414323806ac2a7f/tenor.gif?itemid=13271320'} alt={'damn'} height='100%' draggable='false' />
            </div>
            <div key="e" data-grid={{i: 'e', x: 1, y: 2, w: 2, h: 1}}>
                <img src={'https://data.whicdn.com/images/286894498/original.gif'} alt={'scarce'} height='100%' draggable='false' />
                <p>hey whats up guys its scarce here</p>
            </div>
            <div key="f" data-grid={{i: 'f', x: 2, y: 3, w: 2, h: 1}}>
                <iframe width='100%' height='100%' title="embed2" src="https://www.youtube.com/embed/G7RgN9ijwE4?color=white" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p>hey this is pretty cool</p>
            </div>
            <div key="g" data-grid={{i: 'g', x: 0, y: 0, w: 1, h: 3}}>
                <iframe width='100%' height='100%' title="embed3" src="https://open.spotify.com/embed/playlist/1nvxlaARYE1MMzeEfKgm1R" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <p>hey this is pretty cool</p>
            </div>
            <div key="h" data-grid={{i: 'h', x: 1, y: 0, w: 1, h: 1}}>
                <img src={process.env.PUBLIC_URL + '/images/what.gif'} alt={'bruhmoment'} width={width} draggable='false' />
            </div>
            <div key="i" data-grid={{i: 'i', x: 2, y: 0, w: 3, h: 1}}>
                <h1> Welcome to My Page! </h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>
            <div key="gj" data-grid={{i: 'j', x: 0, y: 0, w: 1, h: 3}}>
                <iframe width='100%' height='100%' title="embed4" src="https://embed.music.apple.com/au/album/future-nostalgia/1495799403" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <p>hey this is pretty cool</p>
            </div>
            </ReactGridLayout>
        </div>
    );         
}

function Calvin() {
    const width = 300;
    const height = 300;
    const columns = 5;

    const widgets = [
        {
          "public_id": "ce8f4405-7da8-4892-8af3-64b781908b63",
          "type": "image",
          "location": [
            2,
            1,
            1,
            0
          ],
          "data": {
            "image_url": "https://media.discordapp.net/attachments/198751173967216640/767647617462173736/Picture_2.png"
          }
        },
        {
          "public_id": "aeabb5d9-daa2-4381-ae00-7f21a3351654",
          "type": "about",
          "location": [
            1,
            1,
            0,
            0
          ],
          "data": {
            "about": "{\"blocks\":[{\"key\":\"fsk7q\",\"text\":\"Calvin\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"2ea43\",\"text\":\"Developer at FiveCent Software Systems 💻\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":12,\"length\":27,\"style\":\"ITALIC\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"dst4u\",\"text\":\"He/Him ♂️\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":7,\"length\":2,\"key\":0}],\"data\":{}},{\"key\":\"4cdrj\",\"text\":\"21 years old  🔞\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":12,\"length\":2,\"style\":\"ITALIC\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"blk1i\",\"text\":\"3rd year university student ✨\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"4uqhk\",\"text\":\"Leo ♌\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"href\":\"https://emojipedia.org/male-sign/\",\"url\":\"https://emojipedia.org/male-sign/\"}}}}"
          }
        },
        {
          "public_id": "58e27e33-6e6b-4a08-9060-c4306202a58c",
          "type": "about",
          "location": [
            1,
            1,
            3,
            0
          ],
          "data": {
            "about": "{\"blocks\":[{\"key\":\"vg3v\",\"text\":\"Likes\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":5,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"1lt1e\",\"text\":\"Essendon 🔴⚫\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"59o5l\",\"text\":\"Rain 🌧\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"fnnhj\",\"text\":\"Blue Cheese 🧀\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"cog2m\",\"text\":\"Dislikes \",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":9,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"68hn8\",\"text\":\"Summer ☀\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"acgt6\",\"text\":\"Seafood 🦞\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"9jhjb\",\"text\":\"Fabrice 🙅‍♂️\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
          }
        },
        {
          "public_id": "7b188eb2-a1c4-4468-95ad-15554e3caa94",
          "type": "embed",
          "location": [
            1,
            2,
            0,
            1
          ],
          "data": {
            "external_url": "https://open.spotify.com/embed/album/5WpDQt6EbpzXbqo9g9P0L6"
          }
        },
        {
          "public_id": "5996fea4-a010-4dec-8a9b-afee9d9f8ec6",
          "type": "embed",
          "location": [
            2,
            1,
            2,
            1
          ],
          "data": {
            "external_url": "https://www.youtube.com/embed/dGcsHMXbSOA"
          }
        },
        {
          "public_id": "7778cb18-263e-4b5d-a205-4bfe700c8621",
          "type": "image",
          "location": [
            2,
            1,
            1,
            2
          ],
          "data": {
            "image_url": "https://i.giphy.com/media/vXeeHUPxgBtp6/giphy.webp"
          }
        },
        {
          "public_id": "b9612117-061e-465b-8598-1dadd150b5f9",
          "type": "about",
          "location": [
            1,
            1,
            1,
            1
          ],
          "data": {
            "about": "{\"blocks\":[{\"key\":\"vg3v\",\"text\":\"                                     ↑\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"ns4m\",\"text\":\"                                    Me\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"16h20\",\"text\":\"<--- Album I was listening to making this portfolio\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"e3mbs\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"6ncc0\",\"text\":\"This guy showed me how to write this program ---> \",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"113da\",\"text\":\"I wish I could retire, boy that'd be sweet. \",\"type\":\"blockquote\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"6g41k\",\"text\":\"                                      ↓\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
          }
        },
        {
          "public_id": "154e06c2-e6f3-43b9-97c9-2a263455a194",
          "type": "about",
          "location": [
            1,
            1,
            3,
            2
          ],
          "data": {
            "about": "{\"blocks\":[{\"key\":\"vg3v\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"dvf2u\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"1hpm9\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"5623p\",\"text\":\"The man who moves a mountain begins by carring small stones.\",\"type\":\"blockquote\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"3ut8j\",\"text\":\"- Calvin :)\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
          }
        }
      ]
    
    return (
        <div className='eportfolioBody'>
            <ReactGridLayout className="layout" cols={columns} rowHeight={height} width={columns * width} margin={[10,10]} compactType={null} isDraggable={false} isResizable={false}>
                {widgets.map(widget =>(
                    < div key={widget.public_id} data-grid={{i: widget.public_id, w: widget.location[0], h: widget.location[1], x: widget.location[2], y: widget.location[3]}}>
                        <MotherWidget widget={widget}/> 
                    </ div>
                ))}
            </ReactGridLayout>
        </div>
    ); 
}

function Team() {
  const width = 300;
  const height = 300;
  const columns = 5;

  const widgets = [
    {
      "public_id": "99a00e59-edfe-4e9a-8a3e-9a8db73bda5e",
      "type": "image",
      "location": [
        1,
        1,
        1,
        1
      ],
      "data": {
        "image_url": "https://cdn.discordapp.com/attachments/198751173967216640/767647617462173736/Picture_2.png"
      }
    },
    {
      "public_id": "77dc2309-1ccc-4b50-9ecc-a18568541c18",
      "type": "image",
      "location": [
        1,
        1,
        2,
        1
      ],
      "data": {
        "image_url": "https://cdn.discordapp.com/attachments/198751173967216640/767647241804447744/23012007.jpg"
      }
    },
    {
      "public_id": "786749a9-3e34-4cef-9fc1-b8a061d30784",
      "type": "image",
      "location": [
        1,
        1,
        4,
        1
      ],
      "data": {
        "image_url": "https://scontent.fmel7-1.fna.fbcdn.net/v/t1.0-9/530510_302333113218573_660232513_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=YS-FBOydiHIAX87ARSh&_nc_ht=scontent.fmel7-1.fna&oh=0648eab25585b31ab70f8c4b745a24d5&oe=5FB6A98D"
      }
    },
    {
      "public_id": "986420b4-5eeb-46d2-82f3-6a923af588dd",
      "type": "about",
      "location": [
        1,
        1,
        4,
        0
      ],
      "data": {
        "about": "{\"blocks\":[{\"key\":\"vg3v\",\"text\":\"\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"fdtbd\",\"text\":\"\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"d6v6k\",\"text\":\"           Fraser\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
      }
    },
    {
      "public_id": "5c2b5781-2a5c-41aa-88e8-6778b06bb9ed",
      "type": "about",
      "location": [
        1,
        1,
        3,
        0
      ],
      "data": {
        "about": "{\"blocks\":[{\"key\":\"vg3v\",\"text\":\"\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"97for\",\"text\":\"\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"4r312\",\"text\":\"         Marcus\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
      }
    },
    {
      "public_id": "27938ff1-ec1f-45f3-9abc-1e7def3ac134",
      "type": "about",
      "location": [
        1,
        1,
        2,
        0
      ],
      "data": {
        "about": "{\"blocks\":[{\"key\":\"vg3v\",\"text\":\"\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"av1vp\",\"text\":\"\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"281j6\",\"text\":\"         Fabrice\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
      }
    },
    {
      "public_id": "d35c35c7-333f-4fc8-baae-44c0d84de46e",
      "type": "about",
      "location": [
        1,
        1,
        1,
        0
      ],
      "data": {
        "about": "{\"blocks\":[{\"key\":\"vg3v\",\"text\":\"\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"8tb6c\",\"text\":\"\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"59jcj\",\"text\":\"          Calvin\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
      }
    },
    {
      "public_id": "563e5611-ab2f-4a34-9465-2103165de799",
      "type": "about",
      "location": [
        1,
        1,
        0,
        0
      ],
      "data": {
        "about": "{\"blocks\":[{\"key\":\"fsk7q\",\"text\":\"\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"c4q15\",\"text\":\"\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"197q0\",\"text\":\"         Nathan\",\"type\":\"header-two\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
      }
    },
    {
      "public_id": "634aa341-2032-4049-a53c-6fdc8730759f",
      "type": "image",
      "location": [
        1,
        1,
        0,
        1
      ],
      "data": {
        "image_url": "https://cdn.discordapp.com/attachments/745863014837649460/768996708188160030/unknown.png"
      }
    },
    {
      "public_id": "313b7018-dcb3-4c78-85ea-fd8b6136045e",
      "type": "about",
      "location": [
        1,
        1,
        0,
        2
      ],
      "data": {
        "about": "{\"blocks\":[{\"key\":\"vg3v\",\"text\":\"Roles\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":5,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"b1f29\",\"text\":\"Frontend 💻\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"5nbdf\",\"text\":\"GitMaster 🔰\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"fcnjd\",\"text\":\"Graphic Designer ✏\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"97b5\",\"text\":\"Likes\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":5,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"eurj7\",\"text\":\"Pancakes 🥞\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"aclo4\",\"text\":\"Dislikes\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":8,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"c7g8r\",\"text\":\"Hedgehogs 🦔\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
      }
    },
    {
      "public_id": "1b4baa78-2059-4461-8a5d-bc53a197f15b",
      "type": "about",
      "location": [
        1,
        1,
        2,
        2
      ],
      "data": {
        "about": "{\"blocks\":[{\"key\":\"vg3v\",\"text\":\"Roles\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":5,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"7nfql\",\"text\":\"Frontend 💻\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"5rvqv\",\"text\":\"CSS guy 🅱\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"31dj1\",\"text\":\"Accountant 🤑\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"5n2l\",\"text\":\"Likes\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":5,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"1nu0o\",\"text\":\"Watermelon 🍉\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"5hf6q\",\"text\":\"Dislikes\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":8,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"e732f\",\"text\":\"CSS  🖕\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":5,\"length\":1,\"key\":0}],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"href\":\"https://emojipedia.org/middle-finger/\",\"url\":\"https://emojipedia.org/middle-finger/\"}}}}"
      }
    },
    {
      "public_id": "c361a3a2-9c9e-4cd6-b5b1-844130dfd7bc",
      "type": "about",
      "location": [
        1,
        1,
        3,
        2
      ],
      "data": {
        "about": "{\"blocks\":[{\"key\":\"vg3v\",\"text\":\"Roles\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":5,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"86n9p\",\"text\":\"Backend 💾\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"3vg6g\",\"text\":\"Testing ⭕\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"1f3ho\",\"text\":\"Sound Design 🎚\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"6tluu\",\"text\":\"Likes\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":5,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"34o3h\",\"text\":\"The Stone Roses 🎶\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"d1147\",\"text\":\"Dislikes\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":8,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"fvgre\",\"text\":\"Pointers 👉\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
      }
    },
    {
      "public_id": "4ab1aa43-0641-4087-ba62-eac0ffeb9b76",
      "type": "about",
      "location": [
        1,
        1,
        4,
        2
      ],
      "data": {
        "about": "{\"blocks\":[{\"key\":\"vg3v\",\"text\":\"Roles\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":5,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"543vv\",\"text\":\"Backend 💾\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"3njfr\",\"text\":\"Deployment 📤\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"rsap\",\"text\":\"Code Monkey 🙈\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"5btar\",\"text\":\"Likes\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":5,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"dd2ik\",\"text\":\"Tennis 🎾\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"mnhc\",\"text\":\"Dislikes \",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":9,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"5icou\",\"text\":\"Cricket 🏏\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
      }
    },
    {
      "public_id": "a345aa8d-066e-4e97-9f7d-393e734703a6",
      "type": "about",
      "location": [
        1,
        1,
        1,
        2
      ],
      "data": {
        "about": "{\"blocks\":[{\"key\":\"vg3v\",\"text\":\"Roles\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":5,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"bri79\",\"text\":\"Frontend 💻\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"dgj2j\",\"text\":\"ScrumMaster 🏉\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"62iah\",\"text\":\"Client Contact 🤡\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"fv4vr\",\"text\":\"Likes\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":5,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"auu4j\",\"text\":\"Winter ⛄\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"f2a4t\",\"text\":\"Dislikes\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":8,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"6t9c1\",\"text\":\"Presentations 🥺\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
      }
    },
    {
      "public_id": "215124a5-ab6a-4012-b4ac-f220b233d031",
      "type": "image",
      "location": [
        1,
        1,
        3,
        1
      ],
      "data": {
        "image_url": "https://cdn.discordapp.com/attachments/198751173967216640/769096707161980968/unknown.png"
      }
    }
  ]
  
  return (
      <div className='eportfolioBody'>
          <ReactGridLayout className="layout" cols={columns} rowHeight={height} width={columns * width} margin={[10,10]} compactType={null} isDraggable={false} isResizable={false}>
              {widgets.map(widget =>(
                  < div key={widget.public_id} data-grid={{i: widget.public_id, w: widget.location[0], h: widget.location[1], x: widget.location[2], y: widget.location[3]}}>
                      <MotherWidget widget={widget}/> 
                  </ div>
              ))}
          </ReactGridLayout>
      </div>
  ); 
}
  
function Tutorial() {
    const width = 300;
    const height = 300;
    const columns = 5;
    
    return (
        <div className='eportfolioBody'>

            <ReactGridLayout className="layout" cols={columns} rowHeight={height} width={columns * width} margin={[10,10]} compactType='horizontal' >
            <div key="a" data-grid={{i: 'a', x: 0, y: 0, w: 1, h: 1}}>
                <h1> tutorial page </h1> <p>sooper mahreo in riel loife </p>
                <iframe width="100%" height="100%" title="embed1" src="https://www.youtube.com/embed/8EQ17_B7kug" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div key="b" data-grid={{i: 'b', x: 1, y: 0, w: 1, h: 1}}>
                <h1> tutorial video goes here </h1> 
            </div>
            </ReactGridLayout>
        </div>
    );   
}