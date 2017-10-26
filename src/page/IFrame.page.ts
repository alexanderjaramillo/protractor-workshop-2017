import { promise, browser } from 'protractor';

export class IFramePage {
  public modifyIframeHeight(height : number) : promise.Promise<void> {
    return browser.executeScript(`document.querySelector("#IF1")
      .setAttribute('height', ${height});`);
  }

  public async getIframeHeight() : Promise<number> {
    return Number(await browser.executeScript(`document.querySelector("#IF1")
      .getAttribute("height");`));
  }
}
