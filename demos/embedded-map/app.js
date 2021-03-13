import WebMap from "https://js.arcgis.com/4.19/@arcgis/core/WebMap.js";
import MapView from "https://js.arcgis.com/4.19/@arcgis/core/views/MapView.js";
import Bookmarks from "https://js.arcgis.com/4.19/@arcgis/core/widgets/Bookmarks.js";
import BasemapGallery from "https://js.arcgis.com/4.19/@arcgis/core/widgets/BasemapGallery.js";
import LayerList from "https://js.arcgis.com/4.19/@arcgis/core/widgets/LayerList.js";
import Legend from "https://js.arcgis.com/4.19/@arcgis/core/widgets/Legend.js";
import Print from "https://js.arcgis.com/4.19/@arcgis/core/widgets/Print.js";

let activeAction;

const webmap = await initWebMap();
populateWebMapRelatedContent(webmap);
initView(webmap);
initActions();
showApp();

function showApp() {
  document.querySelector(".shell-container").hidden = false;
  document.getElementById("app-loader").remove();
}

async function initWebMap() {
  const webmap = new WebMap({
    portalItem: {
      id: getWebMapId()
    }
  });

  return webmap.load();
}

function getWebMapId() {
  const url = new URL(location.href);
  const webmapId = url.searchParams.get("webmapId") ?? "cc316ca9e0824970ad29ac558161d42d";
  return webmapId;
}

function populateWebMapRelatedContent(webmap) {
  document.getElementById("header-title").textContent = webmap.portalItem.title;
  document.getElementById("item-description").innerHTML = webmap.portalItem.description;
  document.getElementById("item-thumbnail").src = webmap.portalItem.thumbnailUrl;
  document.getElementById("item-rating").value = webmap.portalItem.avgRating;
}

async function initView(map) {
  const view = new MapView({
    container: "viewDiv",
    map,
    padding: { left: 49 }
  });

  view.ui.move("zoom", "bottom-right");

  const basemaps = new BasemapGallery({
    view,
    container: "basemaps-container"
  });

  const bookmarks = new Bookmarks({
    view,
    container: "bookmarks-container"
  });

  const layerList = new LayerList({
    view,
    selectionEnabled: true,
    container: "layers-container"
  });

  const legend = new Legend({
    view,
    container: "legend-container"
  });

  const print = new Print({
    view,
    container: "print-container"
  });

  return view.when();
}

async function initActions() {
  const actions = createActions();

  function handleActionBarClick(event) {
    if (event.target.tagName !== "CALCITE-ACTION") {
      return;
    }

    const action = event.target;
    const activatedId = action.getAttribute("data-action-id");
    const activeActionId = activeAction?.id;
    const nextAction = actions.find(({ id }) => id === activatedId);

    activeAction?.deactivate();

    if (activatedId === activeActionId) {
      return;
    }

    nextAction.activate();
  }

  document.querySelector("calcite-action-bar[slot=action-bar]").addEventListener("click", handleActionBarClick);
}

function createActions() {
  function activate(action, panel = true) {
    const id = action.id;

    document.querySelector(`[data-action-id=${id}]`).active = true;
    if (panel) {
      document.querySelector(`[data-panel-id=${id}]`).hidden = false;
    }

    activeAction = action;
  }
  function deactivate(action, panel = true) {
    const id = action.id;

    document.querySelector(`[data-action-id=${id}]`).active = false;
    if (panel) {
      document.querySelector(`[data-panel-id=${id}]`).hidden = true;
    }

    activeAction = null;
  }

  return [
    {
      id: "basemaps",
      activate() {
        activate(this);
      },
      deactivate() {
        deactivate(this);
      }
    },
    {
      id: "bookmarks",
      activate() {
        activate(this);
      },
      deactivate() {
        deactivate(this);
      }
    },
    {
      id: "info",
      activate() {
        activate(this);
      },
      deactivate() {
        deactivate(this);
      }
    },
    {
      id: "layers",
      activate() {
        activate(this);
      },
      deactivate() {
        deactivate(this);
      }
    },
    {
      id: "legend",
      activate() {
        activate(this);
      },
      deactivate() {
        deactivate(this);
      }
    },
    {
      id: "print",
      activate() {
        activate(this);
      },
      deactivate() {
        deactivate(this);
      }
    },
    {
      id: "feedback",
      activate() {
        activate(this, false);
        const feedbackModal = document.querySelector("#feedback-modal");
        feedbackModal.active = true;

        feedbackModal.addEventListener("calciteModalClose", () => this.deactivate(this, false), { once: true });

      },
      deactivate() {
        const feedbackModal = document.querySelector("#feedback-modal");
        feedbackModal.active = false;

        deactivate(this, false);
      }
    },
    {
      id: "tips",
      activate() {
        activate(this, false);
        const tipManager = document.querySelector("#tip-manager");
        tipManager.closed = false;

        tipManager.addEventListener("calciteTipManagerToggle", () => this.deactivate(this, false), { once: true });
      },
      deactivate() {
        const tipManager = document.querySelector("#tip-manager");
        tipManager.closed = true

        deactivate(this, false);
      }
    }
  ];
}
