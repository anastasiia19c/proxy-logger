export interface IWebsite {
  addPage(name: string): void;
  removePage(name: string): void;
  getPages(): string[];
}