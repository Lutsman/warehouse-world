const togglerGroup = {};

class Chattoggler {
    constructor(options) {
        this.toggler = options.toggler;
        this.isActive = false;
        this.classNames = {
            active: 'et-active',
            closeBtn: 'tm-chat-settings-target-close',
            counter: 'tm-chat-settings-counter',
        };

        this.init();
    }

    init() {
        this.bindElements();
        this.bindHandlers();
        this.attachHandlers();
    }

    bindElements() {
        this.$toggler = $(this.toggler);
        this.groupname = this.$toggler.attr('chat-toggler');
        this.$target = $(this.groupname);
        this.$closeBtn = this.$target.find('.' + this.classNames.closeBtn);
        // implement counter calculation
        this.$counter = this.$target.find('.' + this.classNames.counter);
    }

    bindHandlers() {
        this._toggle = this.toggle.bind(this);
        this._close = this.close.bind(this);
    }

    attachHandlers() {
        this.$toggler.on('click', this._toggle);
        this.$closeBtn.on('click', this._close);
    }

    toggle() {
        if (this.isActive) {
            this.toggleOff();
        } else {
            this.toggleOn();
        }
    }

    close(evt) {
        evt.preventDefault();
        this.toggleOff();
    }

    toggleOff() {
        togglerGroup[this.groupname] = togglerGroup[this.groupname] > 0 ? togglerGroup[this.groupname] - 1 : 0;
        this.$toggler.removeClass(this.classNames.active);
        this.isActive = false;
        if (togglerGroup[this.groupname] === 0) {
            this.hideTarget();
        }
    }

    toggleOn() {
        togglerGroup[this.groupname] = togglerGroup[this.groupname] ? togglerGroup[this.groupname] + 1 : 1;
        this.$toggler.addClass(this.classNames.active);
        this.isActive = true;
        this.showTarget();
    }

    hideTarget() {
        this.$target.fadeOut();
    }

    showTarget() {
        this.$target.fadeIn();
    }
}

const $togglers = $('[chat-toggler]');

$togglers.each(function () {
    new Chattoggler({toggler: this});
});
