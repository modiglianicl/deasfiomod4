class Animal {
    constructor(name, age, images, comments, sounds) {
        this._name = name;
        this._age = age;
        this._images = images;
        this._comments = comments;
        this._sounds = sounds;
        
    }
    get names() {
        return this._name;
    }
    get ages() {
        return this._age;
    }
    get images() {
        return this._images;
    }
    get comments() {
        return this._comments;
    }
    get sounds() {
        return this._sounds;
    }
    set comments(comments) {
        this._comments = comments;
    }
}

export default Animal