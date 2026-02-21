const $ = (e, d = document) => d.querySelector(e);

class AnchorHint {
    constructor(container, position, duration) {
        this.ctn = container;
        this.top = '5%';
        this.left = '5%';

        if (position) {
            this.top = position.top;
            this.left = position.left;
        }
        
        this.duration = duration || 200;
    }

    show(message) {
        this.construct(message);
        
        setTimeout(() => {
            this.ctn.removeChild(this.container);
        }, this.duration);
    }

    construct(message) {
        this.container = this._new('div', {
            width: 'auto',
            padding: '10px',
            color: '#fff',
            borderRadius: '10px',
            position: 'absolute',
            top: this.top,
            left: this.left,
            transition: `all ${this.duration} ease-in-out`,
            fontSize: '14px',
            backgroundColor: '#28282855'
        });

        const span = this._new('span', {
            fontStyle: 'italic'
        });

        span.textContent = message;

        this.container.appendChild(span);

        this.ctn.appendChild(this.container);
    }

    _new(el, style) {
        if (!el) return null;

        const htmlel = document.createElement(el);

        if (Object.entries(style)) {
            var cssStyle = '';
            for (let kv of Object.entries(style)) {
                var cssprop = kv[0];
                var propval = kv[1];
                htmlel.style[cssprop] = propval;
            }
        }

        return htmlel;
    }
}

export default AnchorHint;

