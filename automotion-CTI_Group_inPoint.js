// Copyright (c) 2022 Rob Barrett. All rights reserved.
// Author: Rob Barrett (Automotion)
// Website: https://automotion.studio

// Purpose: Set the inPoint to the earliest inPoint of a group of selected layers.

(function () {
app.beginUndoGroup("CTI_Group_inPoint");

    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var earliestInPoint = null;

    if (layers.length > 0) {

        for (var i = 0; i < layers.length; i++) {
            if (layers[i].inPoint < earliestInPoint || earliestInPoint == null) {
                earliestInPoint = layers[i].inPoint;
            }
        };

        comp.time = earliestInPoint;
    };

    
app.endUndoGroup();
})();