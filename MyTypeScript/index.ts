class NewWawe {
    private _iterationCount:number = 10;
    public newArray:Array<number> = [];
    privateMethod = () => {
        for (let index = 0; index < this._iterationCount; index++) {
            this.newArray.push(Math.round(Math.random()))
            console.log(this.newArray);
        }
    }
}

const ast = new NewWawe()
ast.privateMethod()