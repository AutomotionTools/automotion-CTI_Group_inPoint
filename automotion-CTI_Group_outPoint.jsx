// Author: Rob Barrett (Automotion) - https://automotion.studio
// Copyright (c) 2022 Rob Barrett. All rights reserved.
// Version: 1.0
// Description: Moves the active comp's CTI to the latest outPoint of a group of selected layers.

(function () {
app.beginUndoGroup("CTI_Group_outPoint");

    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var latestOutPoint = null;

    if (layers.length > 0) {

        for (var i = 0; i < layers.length; i++) {
            if (layers[i].outPoint > latestOutPoint || latestOutPoint == null) {
                latestOutPoint = layers[i].outPoint;
            }
        };

        comp.time = latestOutPoint;
    };

    
app.endUndoGroup();
})();