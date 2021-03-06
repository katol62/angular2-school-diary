import { join } from 'path';

import { SeedConfig } from './seed.config';
import { ExtendPackages } from './seed.config.interfaces';

const proxy = require('proxy-middleware');

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

    PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');
    PRIME_NG_THEME = 'omega';
  // //
    FONTS_DEST = `${this.APP_DEST}/fonts`;
    FONTS_SRC = [
      'node_modules/font-awesome/fonts/**',
      'node_modules/bootstrap/dist/fonts/**'
    ];
  // //
   THEME_FONTS_DEST = `${this.APP_DEST}/css/fonts`;
   THEME_FONTS_SRC = [
     'node_modules/primeng/resources/themes/' + this.PRIME_NG_THEME + '/fonts/**',
   ];
  // //
    CSS_IMAGE_DEST = `${this.CSS_DEST}/images`;
    CSS_IMAGE_SRC = [
      'node_modules/primeng/resources/themes/' + this.PRIME_NG_THEME + '/images/**'
    ];

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,

        { src: 'jquery/dist/jquery.min.js', inject: 'libs' },
        { src: 'video.js/dist/video.js', inject: 'libs' },
        { src: 'videojs-flash/dist/videojs-flash.min.js', inject: 'libs' },
        { src: 'videojs-ie8/dist/videojs-ie8.min.js', inject: 'libs' },
        { src: 'videojs-contrib-hls/dist/videojs-contrib-hls.min.js', inject: 'libs' },
          //{ src: 'videojs-swf/dist/video-js.swf', inject: 'libs' },
        { src: 'primeng/resources/primeng.css', inject: true },
        { src: 'primeng/resources/themes/omega/theme.css', inject: true },
        { src: 'font-awesome/css/font-awesome.min.css', inject: true },
        //{ src: 'bootstrap/dist/js/bootstrap.min.js', inject: 'libs'},
        { src: 'video.js/dist/video-js.css', inject: true },
        { src: 'bootstrap/dist/js/bootstrap.min.js', inject: 'libs' },
        { src: 'bootstrap/dist/css/bootstrap.min.css', inject: true }, // inject into css section
        { src: 'bootstrap/dist/css/bootstrap-theme.min.css', inject: true }, // inject into css section
        { src: 'bootstrap/dist/css/bootstrap-theme.min.css.map', inject: true }, // inject into css section
        { src: 'moment/moment.js', inject: true }, // inject into css section
        //{ src: 'ngx-bootstrap/index.js', inject: 'libs'},
        //{ src: 'ngx-bootstrap/bundles/ngx-bootstrap.umd.js', inject: 'libs'},
        { src: 'hls.js/dist/hls.min.js', inject: 'libs'},
        //{ src: 'angular-io-datepicker/src/datepicker/datePicker.js', inject: 'libs'},
        //{ src: 'angular-io-overlay/src/overlay/index.js', inject: 'libs'},
      //{ src: 'bootstrap/dist/css/bootstrap.min.css', inject: true},
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    // Add packages (e.g. ng2-translate)

    let additionalPackages: ExtendPackages[] = [
        {
          name: 'videojs',
          // Path to the package's bundle
          path: 'node_modules/video.js/dist/video.js'
        },
        {
            name:'@angular/animations',
            path:'node_modules/@angular/animations/bundles/animations.umd.js'
        },
        {
            name:'@angular/platform-browser/animations',
            path:'node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd.js'
        },
        {
            name:'@angular/platform-browser/animations/testing',
            path:'node_modules/@angular/platform-browser/bundles/platform-browser-animations-testing.umd.js'
        },
        // required for dev build
        {
            name:'ngx-bootstrap',
            path:'node_modules/ngx-bootstrap/bundles/ngx-bootstrap.umd.min.js'
        },

// required for prod build
        {
            name:'ngx-bootstrap/*',
            path:'node_modules/ngx-bootstrap/bundles/ngx-bootstrap.umd.min.js'
        },
        // mandatory dependency for ngx-bootstrap datepicker 
        {
            name:'moment',
            path:'node_modules/moment',
            packageMeta:{
                main: 'moment.js',
                defaultExtension: 'js'
            }
        }
    ];

    // let additionalPackages: ExtendPackages[] = [{
    //   name: 'ng2-translate',
    //   // Path to the package's bundle
    //   path: 'node_modules/ng2-translate/bundles/ng2-translate.umd.js'
    // }];
    //
      this.addPackagesBundles(additionalPackages);

    /* Add proxy middlewar */
    this.PROXY_MIDDLEWARE = [
      require('http-proxy-middleware')('/rest/oauth',{ ws: true, target: 'http://localhost:3003', changeOrigin: false })
    ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };
      this.PLUGIN_CONFIGS['browser-sync'] = {
          middleware: [
              proxy({
                  ws: false,
                  protocol: 'http:',
                  target: 'http://localhost:3003',
                  hostname: 'localhost',
                  port: 3003,
                  pathname: '/rest/api',
                  route: '/rest/api'
              }),
              require('connect-history-api-fallback')({index: `${this.APP_BASE}index.html`}
              ), ...this.PROXY_MIDDLEWARE
          ],
      }
  }

}
