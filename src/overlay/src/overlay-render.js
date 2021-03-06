/**
 * @ignore
 * @fileOverview KISSY Overlay
 * @author yiminghe@gmail.com
 */
KISSY.add("overlay/overlay-render", function (S, UA, Component, Extension, Loading, Close, Mask) {

    return Component.Render.extend([
        Extension.ContentBox.Render,
        Extension.Position.Render,
        Loading,
        UA['ie'] === 6 ? Extension.Shim.Render : null,
        Close,
        Mask
    ]);

}, {
    requires: ["ua", "component/base", 'component/extension',
        './extension/loading-render',
        './extension/close-render',
        './extension/mask-render']
});

/**
 * @ignore
 * 2010-11-09 2010-11-10 yiminghe@gmail.com重构，attribute-base-uibase-Overlay ，采用 UIBase.create
 */
