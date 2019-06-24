export class DTO {
    constructor(
        public id: number,
        public wordNativeLang: string,
        public wordLearnLang: string,
        public picture: string,
        public enableNativeLang: string,
        public enableSound: string,
        public enablePronounceNativeLang: string,
        public enablePronounceLearnLang: string,
        public sound: string,
        public pronounceLearn: string,
        public pronounceNative: string,
        public categoryId?: number) { }
}