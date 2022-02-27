import ContentEntryController from '../controller/contentEntryController.js';

const contentEntryRoutes = [
  {
    method: 'GET',
    url: '/content/entry/:id',
    handler: ContentEntryController.getEntryById,
  },
  {
    method: 'GET',
    url: '/content/entry/byUser/:timelineId',
    handler: ContentEntryController.getEntryByTimelineId,
  },
  {
    method: 'GET',
    url: '/content/entry',
    handler: ContentEntryController.getEntries,
  },
  {
    method: 'POST',
    url: '/content/entry',
    handler: ContentEntryController.createEntry,
  },
  {
    method: 'PUT',
    url: '/content/entry/:id',
    handler: ContentEntryController.editEntry,
  },
  {
    method: 'DELETE',
    url: '/content/entry/:id',
    handler: ContentEntryController.deleteEntry,
  },
];

export default contentEntryRoutes;
