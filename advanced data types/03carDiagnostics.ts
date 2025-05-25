function runDiagnostics(param1: string): string {
    return param1;
}

type carBody = { material: string; state: string };
type tires = { airPressure: number; condition: string };
type engine = { horsepower: number; oilDensity: number };
type diagnostics = {
    partName: string;
    runDiagnostics(partName: string): string;
};

function createCar(
    body: carBody & diagnostics,
    tires: tires & diagnostics,
    engine: engine & diagnostics
) {
    console.log(body.runDiagnostics(body.partName));
    console.log(tires.runDiagnostics(tires.partName));
    console.log(engine.runDiagnostics(engine.partName));
}

createCar(
    {
        material: "aluminum",
        state: "scratched",
        partName: "Car Body",
        runDiagnostics,
    },

    {
        airPressure: 30,
        condition: "needs change",
        partName: "Tires",
        runDiagnostics,
    },

    { horsepower: 300, oilDensity: 780, partName: "Engine", runDiagnostics }
);
