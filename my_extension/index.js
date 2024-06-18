// my_extension/index.js
import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';

const extension: JupyterFrontEndPlugin<void> = {
  id: 'my-extension',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension my-extension is activated!');
    const node = document.createElement('div');
    node.innerHTML = '<h1>Welcome to the Custom Binder Environment!</h1>';
    node.style.textAlign = 'center';
    const launcher = document.querySelector('.jp-Launcher-body');
    if (launcher) {
      launcher.insertBefore(node, launcher.firstChild);
    }
  }
};

export default extension;
