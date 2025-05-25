"use strict";
function runDiagnostics(param1) {
    return param1;
}
function createCar(body, tires, engine) {
    console.log(body.runDiagnostics(body.partName));
    console.log(tires.runDiagnostics(tires.partName));
    console.log(engine.runDiagnostics(engine.partName));
}
createCar({
    material: "aluminum",
    state: "scratched",
    partName: "Car Body",
    runDiagnostics,
}, {
    airPressure: 30,
    condition: "needs change",
    partName: "Tires",
    runDiagnostics,
}, { horsepower: 300, oilDensity: 780, partName: "Engine", runDiagnostics });
//# sourceMappingURL=03carDiagnostics.js.map