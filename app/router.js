import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('main');
  this.route('cms', function() {
    this.route('log');
    this.route('qa_plan');
    this.route('do_well');
    this.route('demiurge');
    this.route('Judgment_bottom');
    this.route('improvments_list');
    this.route('recommended_sites');
    this.route('activists_journal');
  });
});

export default Router;
