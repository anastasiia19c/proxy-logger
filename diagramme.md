
# Diagramme de classes — Proxy Logger

```mermaid
classDiagram
    class IWebsite {
        <<interface>>
        +addPage(name: string) void
        +removePage(name: string) void
        +getPages() string[]
    }

    class WebsiteService {
        -pages: string[]
        +addPage(name: string) void
        +removePage(name: string) void
        +getPages() string[]
    }

    class WebsiteProxy {
        -service: IWebsite
        -logger: Logger
        +addPage(name: string) void
        +removePage(name: string) void
        +getPages() string[]
    }

    class Logger {
        -mode: LogMode
        +log(message: string) void
        +setMode(mode: LogMode) void
    }

    IWebsite <|.. WebsiteService
    IWebsite <|.. WebsiteProxy
    WebsiteProxy --> IWebsite : délègue
    WebsiteProxy --> Logger : utilise
```
