import { createCompletionList, K } from './util';

const list = createCompletionList([
  {
    name: 'get',
    kind: K.Method,
    snippet: 'get(${1:collectionName}, ${2:itemId})',
    detail: 'function get(collectionName: string, itemId: string, [options: WixDataOptions]): Promise<Object>',
    docs: 'Retrieves an item from a collection.',
  },
  {
    name: 'query',
    kind: K.Method,
    snippet: 'query(${1:collectionName})',
    detail: 'function query(collectionName: string): WixDataQuery',
    docs: 'Creates a query.',
  },
  {
    name: 'insert',
    kind: K.Method,
    snippet: 'insert(${1:collectionName}, ${2:itemId})',
    detail: 'function insert(collectionName: string, item: Object, [options: WixDataOptions]): Promise<Object>',
    docs: 'Adds an item to a collection.',
  },
  {
    name: 'update',
    kind: K.Method,
    snippet: 'update(${1:collectionName}, ${2:itemId})',
    detail: 'function update(collectionName: string, item: Object, [options: WixDataOptions]): Promise<Object>',
    docs: 'Updates an item in a collection.',
  },
  {
    name: 'remove',
    kind: K.Method,
    snippet: 'remove(${1:collectionName}, ${2:itemId})',
    detail: 'function remove(collectionName: string, itemId: string, [options: WixDataOptions]): Promise<Object>',
    docs: 'Removes an item from a collection.',
  },
  {
    name: 'save',
    kind: K.Method,
    snippet: 'save(${1:collectionName}, ${2:itemId})',
    detail: 'function save(collectionName: string, item: Object, [options: WixDataOptions]): Promise<Object>',
    docs: 'Inserts or updates an item in a collection.',
  },
  {
    name: 'sort',
    kind: K.Method,
    snippet: 'sort()',
    detail: 'function sort(): WixDataSort',
    docs: 'Creates a sort to be used with the dataset setSort() function.',
  },
  {
    name: 'filter',
    kind: K.Method,
    snippet: 'filter()',
    detail: 'function filter(): WixDataFilter',
    docs: 'Creates a filter to be used with the dataset setFilter() function.',
  },
  {
    name: 'aggregate',
    kind: K.Method,
    snippet: 'aggregate(${1:collectionName})',
    detail: 'function aggregate(collectionName: string): WixDataAggregate',
    docs: 'Creates an aggregation.',
  },
  {
    name: 'bulkInsert',
    kind: K.Method,
    snippet: 'bulkInsert(${1:collectionName}, ${2:array})',
    detail: 'function bulkInsert(collectionName: string, items: Array<Object>, [options: WixDataOptions]): Promise<WixDataBulkResult>',
    docs: 'Adds a number of items to a collection.',
  },
  {
    name: 'bulkRemove',
    kind: K.Method,
    snippet: 'bulkRemove(${1:collectionName}, ${2:array})',
    detail: 'function bulkRemove(collectionName: string, itemIds: Array<string>, [options: WixDataOptions]): Promise<WixDataBulkResult>',
    docs: 'Removes a number of items from a collection.',
  },
  {
    name: 'bulkSave',
    kind: K.Method,
    snippet: 'bulkSave(${1:collectionName}, ${2:array})',
    detail: 'function bulkSave(collectionName: string, items: Array<Object>, [options: WixDataOptions]): Promise<WixDataBulkResult>',
    docs: 'Inserts or updates a number of items in a collection.',
  },
  {
    name: 'bulkUpdate',
    kind: K.Method,
    snippet: 'bulkUpdate(${1:collectionName}, ${2:array})',
    detail: 'function bulkUpdate(collectionName: string, items: Array<Object>, [options: WixDataOptions]): Promise<WixDataBulkResult>',
    docs: 'Updates a number of items in a collection.',
  },
  {
    name: 'insertReference',
    kind: K.Method,
    snippet: 'insertReference(${1:collectionName}, ${2:propertyName}, ${3:referringItem}, ${4:referencedItem})',
    detail: 'function insertReference(collectionName: string, propertyName: string, referringItem: Object | string, referencedItem: Object | string | Array<Object> | Array<string>, [options: WixDataOptions]): Promise<void>',
    docs: 'Inserts a reference in the specified property.',
  },
  {
    name: 'isReferenced',
    kind: K.Method,
    snippet: 'isReferenced(${1:collectionName}, ${2:propertyName}, ${3:referringItem}, ${4:referencedItem})',
    detail: 'function isReferenced(collectionName: string, propertyName: string, referringItem: Object | string, referencedItem: Object | string): Promise<boolean>',
    docs: 'Checks if a reference to the referenced item exists in the specified property of the referring item.',
  },
  {
    name: 'queryReferenced',
    kind: K.Method,
    snippet: 'queryReferenced(${1:collectionName}, ${2:item}, ${3:propertyName})',
    detail: 'function queryReferenced(collectionName: string, item: Object | string, propertyName: string, options: WixDataQueryReferencedOptions): Promise<WixDataQueryReferencedResult>',
    docs: 'Gets the full items referenced in the specified property.',
  },
  {
    name: 'removeReference',
    kind: K.Method,
    snippet: 'removeReference(${1:collectionName}, ${2:propertyName}, ${3:referringItem}, ${4:referencedItem})',
    detail: 'function removeReference(collectionName: string, propertyName: string, referringItem: Object | string, referencedItem: Object | string | Array<Object> | Array<string>, [options: WixDataOptions]): Promise<void>',
    docs: 'Removes a reference from the specified property.',
  },
  {
    name: 'replaceReferences',
    kind: K.Method,
    snippet: 'replaceReferences(${1:collectionName}, ${2:propertyName}, ${3:referringItem}, ${4:referencedItem})',
    detail: 'function replaceReferences(collectionName: string, propertyName: string, referringItem: Object | string, referencedItem: Object | string | Array<Object> | Array<string>, [options: WixDataOptions]): Promise<void>',
    docs: 'Replaces current references with references in the specified property.',
  },
]);

export default {
  provideCompletionItems(document, position) {
    const prefix = document.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('wixData.')) {
      return list;
    }
  },
};
