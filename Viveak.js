// Get the canvas element
const canvas = document.getElementById("renderCanvas");
// Create the BABYLON 3D engine
canvas.addEventListener("wheel", function (e) {
    e.preventDefault();
}, { passive: false });
const engine = new BABYLON.Engine(canvas, true);
// Create the scene
const createScene = function () {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", 1.5 , 1.5 , 15 , new BABYLON.Vector3(0,3,0));
    camera.attachControl(true);
    camera.inputs.attached.mousewheel.detachControl(canvas);
    camera.position = new BABYLON.Vector3( 0 , 5 , 15);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));
    camera.useAutoRotationBehavior = true;
    camera.autoRotationBehavior.idleRotationSpeed = 0.05; // Adjust the speed as needed
    camera.autoRotationBehavior.idleRotationWaitTime = 1000; // Adjust the wait time as needed
    BABYLON.SceneLoader.ImportMesh(
        '',
        './',
        'Bottle_1.gltf',
        scene,
        function(meshes){
            const model = meshes[0];
            model.scaling = new BABYLON.Vector3(1.5,1.5,1.5);
        }
        
    );
    scene.clearColor = new BABYLON.Color4(0,0,0,0);
    return scene;
};
const scene = createScene();
engine.runRenderLoop(function () {
    scene.render();
});
// Resize the engine when the window is resized
window.addEventListener("resize", function () {
    engine.resize();
});

const canvas_2 = document.getElementById("renderCanvas_2");

const engine_2 = new BABYLON.Engine(canvas_2, true);

const createScene_2 = function () {
    const scene_2 = new BABYLON.Scene(engine_2);
    const camera_2 = new BABYLON.ArcRotateCamera("camera", 1.5, 1.5, 15, new BABYLON.Vector3(0, 3, 0));
    camera_2.attachControl(canvas_2, true);
    camera_2.inputs.attached.mousewheel.detachControl(canvas_2);
    camera_2.position = new BABYLON.Vector3(0, 5, 15);
    const light_2 = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));
    BABYLON.SceneLoader.ImportMesh(
        '',
        './',
        'Batman.gltf',
        scene_2,
        function (meshes_2) {
            const model_2 = meshes_2[0];
            model_2.scaling = new BABYLON.Vector3(15, 15, 15);
        }

    );
    scene_2.clearColor = new BABYLON.Color4(0, 0, 0, 0);
    return scene_2;
};
const scene_2 = createScene_2();
engine_2.runRenderLoop(function () {
    scene_2.render();
});
window.addEventListener("resize", function () {
    engine_2.resize();
});
