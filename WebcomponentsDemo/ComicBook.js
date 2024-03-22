customElements.define('comic-book',
  class extends HTMLElement {
    constructor() {
      super();

      const frames = this.children;
      const height = this.getAttribute('height');

      const comicContainer = document.createElement('div');
      comicContainer.id = `comic-container`;
      comicContainer.style = `position:relative;`;

      const display = document.createElement('pre');
      display.style = 'text-align:center; overflow:hidden; height:' + height + ';';
      display.innerHTML = frames[0].innerHTML;

      const prevButton = document.createElement('button');
      prevButton.style = `position:absolute; top:50%; left:0%;`;
      prevButton.innerHTML = `prev`;
      prevButton.addEventListener('click', () => {prevFrame()});

      const nextButton = document.createElement('button');
      nextButton.style = `position:absolute; top:50%; right:0%;`;
      nextButton.innerHTML = `next`;
      nextButton.addEventListener('click', () => {nextFrame()});

      let frameCounter = 1;

      function nextFrame() {
        if(frameCounter < frames.length){
          frameCounter++;
          display.innerHTML = frames[frameCounter-1].innerHTML;
        }
      }

      function prevFrame() {
        if(frameCounter > 1){
            frameCounter--;
            display.innerHTML = frames[frameCounter-1].innerHTML; 
        }
      }

      const linkElem = document.createElement('link');
      linkElem.setAttribute('rel', 'stylesheet');
      linkElem.setAttribute('href', '/assets/main.css');

      comicContainer.appendChild(display);
      comicContainer.appendChild(prevButton);
      comicContainer.appendChild(nextButton);

      const shadowRoot = this.attachShadow({mode: 'open'});

      shadowRoot.appendChild(comicContainer);
      shadowRoot.appendChild(linkElem);
    }
  }
);
