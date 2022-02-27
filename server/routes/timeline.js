import TimelineController from '../controller/timelineController.js';
import multer from '../middleware/upload.js';

const timelineRoutes = [
  {
    method: 'GET',
    url: '/content/timeline/:id',
    handler: TimelineController.getTimelineById,
  },
  {
    method: 'GET',
    url: '/content/timeline/byUser/:userId',
    handler: TimelineController.getTimelineByUserId,
  },
  {
    method: 'GET',
    url: '/content/timeline',
    handler: TimelineController.getTimelines,
  },
  {
    method: 'POST',
    url: '/content/timeline',
    handler: TimelineController.createTimeline,
  },
  {
    method: 'PUT',
    url: '/content/timeline/:id',
    handler: TimelineController.editTimeline,
  },
  {
    method: 'DELETE',
    url: '/content/timeline/:id',
    handler: TimelineController.deleteTimeline,
  },
  {
    method: 'PUT',
    url: '/content/timeline/setimage',
    preHandler: multer.single('file'),
    handler: TimelineController.addImgToTimeline,
  },
  {
    method: 'PUT',
    url: '/content/timeline/entry/add',
    preHandler: multer.single('file'),
    handler: TimelineController.addEntry,
  },
  {
    method: 'PUT',
    url: '/content/timeline/entry/edit',
    handler: TimelineController.editEntry,
  },
  {
    method: 'PUT',
    url: '/content/timeline/entry/del',
    handler: TimelineController.deleteEntry,
  },
  {
    method: 'GET',
    url: '/content/timeline/entry/view',
    handler: TimelineController.viewEntry,
  },
  {
    method: 'GET',
    url: '/content/timeline/entry/view/image/:filename',
    handler: TimelineController.viewImage,
  },
];

export default timelineRoutes;
