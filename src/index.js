import fs from 'fs';

export default class {
  static create(inDbJson,inApiPath,inSpacer){
    return new this(inDbJson,inApiPath,inSpacer);
  }

  constructor(inDbJson,inApiPath,inSpacer=2){
    this._dbJson = inDbJson;
    this._apiPath = inApiPath;
    this._spacer = inSpacer;
    this._data = {};

    this.read();
    this.write();
  }

  read(){
    const apis = this._apiPath;
    fs.readdirSync(apis).map(api => {
      return Object.assign(
        this._data, require(`${apis}/${api}`).default
      );
    });
  }

  write(){
    fs.writeFileSync(
      this._dbJson, JSON.stringify(this._data, null, this._spacer)
    );
  }
}
