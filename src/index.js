import fs from 'fs';

export default class {
  static create(inDbJson, inApiPath, inSpacer) {
    return new this(inDbJson, inApiPath, inSpacer);
  }

  constructor(inDbJson, inApiPath, inSpacer = 2) {
    this.dbJson = inDbJson;
    this.apiPath = inApiPath;
    this.spacer = inSpacer;
    this.data = {};

    this.read();
    this.write();
  }

  read() {
    const apis = this.apiPath;
    fs.readdirSync(apis).map((api) => {
      return Object.assign(this.data, require(`${apis}/${api}`).default);
    });
  }

  write() {
    fs.writeFileSync(this.dbJson, JSON.stringify(this.data, null, this.spacer));
  }
}
