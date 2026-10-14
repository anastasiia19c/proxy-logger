import { WebsiteService } from "./WebsiteService";
import { WebsiteProxy } from "./WebsiteProxy";
import { Logger } from "./Logger";

// Création du véritable service
const service = new WebsiteService();

// Configuration utilisateur : console
const logger = new Logger("console");

// Le Proxy reçoit le véritable service et le Logger
const proxy = new WebsiteProxy(service, logger);

// TEST 1 : Sans Proxy
console.log("\n=== TEST 1 : SANS PROXY ===");

service.addPage("Accueil");

// TEST 2 : Avec Proxy
console.log("\n=== TEST 2 : AVEC PROXY ===");

proxy.addPage("Contact");
proxy.addPage("Blog");

// TEST 3 : Changer la configuration du Logger
console.log("\n=== TEST 3 : MODE FICHIER ===");

logger.setMode("file");

proxy.removePage("Contact");

// Vérification
console.log("\n=== PAGES EXISTANTES ===");
console.log(proxy.getPages());