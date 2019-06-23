export class DTO {
    constructor(
        public id: number,
        public wordNativeLang: string,
        public wordLearnLang: string,
        public picture: string,
        public categoryId?: number) { }
}