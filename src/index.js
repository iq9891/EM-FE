/* Automatic generated by './build/bin/build-entry.js' */

import Grid from './components/emfe-grid/index';
import EmfeIcon from './components/emfe-icon/index';
import EmfeTooltip from './components/emfe-tooltip/index';
import EmfeTransition from './components/emfe-transition/index';
import EmfeMenu from './components/emfe-menu/index';
import EmfeCopy from './components/emfe-copy/index';
import EmfeUpload from './components/emfe-upload/index';

const emfe = {
  EmfeCol: Grid.EmfeCol,
  EmfeRow: Grid.EmfeRow,
  EmfeIcon,
  EmfeTooltip,
  EmfeTransition,
  EmfeMenu,
  EmfeCopy,
  EmfeUpload,
};

//, opts = {}
const install = (Vue) => {
  if (install.installed) return;

  Object.keys(emfe).forEach((key) => {
    Vue.component(key, emfe[key]);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  install,
};
