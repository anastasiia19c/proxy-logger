import { IWebsite } from "./IWebsite";
import { Logger } from "./Logger";

export class WebsiteProxy implements IWebsite {
  constructor(
    private service: IWebsite,
    private logger: Logger
  ) {}

  addPage(name: string): void {
    console.log("[PROXY] Interception de addPage()");

    // Le vrai service effectue l'ajout
    this.service.addPage(name);

    // Le Proxy demande au Logger d'enregistrer l'action
    this.logger.log(`Page ajoutée : ${name}`);
  }

  removePage(name: string): void {
    console.log("[PROXY] Interception de removePage()");

    // Le vrai service effectue la suppression
    this.service.removePage(name);

    // Le Proxy demande au Logger d'enregistrer l'action
    this.logger.log(`Page supprimée : ${name}`);
  }

  getPages(): string[] {
    return this.service.getPages();
  }
}