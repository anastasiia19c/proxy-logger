import { IWebsite } from "./IWebsite";

export class WebsiteService implements IWebsite {
  private pages: string[] = [];

  addPage(name: string): void {
    if (this.pages.includes(name)) {
      throw new Error(`La page ${name} existe déjà`);
    }

    this.pages.push(name);
    console.log(`[SERVICE] Page ${name} ajoutée`);
  }

  removePage(name: string): void {
    if (!this.pages.includes(name)) {
      throw new Error(`La page ${name} n'existe pas`);
    }

    this.pages = this.pages.filter(page => page !== name);
    console.log(`[SERVICE] Page ${name} supprimée`);
  }

  getPages(): string[] {
    return [...this.pages];
  }
}