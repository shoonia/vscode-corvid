import { createCompletionList, isBackend, K } from './util';

const listSiteFronend = createCompletionList([
  {
    name: 'currency',
    kind: K.Property,
    detail: 'get currency(): string',
    docs: 'Gets a code representing the site\'s currency.',
  },
  {
    name: 'currentPage',
    kind: K.Property,
    detail: 'get currentPage(): StructurePage | StructureLightbox',
    docs: 'Gets information about the current page or lightbox.',
  },
  {
    name: 'language',
    kind: K.Property,
    detail: 'get language(): string',
    docs: 'Gets a code representing the site\'s language.',
  },
  {
    name: 'regionalSettings',
    kind: K.Property,
    detail: 'get regionalSettings(): string',
    docs: 'Gets the site\'s regional settings.',
  },
  {
    name: 'revision',
    kind: K.Property,
    detail: 'get revision(): string',
    docs: 'Gets the site revision ID.',
  },
  {
    name: 'timezone',
    kind: K.Property,
    detail: 'get timezone(): string',
    docs: 'Gets the site\'s timezone.',
  },
  {
    name: 'routerSitemap',
    kind: K.Method,
    snippet: 'routerSitemap(${1:routerPrefix})',
    detail: 'function routerSitemap(routerPrefix: string): Promise<Array<WixRouterSitemapEntry>>',
    docs: 'Returns the sitemap for a router or dynamic page prefix.',
  },
  {
    name: 'getSiteStructure',
    kind: K.Method,
    snippet: 'getSiteStructure()',
    detail: 'function getSiteStructure(): SiteStructure',
    docs: 'Returns information about the site\'s pages, prefixes, and lightboxes.',
  },
]);

const listSiteBackend = createCompletionList([
  {
    name: 'generalInfo',
    kind: K.Property,
    docs: 'The General Info API contains functionality for getting the information about your business that has been entered in the General Info section of your site\'s Dashboard.',
  },
]);

const listSiteGeneralInfo = createCompletionList([
  {
    name: 'getAddress',
    kind: K.Method,
    snippet: 'getAddress()',
    detail: 'function getAddress(): Promise<GeneralInfoAddress>',
    docs: 'Gets the physical address of the site\'s business.',
  },
  {
    name: 'getBusinessName',
    kind: K.Method,
    snippet: 'getBusinessName()',
    detail: 'function getBusinessName(): Promise<string>',
    docs: 'Gets the site business name.',
  },
  {
    name: 'getBusinessSchedule',
    kind: K.Method,
    snippet: 'getBusinessSchedule()',
    detail: 'function getBusinessSchedule(): Promise<GeneralInfoSchedule>',
    docs: 'Gets the business hours of the site\'s business.',
  },
  {
    name: 'getCategories',
    kind: K.Method,
    snippet: 'getCategories()',
    detail: 'function getCategories(): Promise<GeneralInfoCategories>',
    docs: 'Gets the site category information.',
  },
  {
    name: 'getDescription',
    kind: K.Method,
    snippet: 'getDescription()',
    detail: 'function getDescription(): Promise<string>',
    docs: 'Gets the site description.',
  },
  {
    name: 'getEmail',
    kind: K.Method,
    snippet: 'getEmail()',
    detail: 'function getEmail(): Promise<string>',
    docs: 'Gets the email address used for notifications of activities on your site.',
  },
  {
    name: 'getFax',
    kind: K.Method,
    snippet: 'getFax()',
    detail: 'function getFax(): Promise<string>',
    docs: 'Gets the fax number used for notifications of activities on your site.',
  },
  {
    name: 'getLanguage',
    kind: K.Method,
    snippet: 'getLanguage()',
    detail: 'function getLanguage(): Promise<string>',
    docs: 'Gets site language information.',
  },
  {
    name: 'getLocale',
    kind: K.Method,
    snippet: 'getLocale()',
    detail: 'function getLocale(): Promise<GeneralInfoLocale>',
    docs: 'Gets site locale information.',
  },
  {
    name: 'getLogo',
    kind: K.Method,
    snippet: 'getLogo()',
    detail: 'function getLogo(): Promise<string>',
    docs: 'Gets the site logo file name.',
  },
  {
    name: 'getMultilingual',
    kind: K.Method,
    snippet: 'getMultilingual()',
    detail: 'function getMultilingual(): Promise<GeneralInfoLanguages>',
    docs: 'Gets site multilingual information.',
  },
  {
    name: 'getPaymentCurrency',
    kind: K.Method,
    snippet: 'getPaymentCurrency()',
    detail: 'function getPaymentCurrency(): Promise<string>',
    docs: 'Gets site payment currency information.',
  },
  {
    name: 'getPhone',
    kind: K.Method,
    snippet: 'getPhone()',
    detail: 'function getPhone(): Promise<string>',
    docs: 'Gets the phone number used for notifications of activities on your site.',
  },
  {
    name: 'getSiteDisplayName',
    kind: K.Method,
    snippet: 'getSiteDisplayName()',
    detail: 'function getSiteDisplayName(): Promise<string>',
    docs: 'Gets the site display name.',
  },
  {
    name: 'getTimeZone',
    kind: K.Method,
    snippet: 'getTimeZone()',
    detail: 'function getTimeZone(): Promise<string>',
    docs: 'Gets site time zone information.',
  },
]);

export default {
  provideCompletionItems(doc, position) {
    const isBack = isBackend(doc.uri.path);
    const prefix = doc.lineAt(position).text.substr(0, position.character);

    if (isBack && /(wixSite\.)?generalInfo\.$/.test(prefix)) {
      return listSiteGeneralInfo;
    }

    if (prefix.endsWith('wixSite.')) {
      return isBack ? listSiteBackend : listSiteFronend;
    }
  },
};
