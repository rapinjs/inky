export declare interface InkyComponents {
    button: string
    row: string
    columns: string
    container: string
    callout: string
    inky: string
    blockGrid: string
    menu: string
    menuItem: string
    center: string
    spacer: string
    wrapper: string
}

export declare interface CheerioOpts {
    decodeEntities?: boolean
    withDomLvl1?: boolean
    normalizeWhitespace?: boolean
    xmlMode?: boolean
}
export declare interface InkyOptions {
    src?: string
    dest?: string
    cheerio?: CheerioOpts
    columnCount?: number
    components?: InkyComponents
}
export declare class Inky {
  addStyle(style: string): void
  setHtml(html: string): void
  convert(
    options?: InkyOptions,
    cheerioOpts?: CheerioOpts
  ): string
}

declare module 'rapin' {
  interface Context {
    inky: Inky
  }
}
